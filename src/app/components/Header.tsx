import Image from "next/image";

// Images
import appLogo from "@/assets/images/icons/logo.png";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Image
              src={appLogo}
              alt="Logo do sol alimentando a energia de um painel solar"
            />
            <span>
              Solar<b>Tech</b>
            </span>
          </div>

          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato">Contato</Link>
                <Link href="/app">Acessar</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
