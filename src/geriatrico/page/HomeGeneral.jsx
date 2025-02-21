import React from 'react';
import "../../css/HomeGeneral.css";
import { FaUser, FaLock, FaSignOutAlt, FaCaretDown } from 'react-icons/fa'; // Importa los íconos que necesitas

const HomeGeneral = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    <img src="/LogoFundacionG.png" alt="Logo" width="200" height="100" />
                    <div className="dropdown">
                        <button className="dropdown-button">
                            Seleccione un Rol 
                            <FaCaretDown />
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Option 1</a>
                            <a href="#">Option 2</a>
                            <a href="#">Option 3</a>
                        </div>
                    </div>

                    <div className="space"></div>

                    <div className="icons">
                        <div className="icon-container">
                            <FaUser />
                        </div>
                        <a href="#">Cambiar clave <FaLock /></a>
                        <div className="icon-container">
                            <FaSignOutAlt />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Carousel */}
            <div className="carousel">
                <div className="list">
                    <div className="item">
                        <img src="/ancient-bg2.png" alt="" />
                        <div className="content">
                            <div className="author">Geriatrico</div>
                            <div className="title">Bienvenid@</div>
                            <div className="topic">Nathali Jaramillo</div>
                            <div className="des">
                                <div className="logo-container">
                                    <img src="/Logoblancoo.PNG" alt="Logo" className="logo-overlay" />
                                </div>
                                En la Fundación Años Maravillosos ofrecemos cuidados integrales y humanizados basados 
                                en el respeto, empatía y la excelencia profesional. La fundación brinda un entorno seguro y 
                                acogedor que promueva el bienestar físico, emocional y social de todos nuestros residentes, 
                                mejorando así la calidad de vida de nuestros adultos mayores.
                            </div>

                            <div className="buttons">
                                <button>leer mas</button>
                                <button>leer mas</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeGeneral;