import { useEffect, useState } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
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
                    <img src={Logo} alt="Logo HowToLive" width={220} height={20} />
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
                <h1>Sob medida para você</h1>
                <p>
                Inovação é com a gente! A [nome empresa] já conquistou diversos clientes,
                seja você mais um deles, veja tudo que pode ganhar com nossos serviços.
                </p>
            </div>
                <div id='cards'>
                    <div id="card">
                    <h3>Produto Vencedor</h3>
                    <p>
                        Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto,
                        entre eles podemos citar o CityFarm da FAG e Startup Garage.
                    </p>
                    </div>
                    <div id="card">
                    <h3>Produto Vencedor</h3>
                    <p>
                        Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto,
                        entre eles podemos citar o CityFarm da FAG e Startup Garage.
                    </p>
                    </div>
                    <div id="card">
                    <h3>Produto Vencedor</h3>
                    <p>
                        Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto,
                        entre eles podemos citar o CityFarm da FAG e Startup Garage.
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