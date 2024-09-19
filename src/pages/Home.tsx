import { useEffect, useState } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
import Suspensão from "../assets/suspensao.png";
import Motor from "../assets/motor.png";
import Tracao from "../assets/tracao.png";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/buttons.tsx";
import Quadradao from "../assets/images/quadradao.png";
import Quadradin from "../assets/images/quadradin.png";
import "../styles/hero.css";
import "../styles/mecanica.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
          document.body.style.overflowY = "hidden";
        } else {
          document.body.style.overflowY = "auto";
        }
        return () => {
          document.body.style.overflowY = "auto";
        };
      }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Kaminari" width={220} height={20} />
                    <div className="desktop-only">  
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#mecanica">Mecânica</a>
                            </li>
                            <li>
                                <a href="#estetica">Estética</a>
                            </li>       
                            <li>
                                <a href="#performance">Performance</a>
                            </li>
                            <li>
                                <a href="#redesocial">Redes Sociais</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                    <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Apoie o Projeto" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#mecanica">Mecânica</a>
                                        </li>
                                        <li>
                                            <a href="#estetica">Estética</a>
                                        </li>
                                        <li>
                                            <a href="#performance">Performance</a>
                                        </li>
                                        <li>
                                            <a href="#redesocial">Redes Sociais</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>  


                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={Quadradin} alt="Retangulozinho" />
                </span>
                <img src={Quadradao} alt="Retangulo" />
                <div className="container content">
                    <h1>
                        Um projeto fora da caixa
                    </h1>   
                    <p>
                        Nem sempre seguir padrões pode ser o ideal para você, neste caso, eu decidi criar algo que fosse único e fora da caixa. 
                    </p>
                    <div>
                        <span><Button text="Acompanhe o Projeto" /></span>
                    </div>
                </div>
            </section>

            <section id="mecanica">
            <div>
                <h1>A Mecânica importa sim!</h1>
                <p>
                    Gostamos muito de estética claro, mas para obter um bom equilibro entre estética, performance e principalmente CONFIABILIDADE, devemos ter uma boa mecânica. Logo abaixo está um resumo do que o projeto KAMINARI possui.
                </p>
            </div>
                <div className='cards'>
                    <div className="card">
                        <img src={Suspensão} alt="Simbolo Suspensão" width={100} height={125} ></img>
                        <h2>Suspensão e Freios</h2>
                        <p>
                            Carro está equipado com uma Suspensão a ar da Castor, com bolsas reforçadas na traseira e amortecedor encurtado 6.5cm na dianteira. Oferecendo praticidade, conforto e uma boa performance dependendo da altura de rodagem. 
                            Equipado com pastilhas de cerâmica e discos ventilados para fornecer uma melhor frenagem e segurança.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Motor} alt="Simbolo Motor" width={125} height={125}></img>
                        <h2>Motor</h2>
                        <p>
                            Possui motor D17 de 1.7 Litros, com 115cv, 15,2kgfm de torque, girando seus bélissimos 7.100rpm. 
                            Com uma boa relação peso potência, oferecendo uma boa performance com seus 1155kg. 
                            Atualmente este motor conta com filtro esportivo, coletor de escape 4x1, pistão 0.50 e um conversor de combustível para que o mesmo possa funcionar com Etanol, fornecendo um pouco mais de fôlego para o motor.
                        </p>
                    </div>
                    <div className="card">
                        <img src={Tracao} alt="Simbolo Tração" width={100} height={125} ></img>
                        <h2>Tração</h2>
                        <p>
                            Equipado com pneus iris 205/45.
                            Rodas 17 GSW 181 de tala 7.5". 
                            Embreagem de Cerâmica para até 400cv.
                            Câmbio de 5 marchas manual.
                        </p>
                    </div>
                </div>
            </section>

            <section id="estetica">

            </section>

            <section id="performance">

            </section>
        </>
    )
    
}