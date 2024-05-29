import { useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  // Array de URLs de las imágenes del carrusel
  const images = ["/1.png", "/2.png", "/3.png", "/4.png", "/1.png"];

  // Estado para mantener el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para cambiar la imagen del carrusel hacia atrás
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar la imagen del carrusel hacia adelante
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="container">
      <div className="left-images">
        <header>
        <img
            className="full-width-img"
            src="/InstituciónBarak25.jpg"
            alt="Head"
            />
            <h2>Barak internacional lucha por defender los derechos fundamentales que todo ser humano necesita.</h2>
          <div className="Banderas-container">
            <img className="bandera" src="/colombia.png" alt="banderaC" />
            <img className="bandera" src="/francia.png" alt="banderaF" />
            <img className="bandera" src="/españa.png" alt="banderaS" />
            <img className="bandera" src="/ucrania.png" alt="banderaU" />
            <img className="bandera" src="/otan.png" alt="banderaO" />
            <img className="bandera" src="/israel.png" alt="BanderaI" />
          </div>
        </header>
      </div>
      <main className="center-text">
        <header className="homepage-container">

        </header>
        <a
          href="https://api.whatsapp.com/send?phone=34685271755&text=Hola%20como%20estas,%20deseo%20tener%20contacto%20con%20la%20instituciòn%20Barak"
          className="float"
          target="_blank"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <div className="Texto-container">
          <p>
            La Institución Barak se erige como un faro de esperanza en un mundo
            marcado por la adversidad y la injusticia. Como una organización
            humanitaria internacional, nos dedicamos a ofrecer ayuda vital a los
            inmigrantes, refugiados y desplazados que huyen de la violencia y
            los conflictos armados en todo el mundo. En un escenario global
            donde millones de personas se ven obligadas a abandonar sus hogares
            debido a la guerra, la persecución y la pobreza extrema, nuestra
            labor es esencial para brindar protección, asistencia y apoyo en su
            camino hacia una vida digna y segura.
          </p>
          <h2>El que salva una vida, salva el mundo entero</h2>
          <div className="MisionVision-container">
            <h3>Visión</h3>
            <p>
              Nos visualizamos en un mundo donde prevalezca la compasión sobre
              la indiferencia, donde cada individuo, independientemente de su
              origen o circunstancias, tenga la oportunidad de reconstruir su
              vida y alcanzar su máximo potencial. Anhelamos un futuro donde la
              solidaridad y el respeto sean los pilares fundamentales de la
              convivencia global, y donde todas las personas refugiadas y
              desplazadas puedan encontrar seguridad, estabilidad y esperanza
              para el mañana.
            </p>
            <h4>Misión</h4>
            <p>
              Nuestra misión es trabajar incansablemente en defensa y protección
              de los derechos humanos de las personas refugiadas, desplazadas y
              migrantes en todo el mundo. Nos comprometemos a brindar asistencia
              legal, apoyo psicológico, servicios sociales y programas de
              integración para garantizar su bienestar y dignidad. Además,
              abogamos por políticas migratorias justas y seguras, y trabajamos
              para sensibilizar a la comunidad internacional sobre la
              importancia de proteger los derechos de todas las personas, sin
              importar su origen o estatus migratorio.
            </p>
            <div className="ImagenesLado">
              <img src="/cicr.png" alt="1" />
              <img src="/caritas-institucion-barak.png" alt="2" />
              <img src="/derechos-humanos-institucion-barak.png" alt="3" />
              <img src="/logobarak.jpg" alt="4" />
            </div>
            <a
              href="/archivos/Derechos.pdf"
              target="_blank"
              download
              className="Descarga"
            >
              Declaración universal de los derechos humanos en pdf.
            </a>
          </div>
        </div>
        {/* Carrusel */}
        <div className="carrusel-container">
          <h3>Memorias de Eventos: Revive Nuestras Experiencias</h3>
          <div className="carrusel-imagen">
            <img
              src={images[currentIndex]}
              alt={`imagen-${currentIndex + 1}`}
            />
          </div>
          <div className="carrusel-botones">
            <button className="carousel-button prev-button" onClick={prevImage}>
              <img src="/anterior.png" alt="ant" />
            </button>
            <button className="carousel-button next-button" onClick={nextImage}>
              <img src="siguiente.png" alt="sig" />
            </button>
          </div>
        </div>
      </main>
      <footer className="footerTitle">
        <h3> Voluntariado de ayuda humanitaria de la Institución Barak</h3>
        <p>
          Nuestro llamado es claro: ¡únete a nosotros en esta noble causa! Cada
          mano extendida, cada corazón dispuesto a ayudar, es una luz que
          ilumina el camino hacia un futuro mejor. Juntos, podemos marcar la
          diferencia y construir un mundo donde la compasión y la solidaridad
          reinen. ¡Tu participación es fundamental para hacer de este sueño una
          realidad! Únete a nuestra familia de voluntarios y donantes, y se
          parte del cambio que queremos ver en el mundo. ¡Juntos podemos hacer
          la diferencia!
        </p>
        <button
          onClick={() =>
            window.open("https://beacons.ai/barakint#email", "_blank")
          }
          className="join-button"
        >
          ÚNETE
        </button>
        <div className="ImagesFooter">
          <img src="foter1.png" alt="pg1" />
          <img src="foter2.png" alt="pg2" />
        </div>
        <div className="contact__section">
          <div className="contact__elements">
            <i className="fa-solid fa-phone"></i>
            <h4>Número celular</h4>
            <p>+34 631202373</p>
          </div>
          <div className="contact__elements">
            <div>
              <i className="fa-brands fa-square-facebook"></i>{" "}
            </div>
            <h4>Facebook</h4>
            <p>Institución Barak</p>
          </div>
          <div className="contact__elements">
            <div>
              <i className="fa-solid fa-envelope"></i>{" "}
            </div>
            <h4>Email</h4>
            <p>instituciónbarak@europe.com</p>
          </div>
        </div>
      </footer>
      <div className="aviso">
          <a href="http://" target="_blank" rel="noopener noreferrer">Aviso Legal</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Política de Privacidad</a>
          <a href="http://" target="_blank" rel="noopener noreferrer">Cookies</a>
      </div>
      <a href="https://www.paypal.com/donate/?hosted_button_id=KF853TCPAGWSW" target="_blank" rel="noopener noreferrer" className="donate-button">¡Haz tu donación!</a>
    </section>
  );
};

export default Homepage;
