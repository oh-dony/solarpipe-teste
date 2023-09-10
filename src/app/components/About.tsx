// Helpers
import { beneficiosEnergiaSolar } from "@/app/helpers/herlper";

export function About() {
  return (
    <section id="sobre">
      <div className="about">
        <div className="container content">
          <div className="section-header">
            <h2>Sobre</h2>
            <p>
              Solução completa de Energia Solar Residencial, Empresarial e
              Industrial, para todo o Brasil. Fuja dos reajustes e comece a
              economizar na conta de energia!
            </p>
          </div>

          <div className="about-content">
            {beneficiosEnergiaSolar.map((beneficios, index) => (
              <article key={index}>
                <div className="article-icone">{beneficios.icone}</div>
                <div className="article-body">
                  <h2>{beneficios.titulo}</h2>
                  <p>{beneficios.descricao}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
