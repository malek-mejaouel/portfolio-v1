import { useRef, useEffect } from "react";

// Canvas-based dynamic background: binary code rain (Matrix/hacker style)
export const StarBackground = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = width * DPR;
    canvas.height = height * DPR;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

    // Binary rain parameters
    const fontSize = 22;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(0).map(() => Math.random() * height);

    function randChar() {
      return Math.random() > 0.5 ? "0" : "1";
    }

    function isDarkMode() {
      return document.documentElement.classList.contains("dark");
    }

    function draw() {
      const dark = isDarkMode();

      // background (changes with theme)
      ctx.fillStyle = dark ? "rgba(20, 6, 30, 0.72)" : "rgba(255, 255, 255, 0.72)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.textAlign = "center";

      for (let i = 0; i < columns; i++) {
        // color adapts to theme
        ctx.fillStyle = dark
          ? i % 8 === 0 ? "#f0d9ff" : "#b08af7" // purple tones
          : i % 8 === 0 ? "#1a1a1a" : "#555555"; // gray tones for light mode

        ctx.shadowColor = dark ? "#b08af7" : "#aaa";
        ctx.shadowBlur = 12;

        const char = randChar();
        ctx.fillText(char, i * fontSize + fontSize / 2, drops[i]);
        ctx.shadowBlur = 0;

        // movement
        if (drops[i] > height + fontSize * 2 || Math.random() > 0.996) {
          drops[i] = Math.random() * -200;
        } else {
          drops[i] += fontSize * (0.18 + Math.random() * 0.08);
        }
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * DPR;
      canvas.height = height * DPR;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function loop() {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    }

    // detect theme changes (Tailwind or system)
    const observer = new MutationObserver(() => {
      // triggers a redraw with updated colors
      draw();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(loop);

    // cleanup
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};
