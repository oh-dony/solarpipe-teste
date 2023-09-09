import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="glass-footer">
        <div className="container">
          <div className="footer-content">
            <article
              className="footer-site-details wow animate__animated animate__fadeInUp"
              data-wow-delay="250ms"
              data-wow-duration="2s"
            >
              <h2 className="footer-article-header">Site Nome</h2>
              <img src="images/logo.png" alt="Logo" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies vel quam quis efficitur. Suspendisse tincidunt, enim
                ac aliquam pharetra, odio sapien luctus enim, non consectetur
                nnulla arcu ut mauris.
              </p>
            </article>
            <article
              className="useful-links wow animate__animated animate__fadeInUp"
              data-wow-delay="450ms"
              data-wow-duration="2s"
            >
              <h2 className="footer-article-header">Links úteis</h2>
              <ul>
                <li>
                  <a href="#">Ofertas do dia</a>
                </li>
                <li>
                  <a href="#">Histórico</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
                <li>
                  <a href="#">Ajuda</a>
                </li>
              </ul>
            </article>
            <article
              className="footer-newsletter wow animate__animated animate__fadeInUp"
              data-wow-delay="650ms"
              data-wow-duration="2s"
            >
              <h2 className="footer-article-header">Newsletter</h2>
              <p>Informe seu email para receber nossas promoções</p>
              <form action="" method="post">
                <input
                  type="email"
                  name="email"
                  placeholder="Informe seu email:"
                />
                <button className="btn btn-primary">Quero ser informado</button>
              </form>
            </article>
          </div>
          <div className="copyright">
            <p>
              <small>
                Copyright &copy; Todos os direitos reservados
                <strong>
                  <a
                    href="https://www.facebook.com/adonay.douglas.7/"
                    target="_blank"
                  >
                    <strong>Adonay Douglas</strong>
                  </a>
                </strong>{" "}
                <i className="icon-heart" aria-hidden="true"></i>
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
