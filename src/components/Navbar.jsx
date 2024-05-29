// Navbar.js

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          className="logo-img"
          src="/institucion-barak-ayuda-al-refugiado.png"
          alt="LogoInstitucion"
        />
        <h2>Institución Barak</h2>
      </div>
      <ul className="navbar-menu">
        {/* Eliminamos el enlace a la página de inicio */}
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#services">Emergencia-Ucrania</a></li>
        <li><a href="#rights">Derechos Humanos</a></li>
        <li><a href="#peace">Promoción de la Paz Universal</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#join">Únete</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
