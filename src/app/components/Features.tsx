import Image from "next/image";

// Helpers
import { noticiasEnergiaSolar } from "@/app/helpers/herlper";

export function Features() {
  const noticias = noticiasEnergiaSolar;

  return (
    <section>
      <div className="features">
        <div className="container content">
          <div className="section-header">
            <h2>Artigos</h2>
            <p>
              Fique por dentro das últimas novidades no mundo da energia solar e
              descubra como a energia do sol está transformando o nosso futuro
              sustentável.
            </p>
          </div>

          <div className="articles-content">
            {noticias.map((noticia, index) => (
              <article key={index}>
                <div className="article-cover">
                  <Image
                    src={noticia.capa}
                    alt="Article Cover"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="article-category">
                  <a
                    href="#"
                    className="gradient gradient-hover transition gradient-yellow"
                  >
                    Artigo
                  </a>
                </div>
                <div className="article-details">
                  <h2>{noticia.titulo}</h2>
                  <p>{noticia.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
