import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [showMeteors, setShowMeteors] = useState(false);

  useEffect(() => {
    generateStars();
    generateMeteors();

    // small delay before showing meteors so animations have time to initialize
    const meteorTimeout = setTimeout(() => setShowMeteors(true), 120);

    // Regenerate stars on resize
    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(meteorTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 🌟 Generate static background stars
  const generateStars = () => {
    const numberOfStars = Math.max(20, Math.floor((window.innerWidth * window.innerHeight) / 1000));
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // 1–4px
        x: Math.random() * 100, // percentage
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2, // 2–6s
      });
    }

    setStars(newStars);
  };

  // ☄️ Generate falling meteors
  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1, // 1–3px width
        x: Math.random() * 100, // start X%
        y: Math.random() * 20, // top area (0–20%)
        opacity: Math.random() * 0.5 + 0.5,
        delay: `${Math.random() * 5}s`, // random start delay
        animationDuration: Math.random() * 3 + 3, // 3–6s
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 🌟 Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {/* ☄️ Meteors (render after a short delay) */}
      {showMeteors &&
        meteors.map((meteor) => (
          <div
            key={`meteor-${meteor.id}`}
            className="meteor animate-meteor"
            style={{
              // smaller multiplier to avoid large horizontal blocks before animation
              width: `${meteor.size * 30}px`, // make visible trail
              height: `${meteor.size}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              opacity: meteor.opacity,
              animationDelay: meteor.delay,
              animationDuration: `${meteor.animationDuration}s`,
            }}
          />
        ))}
    </div>
  );
};
