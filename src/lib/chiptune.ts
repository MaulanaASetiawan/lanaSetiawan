const USE_CUSTOM_AUDIO = false;
const CUSTOM_AUDIO_PATH = '/audio/bgm.mp3';
const MASTER_VOLUME = 0.08;

class ChiptuneEngine {
  private isPlaying = false;
  private audioContext: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private customAudio: HTMLAudioElement | null = null;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private currentStep = 0;
  private bpm = 140;

  private melody = [
    523.25, 587.33, 659.25, 783.99, 880.0,
    783.99, 659.25, 587.33, 523.25, 440.0,
    392.0, 440.0, 523.25, 587.33, 659.25,
    523.25, 440.0, 392.0, 349.23, 392.0,
  ];

  private bass = [
    130.81, 130.81, 146.83, 146.83,
    164.81, 164.81, 196.0, 196.0,
    174.61, 174.61, 164.81, 164.81,
    146.83, 146.83, 130.81, 130.81,
  ];

  private arpPattern = [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0];

  private async init() {
    if (this.audioContext || typeof window === 'undefined') return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.audioContext = new AudioCtx();
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0;
    this.masterGain.connect(this.audioContext.destination);
  }

  private initCustomAudio() {
    if (this.customAudio || typeof window === 'undefined') return;
    this.customAudio = new Audio(CUSTOM_AUDIO_PATH);
    this.customAudio.loop = true;
    this.customAudio.volume = MASTER_VOLUME;
  }

  private playCustomAudio() {
    this.initCustomAudio();
    this.customAudio?.play().catch(() => {});
    this.isPlaying = true;
  }

  private pauseCustomAudio() {
    if (this.customAudio) this.customAudio.pause();
    this.isPlaying = false;
  }

  private playNote(freq: number, type: OscillatorType = 'square', duration = 0.12, volume = 0.5) {
    if (!this.audioContext || !this.masterGain) return;
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2500, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.01);
    gain.gain.setValueAtTime(volume * 0.7, now + duration * 0.3);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + duration + 0.05);
  }

  private stepSequencer() {
    if (!this.isPlaying) return;
    const stepDuration = 60 / this.bpm / 2;

    const melodyIdx = this.currentStep % this.melody.length;
    if (this.arpPattern[this.currentStep % this.arpPattern.length]) {
      this.playNote(this.melody[melodyIdx], 'square', stepDuration * 0.8, 0.35);
    }

    if (this.currentStep % 4 === 0) {
      const bassIdx = Math.floor(this.currentStep / 4) % this.bass.length;
      this.playNote(this.bass[bassIdx], 'triangle', stepDuration * 3.5, 0.5);
    }

    if (this.currentStep % 2 === 0) this.playNoise(stepDuration * 0.1, 0.06);
    if (this.currentStep % 8 === 0) this.playKick();

    this.currentStep++;
    const timer = setTimeout(() => this.stepSequencer(), stepDuration * 1000);
    this.timers.push(timer);
  }

  private playNoise(duration: number, volume: number) {
    if (!this.audioContext || !this.masterGain) return;
    const now = this.audioContext.currentTime;
    const bufferSize = Math.floor(this.audioContext.sampleRate * duration);
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const noise = this.audioContext.createBufferSource();
    const gain = this.audioContext.createGain();
    const filter = this.audioContext.createBiquadFilter();
    noise.buffer = buffer;
    filter.type = 'highpass';
    filter.frequency.value = 7000;
    gain.gain.setValueAtTime(volume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);
    noise.start(now);
    noise.stop(now + duration);
  }

  private playKick() {
    if (!this.audioContext || !this.masterGain) return;
    const now = this.audioContext.currentTime;
    const osc = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + 0.12);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  private async playSynth() {
    await this.init();
    if (!this.audioContext || !this.masterGain) return;
    if (this.audioContext.state === 'suspended') await this.audioContext.resume();
    this.isPlaying = true;
    this.currentStep = 0;
    this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioContext.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(MASTER_VOLUME, this.audioContext.currentTime + 0.3);
    this.stepSequencer();
  }

  private pauseSynth() {
    this.isPlaying = false;
    if (this.masterGain && this.audioContext) {
      this.masterGain.gain.cancelScheduledValues(this.audioContext.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioContext.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 0.2);
    }
    this.timers.forEach((t) => clearTimeout(t));
    this.timers = [];
  }

  async toggle(): Promise<boolean> {
    if (this.isPlaying) {
      USE_CUSTOM_AUDIO ? this.pauseCustomAudio() : this.pauseSynth();
    } else {
      USE_CUSTOM_AUDIO ? this.playCustomAudio() : await this.playSynth();
    }
    return this.isPlaying;
  }

  getState(): boolean {
    return this.isPlaying;
  }
}

export const chiptuneEngine = new ChiptuneEngine();
