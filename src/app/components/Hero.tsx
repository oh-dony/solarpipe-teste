import Image from "next/image";
import Link from "next/link";

// Images
import appLogo from "@/assets/images/icons/sol.png";

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

        <Link
          href="/app"
          className="btn btn-full gradient gradient-yellow gradient-hover radius transition"
        >
          Acessar
        </Link>
      </div>

      <div className="animated-sun">
        <Image src={appLogo} alt="" />
      </div>
    </div>
  );
}
