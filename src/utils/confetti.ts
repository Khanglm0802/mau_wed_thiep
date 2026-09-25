import confetti from 'canvas-confetti';

export const triggerPoeticConfetti = () => {
  // Soft pastel petal shower
  confetti({
    particleCount: 65,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#FDA4AF', '#F472B6', '#DDA7A5', '#FFF0F5', '#FDE047'],
    ticks: 250,
    gravity: 0.8,
    scalar: 1.1,
    shapes: ['circle'],
  });

  setTimeout(() => {
    confetti({
      particleCount: 45,
      angle: 60,
      spread: 60,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#FBCFE8', '#FDA4AF', '#FDF2F8', '#DDA7A5'],
      gravity: 0.7,
      scalar: 1.2,
    });
    confetti({
      particleCount: 45,
      angle: 120,
      spread: 60,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#FBCFE8', '#FDA4AF', '#FDF2F8', '#DDA7A5'],
      gravity: 0.7,
      scalar: 1.2,
    });
  }, 250);
};

// Backward compatibility alias
export const triggerCyberConfetti = triggerPoeticConfetti;
