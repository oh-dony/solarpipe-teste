import Image from "next/image";

// Images
import team1 from "@/assets/images/team/team-1.jpeg";
import team2 from "@/assets/images/team/team-2.jpeg";
import team3 from "@/assets/images/team/team-3.jpeg";
import team4 from "@/assets/images/team/team-4.jpeg";

export function Team() {
  return (
    <section className="team">
      <div className="section-header">
        <h2>Equipe</h2>
        <p>
          Fale sobre você ou da sua equipe, é muito legal seus clientes conhecer
          você e sua empresa, deixa você mas próximo do público.
        </p>
      </div>

      <div className="team-seo-content">
        <aside className="team-seo-avatar">
          <Image src={team1} alt="Seo da Empresa" />
        </aside>
        <aside className="team-seo-details">
          <h2>Heitor Davi</h2>
          <p>
            Estamos iluminando o caminho para um futuro mais brilhante e
            sustentável, onde a energia solar é a força motriz por trás de uma
            revolução energética global. A cada dia, estamos transformando a luz
            do sol em uma fonte inesgotável de poder, capacitando comunidades,
            empresas e o planeta a prosperar juntos. Juntos, estamos construindo
            um mundo mais limpo, mais verde e mais próspero para as gerações
            futuras.
          </p>
          <span>
            — <i>Heitor Davi</i>
          </span>
        </aside>
      </div>

      <div className="team-content">
        <article className="article-team">
          <div className="team-avatar">
            <Image src={team1} alt="Team Avatar" />
          </div>
          <div className="team-details">
            <h2>Heitor Davi</h2>
            <p>CEO</p>
          </div>
        </article>
        <article className="article-team">
          <div className="team-avatar">
            <Image src={team2} alt="Team Avatar" />
          </div>
          <div className="team-details">
            <h2>João Batista</h2>
            <p>Cofundador</p>
          </div>
        </article>
        <article className="article-team">
          <div className="team-avatar">
            <Image src={team3} alt="Team Avatar" />
          </div>
          <div className="team-details">
            <h2>Tiago Torres</h2>
            <p>Design</p>
          </div>
        </article>
        <article className="article-team">
          <div className="team-avatar">
            <Image src={team4} alt="Team Avatar" />
          </div>
          <div className="team-details">
            <h2>Ricardo Paz</h2>
            <p>Analista de T.I</p>
          </div>
        </article>
      </div>
    </section>
  );
}
