import { useEffect, useRef } from "react";
import "./ParticleField.css";

// Particle colors come from the active theme (--particle-1..3 in index.css)
const PALETTE_VARS = ["--particle-1", "--particle-2", "--particle-3"];
const FALLBACK_PALETTE = ["91, 156, 255", "47, 111, 237", "234, 238, 247"];

function readPalette() {
  const styles = getComputedStyle(document.documentElement);
  return PALETTE_VARS.map(
    (name, i) => styles.getPropertyValue(name).trim() || FALLBACK_PALETTE[i]
  );
}

const COUNT = 44;
const REPEL_RADIUS = 130;

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles = [];
    let palette = readPalette();
    let rafId = null;
    const mouse = { x: -9999, y: -9999 };

    function resizeCanvas() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.7,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        colorIndex: Math.floor(Math.random() * PALETTE_VARS.length),
        alpha: Math.random() * 0.35 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${palette[p.colorIndex]}, ${p.alpha})`;
        ctx.fill();
      });
    }

    function tick() {
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          const nx = dx / (dist || 1);
          const ny = dy / (dist || 1);
          p.x += nx * force * 1.6;
          p.y += ny * force * 1.6;
        }
      });
      draw();
      rafId = requestAnimationFrame(tick);
    }

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function setup() {
      resizeCanvas();
      createParticles();
      draw();
    }

    setup();
    window.addEventListener("resize", setup);

    // Re-read colors whenever the theme changes
    const themeObserver = new MutationObserver(() => {
      palette = readPalette();
      if (reduceMotion) draw(); // no animation loop running in this mode
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    if (!reduceMotion) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      rafId = requestAnimationFrame(tick);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      themeObserver.disconnect();
      window.removeEventListener("resize", setup);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
