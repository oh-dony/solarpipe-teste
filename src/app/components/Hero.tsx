"use client";

import Image from "next/image";
import Link from "next/link";

// Images
import appLogo from "@/assets/images/icons/sol.png";

export function Hero() {
  const aboutSection = document.getElementById("sobre");

  function scroll() {
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="hero">
      <div className="hero-description">
        <h2>Otimize sua energia solar</h2>
        <p>
          Registre-se agora e controle sua produção de energia solar com
          precisão, aproveitando ao máximo a intensidade do sol em sua área.
          Deixe as automações cuidarem do trabalho enquanto você relaxa com uma
          xícara de café quente!
        </p>

        <button
          onClick={scroll}
          className="btn btn-full gradient gradient-yellow gradient-hover radius transition"
        >
          Conheça a SolarTech
        </button>
      </div>

      <div className="animated-sun">
        <Image src={appLogo} alt="" />
      </div>
    </div>
  );
}
