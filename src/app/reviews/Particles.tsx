'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container, Engine } from "@tsparticles/engine";
import { useTheme } from "next-themes";

const colors = [
  "#afafff", // Original - soft lavender blue
  "#ffb347", // Pastel orange
  "#77dd77", // Pastel green
  "#ff6961", // Pastel red
  "#ffb3de", // Pastel pink
  "#b19cd9", // Pastel purple
  "#aec6cf", // Pastel blue
  "#fdfd96", // Pastel yellow
  "#cb99c9", // Pastel magenta
  "#84b6f4"  // Pastel sky blue
];

interface ParticlesComponentProps {
  id: string;
}

function ParticlesComponent ({ id }: ParticlesComponentProps) {

  const [colorIndex, setColorIndex] = useState<number>(0);

  const {theme} = useTheme();

  const [particleCount, setParticleCount] = useState<number>(200);
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };
  
  useEffect(() => {
    const handlePageClick = (): void => {
      setParticleCount((prev) => prev + 20);
      setColorIndex((prev) => (prev + 1) % colors.length)
    };
    window.addEventListener("click", handlePageClick);

    return () => window.removeEventListener("click", handlePageClick);
  }, []);

  const options = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: theme === 'dark' ? colors[colorIndex] : '#222',
      },
      links: {
        color: theme === 'dark' ? colors[colorIndex] : '#222',
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none" as const,
        enable: true,
        outModes: {
          default: "bounce" as const,
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: particleCount,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: {
          min: 1,
          max: 3,
        },
      },
    },
    detectRetina: true,
  }), [particleCount]);
  
  return init ?
    (<Particles id={id} particlesLoaded={particlesLoaded} options={options} />) : null;
};

export default ParticlesComponent;