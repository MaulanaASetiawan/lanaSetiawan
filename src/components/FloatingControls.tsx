'use client';

import React, { useEffect, useState } from 'react';
import { chiptuneEngine } from '@/lib/chiptune';

export default function FloatingControls() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [crtActive, setCrtActive] = useState(true);

  useEffect(() => {
    const savedCrt = localStorage.getItem('pixel-cv-crt');
    const initialCrt = savedCrt !== null ? savedCrt === 'true' : true;
    setCrtActive(initialCrt);
    document.body.classList.toggle('crt-active', initialCrt);
  }, []);

  const handleToggleAudio = async () => {
    const playing = await chiptuneEngine.toggle();
    setAudioPlaying(playing);
  };

  const handleToggleCrt = () => {
    const next = !crtActive;
    setCrtActive(next);
    document.body.classList.toggle('crt-active', next);
    localStorage.setItem('pixel-cv-crt', String(next));
  };

  return (
    <div className="floating-controls" role="group" aria-label="Pengaturan efek suara dan layar">
      <button
        id="audio-toggle"
        type="button"
        className={`floating-btn audio-toggle ${audioPlaying ? 'is-active' : ''}`}
        aria-label={audioPlaying ? 'Matikan musik latar chiptune' : 'Nyalakan musik latar chiptune'}
        aria-pressed={audioPlaying}
        title={audioPlaying ? 'Matikan Musik Chiptune' : 'Putar Musik Chiptune'}
        onClick={handleToggleAudio}
      >
        {audioPlaying ? '🔊' : '🔇'}
      </button>
      <button
        id="crt-toggle"
        type="button"
        className={`floating-btn crt-toggle ${crtActive ? 'is-active' : ''}`}
        aria-label={crtActive ? 'Matikan efek layar CRT' : 'Nyalakan efek layar CRT'}
        aria-pressed={crtActive}
        title={crtActive ? 'Matikan Filter CRT' : 'Nyalakan Filter CRT'}
        onClick={handleToggleCrt}
      >
        📺
      </button>
    </div>
  );
}
