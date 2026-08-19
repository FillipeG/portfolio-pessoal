import { useEffect, useRef } from 'react';
import '../styles/MatrixRain.css';

const CHARS =
  'アイウエオカキクケコサシスセソタチツテト01010101<>/{}[]=+-*;#include(){}=>';

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const fontSize = 16;
    let columns = 0;
    let drops = [];
    let intervalId;

    function setup() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }

    function draw() {
      ctx.fillStyle = 'rgba(13, 13, 13, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#39ff14';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillText(char, i * fontSize, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 1;
      });
    }

    setup();
    intervalId = setInterval(draw, 50);
    window.addEventListener('resize', setup);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', setup);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}