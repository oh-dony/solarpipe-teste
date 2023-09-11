"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Images
import appLogo from "@/assets/images/icons/logo.png";

// Components
import DarkModeSwitch from "./DarkModeSwitch";

export function Header() {
  const [btnMenuActive, setBtnMenuActive] = useState(false);

  const links = [
    { href: "/", text: "Home" },
    { href: "/sobre", text: "Sobre" },
    { href: "/blog", text: "Blog" },
    {
      href: "/aplicacao",
      text: "Mapa Solar",
      className:
        "access-btn btn gradient gradient-red gradient-hover radius transition",
    },
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
              {links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className={link.className}>
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <DarkModeSwitch />
              </li>
            </ul>
          </nav>

          <button
            className={`btn-header-mobile btn gradient gradient-red gradient-hover radius transition ${
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
