"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import appLogo from "@/assets/images/icons/logo.png";

export function Header() {
  const [btnMenuActive, setBtnMenuActive] = useState(false);

  const links = [
    { href: "/", text: "Home" },
    { href: "/sobre", text: "Sobre" },
    { href: "/blog", text: "Blog" },
    { href: "/planos", text: "Planos" },
    { href: "/app", text: "Acessar" },
  ];

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
            <ul className={`navbar ${btnMenuActive ? "open-navbar" : ""}`}>
              <div className="logo-mobile">
                <div className="logo">
                  <Image
                    src={appLogo}
                    alt="Logo do sol alimentando a energia de um painel solar"
                  />
                  <span>
                    Solar<b>Tech</b>
                  </span>
                </div>
              </div>
              {links.map((anchor, index) => (
                <li key={index}>
                  <Link href={anchor.href}>{anchor.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`btn-header-mobile btn gradient gradient-yellow gradient-hover radius transition ${
              btnMenuActive ? "active" : ""
            }`}
            onClick={() => {
              setBtnMenuActive(!btnMenuActive);
            }}
          >
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
