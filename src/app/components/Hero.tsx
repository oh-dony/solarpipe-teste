import Image from "next/image";

// Images
import appLogo from "@/assets/images/icons/logo.png";

export function Hero() {
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

        <a
          href="http://"
          className="btn btn-full gradient gradient-yellow gradient-hover radius transition"
        >
          Acessar
        </a>
      </div>
    </div>
  );
}
