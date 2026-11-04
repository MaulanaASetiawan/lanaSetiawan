'use client';

import React, { useEffect, useRef, useState } from 'react';

interface MiniGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MiniGameModal({ isOpen, onClose }: MiniGameModalProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [scoreText, setScoreText] = useState('SCORE: 0');

  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    document.body.style.overflow = 'hidden';

    let animFrame = 0;
    let lastTime = 0;
    let state: 'IDLE' | 'PLAYING' | 'GAME_OVER' = 'IDLE';
    let score = 0;
    let highScore = parseInt(localStorage.getItem('pixel-runner-hi') || '0', 10);
    let speed = 3.5;
    let spawnTimer = 0;

    const maxW = Math.min((canvas.parentElement?.clientWidth || 640) - 8, 640);
    canvas.width = maxW;
    canvas.height = Math.max(160, Math.floor(maxW * 0.32));
    const groundY = canvas.height - 28;

    const player = { x: 60, y: groundY - 18, w: 18, h: 18, vy: 0, grounded: true };
    let obstacles: { x: number; y: number; w: number; h: number }[] = [];
    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
    }[] = [];

    const clouds = Array.from({ length: 4 }, () => ({
      x: Math.random() * canvas.width,
      y: 15 + Math.random() * (groundY * 0.35),
      w: 20 + Math.random() * 25,
      h: 8 + Math.random() * 6,
      speed: 0.3 + Math.random() * 0.5,
    }));

    const reset = () => {
      score = 0;
      speed = 3.5;
      spawnTimer = 0;
      obstacles = [];
      particles = [];
      player.y = groundY - player.h;
      player.vy = 0;
      player.grounded = true;
      state = 'IDLE';
      setScoreText(`SCORE: 0  HI: ${highScore}`);
    };

    const handleJump = () => {
      if (state === 'IDLE') {
        state = 'PLAYING';
        return;
      }
      if (state === 'GAME_OVER') {
        reset();
        state = 'PLAYING';
        return;
      }
      if (player.grounded) {
        player.vy = -(8 + canvas.height * 0.028);
        player.grounded = false;
      }
    };

    const getColor = (varName: string, fallback: string) =>
      getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || fallback;

    const gameOver = () => {
      state = 'GAME_OVER';
      if (score > highScore) {
        highScore = score;
        localStorage.setItem('pixel-runner-hi', String(highScore));
      }
      for (let i = 0; i < 12; i++) {
        particles.push({
          x: player.x + player.w / 2,
          y: player.y + player.h / 2,
          vx: (Math.random() - 0.5) * 6,
          vy: (Math.random() - 0.5) * 6 - 2,
          size: 2 + Math.random() * 4,
          life: 20 + Math.random() * 20,
        });
      }
    };

    const update = (dt: number) => {
      speed += 0.002 * dt;
      score += Math.floor(speed * dt);

      if (!player.grounded) {
        player.vy += (0.55 + canvas.height * 0.001) * dt;
        player.y += player.vy * dt;
        if (player.y >= groundY - player.h) {
          player.y = groundY - player.h;
          player.vy = 0;
          player.grounded = true;
        }
      }

      spawnTimer += dt;
      const spawnInterval = Math.max(30, 70 - speed * 4);
      if (spawnTimer >= spawnInterval) {
        spawnTimer = 0;
        const h = 14 + Math.random() * 22;
        const w = 12 + Math.random() * 12;
        obstacles.push({
          x: canvas.width + 10,
          y: groundY - h,
          w,
          h,
        });
      }

      for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= speed * dt;
        if (obstacles[i].x + obstacles[i].w < 0) {
          obstacles.splice(i, 1);
          continue;
        }
        const o = obstacles[i];
        const margin = 3;
        if (
          player.x + margin < o.x + o.w &&
          player.x + player.w - margin > o.x &&
          player.y + margin < o.y + o.h &&
          player.y + player.h - margin > o.y
        ) {
          gameOver();
          return;
        }
      }

      clouds.forEach((c) => {
        c.x -= c.speed * dt;
        if (c.x + c.w < 0) {
          c.x = canvas.width + 10;
          c.y = 15 + Math.random() * (groundY * 0.35);
        }
      });

      for (let i = particles.length - 1; i >= 0; i--) {
        const pt = particles[i];
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.vy += 0.3 * dt;
        pt.life -= dt;
        if (pt.life <= 0) particles.splice(i, 1);
      }

      setScoreText(`SCORE: ${score}  HI: ${Math.max(score, highScore)}`);
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      const bgColor = getColor('--game-bg', '#0d1117');
      const groundColor = getColor('--game-ground', '#30363d');
      const playerColor = getColor('--game-player', '#38bdf8');
      const obstacleColor = getColor('--game-obstacle', '#f97316');
      const cloudColor = getColor('--game-cloud', '#1c2333');
      const textColor = getColor('--game-text', '#e6edf3');

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = cloudColor;
      clouds.forEach((cl) => {
        ctx.fillRect(cl.x, cl.y, cl.w, cl.h);
        ctx.fillRect(cl.x + 4, cl.y - 4, cl.w - 8, 4);
      });

      ctx.fillStyle = groundColor;
      ctx.fillRect(0, groundY, w, 3);
      for (let gx = 0; gx < w; gx += 12) {
        ctx.fillRect(gx, groundY + 6, 2, 2);
      }

      if (state !== 'GAME_OVER') {
        ctx.fillStyle = playerColor;
        ctx.fillRect(player.x, player.y, player.w, player.h);
        ctx.fillStyle = bgColor;
        ctx.fillRect(player.x + 11, player.y + 4, 4, 4);
        ctx.fillStyle = textColor;
        ctx.fillRect(player.x + 12, player.y + 5, 2, 2);
      }

      ctx.fillStyle = obstacleColor;
      obstacles.forEach((o) => {
        ctx.fillRect(o.x, o.y, o.w, o.h);
        ctx.fillStyle = bgColor;
        ctx.fillRect(o.x + 3, o.y + 2, 2, o.h - 4);
        ctx.fillStyle = obstacleColor;
      });

      particles.forEach((pt) => {
        ctx.globalAlpha = Math.max(0, pt.life / 30);
        ctx.fillStyle = playerColor;
        ctx.fillRect(pt.x, pt.y, pt.size, pt.size);
      });
      ctx.globalAlpha = 1;

      ctx.font = 'bold 12px monospace';
      ctx.fillStyle = textColor;

      if (state === 'IDLE') {
        ctx.textAlign = 'center';
        ctx.fillText('PRESS SPACE OR TAP TO START', w / 2, h / 2 - 4);
        if (highScore > 0) {
          ctx.fillText(`HI-SCORE: ${highScore}`, w / 2, h / 2 + 18);
        }
      }

      if (state === 'GAME_OVER') {
        ctx.textAlign = 'center';
        ctx.fillStyle = obstacleColor;
        ctx.fillText('GAME OVER', w / 2, h / 2 - 12);
        ctx.fillStyle = textColor;
        ctx.fillText(`SCORE: ${score} • SPACE / TAP TO RETRY`, w / 2, h / 2 + 12);
      }
    };

    const loop = (timestamp = 0) => {
      const dt = Math.min((timestamp - lastTime) / 16.67, 3);
      lastTime = timestamp;
      if (state === 'PLAYING') update(dt);
      draw();
      animFrame = requestAnimationFrame(loop);
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault();
        handleJump();
      }
      if (e.code === 'Escape') {
        onClose();
      }
    };

    reset();
    animFrame = requestAnimationFrame(loop);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="game-modal is-open"
      id="minigame-modal"
      role="dialog"
      aria-modal="true"
      aria-label="Pixel Runner Mini-Game"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="game-container pixel-border">
        <div className="game-header">
          <span className="game-title">🕹️ PIXEL RUNNER</span>
          <button
            type="button"
            className="game-close"
            id="minigame-close"
            aria-label="Tutup mini-game"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div
          className="game-canvas-wrap"
          onClick={() => {
            const ev = new KeyboardEvent('keydown', { code: 'Space' });
            document.dispatchEvent(ev);
          }}
        >
          <canvas id="minigame-canvas" ref={canvasRef} width={640} height={200} />
        </div>
        <div className="game-info">
          <span id="minigame-score">{scoreText}</span>
          <span>SPACE / TAP TO JUMP &nbsp;•&nbsp; ESC TO EXIT</span>
        </div>
      </div>
    </div>
  );
}
