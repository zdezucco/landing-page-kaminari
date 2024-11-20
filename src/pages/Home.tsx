import { useEffect, useState } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/logo.svg";
import Check from "../assets/check.svg";
import Suspensão from "../assets/suspensao.png";
import Motor from "../assets/motor.png";
import Tracao from "../assets/tracao.png";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/buttons.tsx";
import TestimonialCard from "../components/TestimonialCard.tsx";
import Quadradao from "../assets/images/quadradao.png";
import Quadradin from "../assets/images/quadradin.png";
import "../styles/hero.css";
import "../styles/mecanica.css";
import "../styles/areadofa.css";
import "../styles/redes-sociais.css";
import "../styles/contact.css";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setMail] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    function realizarRequest() {
        fetch('https://kaminari-mail.azurewebsites.net/api/httptrigger1', {
            method: 'POST',
            mode: "no-cors",
            headers: {
                 'Content-Type': 'application/json' },
            body: JSON.stringify({
              toMail: email,
              toName: name,
            }),
          })
          .then(res => res.json())
    }


    function botaoRedirecionarPagina(){
        window.location.href = "https://www.instagram.com/civic.kaminari/";
    }

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Kaminari" width={220} height={20} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#mecanica">Mecânica</a>
                            </li>
                            <li>
                                <a href="#estetica">Estética</a>
                            </li>
                            <li>
                                <a href="#redes-sociais">Redes Sociais</a>
                            </li>
                            <li>
                                <a href="#areadofa">Área do Fã</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" id="login">Login</a>
                            <Button func={() => console.log("teste")}  text="Apoie o Projeto" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#mecanica">Mecânica</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#estetica">Estética</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#performance">Performance</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#redesocial">Redes Sociais</a>
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
                        <span><Button func={botaoRedirecionarPagina} text="Acompanhe o Projeto" /></span>
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

            <section id="redes-sociais" className="container">
                <header>
                    <p className="desktop-only">Formas de Apoio</p>
                    <h2>Nossos Planos</h2>
                </header>
                <section className="even-columns">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Plano Básico</h3>
                            <p>Siga nosso perfil e acompanhe o projeto</p>
                            </span>
                            <h2>Grátis</h2>
                            <Button func={botaoRedirecionarPagina} text="Seguir agora" />
                            <span className="hr"></span>
                            <ul className="features">
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Veja somente os stories normais</p>
                                </li>
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Até 5 stories por dia</p>
                                </li>
                            </ul>
                    </div>
                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º Mês Grátis</p>
                        </span>
                        <span className="plan">
                            <h3>Plano Premium</h3>
                            <p>Entre no nosso Close Friends e Acompanhe o conteúdo DIÁRIO</p>
                            </span>
                            <span className="price">
                                <h2>R$19,90</h2>
                                <p>/Mês</p>
                            </span>
                            <Button func={() => console.log("teste")} text="Entrar Agora" key='premium' />
                            <span className="hr"></span>
                            <ul className="features">
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Conteudo diário através do Close Friends</p>
                                </li>
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Sem limite de Stories por dia</p>
                                </li>
                            </ul>
                    </div>
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Parceirasso!</h3>
                            <p>Entre no nosso Close Friends e no nosso Grupo no WhatsApp para ter acesso a conteúdo exclusivo e participar das nossas conversas</p>
                            </span>
                            <span className="price">
                                <h2>R$39,90</h2>
                                <p>/Mês</p>
                            </span>
                            <Button func={() => console.log("teste")} text="Experimentar Agora" />
                            <span className="hr"></span>
                            <ul className="features">
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Conteúdo diário através do Close Friends</p>
                                </li>
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Sem limite de Stories por dia</p>
                                </li>
                                <li>
                                    <img src={Check} alt="" />
                                    <p>Grupo no Whatsapp com várias pessoas e conteúdos EXCLUSIVOS!</p>
                                </li>
                            </ul>
                    </div>
                </section>
            </section>x

            <section id="areadofa">
                <header>
                    <span>
                        <p className="desktop-only">Comentários dos Fãs</p>
                        <h2>Seu apoio me motiva!</h2>
                    </span>
                    <p>Agradeço a todos que me apoiam e me incentivam a continuar com o meu sonho!</p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            testemunho="Olha, visualmente o carro está incrível. O design passa a sensação de velocidade mesmo parado. As linhas são agressivas, mas sem perder a elegância, o que é importante para um carro de corrida. A escolha das cores é bem feita, traz um ar moderno e ao mesmo tempo clássico. O formato aerodinâmico parece estar bem pensado, dá para ver que cada curva e ângulo foi projetado para cortar o ar. É o tipo de carro que chama a atenção logo de cara, mas, como sempre digo, além de bonito, ele precisa entregar na pista."
                            name="Ayrton Senna"
                            cargo="Piloto de Fórmula 1"
                            rating
                            imgUrl="https://clube101.com.br/wsite/_upl/noticias/9e29147e7ab45ecb6cd81860056769a3.jpg"
                        />
                        <TestimonialCard
                            testemunho="Mano, esse carro tá insano! Olha essas linhas, tá gritando velocidade. O body kit foi muito bem encaixado, não tem aquele visual exagerado, tá no ponto certo. E essas rodas? Show de bola! O rebaixamento deu um toque agressivo, parece que o carro tá grudado no chão. A pintura, com esses detalhes metálicos, brilha demais quando a luz bate, é impossível não virar a cabeça quando ele passa. E o aerofólio? Na medida certa, sem exageros, mas passa o recado: esse carro foi feito pra correr. Resumindo, é um carro que não só anda rápido, mas também faz você parecer um rei nas ruas."
                            name="Brian O'Conner"
                            cargo="Entusiasta Automotivo"
                            rating
                            imgUrl="https://i.pinimg.com/originals/05/cf/d6/05cfd60c033b9e1a72e735010bbfca54.jpg"
                        />
                        <TestimonialCard
                            testemunho="O carro tem presença, não vou negar. O visual tá muito bem feito, linhas agressivas, postura firme, e as cores passam aquela sensação de velocidade. Mas vamos ser sinceros: só aparência não ganha corrida. Ele parece rápido, mas o que tem de estilo, falta de potência. Um carro assim merece mais debaixo do capô. Todo esse design grita por mais força, mais torque. No final do dia, o que importa é o que ele faz na pista. Se esse motor tivesse a mesma pegada que a carroceria, aí sim seria uma verdadeira máquina. Dá pra melhorar, e você sabe que sempre pode ter mais potência."
                            name="Dominic Toretto"
                            cargo="Piloto de Rua"
                            imgUrl="https://thmais.com.br/wp-content/uploads/2024/01/20170724-velozes-furiosos-papo-de-cinema.jpg"
                        />
                    </div>
                    <div className="carousel-content">
                        <TestimonialCard
                            testemunho="Olha, visualmente o carro está incrível. O design passa a sensação de velocidade mesmo parado. As linhas são agressivas, mas sem perder a elegância, o que é importante para um carro de corrida. A escolha das cores é bem feita, traz um ar moderno e ao mesmo tempo clássico. O formato aerodinâmico parece estar bem pensado, dá para ver que cada curva e ângulo foi projetado para cortar o ar. É o tipo de carro que chama a atenção logo de cara, mas, como sempre digo, além de bonito, ele precisa entregar na pista."
                            name="Ayrton Senna"
                            cargo="Piloto de Fórmula 1"
                            rating
                            imgUrl="https://clube101.com.br/wsite/_upl/noticias/9e29147e7ab45ecb6cd81860056769a3.jpg"
                        />
                        <TestimonialCard
                            testemunho="Mano, esse carro tá insano! Olha essas linhas, tá gritando velocidade. O body kit foi muito bem encaixado, não tem aquele visual exagerado, tá no ponto certo. E essas rodas? Show de bola! O rebaixamento deu um toque agressivo, parece que o carro tá grudado no chão. A pintura, com esses detalhes metálicos, brilha demais quando a luz bate, é impossível não virar a cabeça quando ele passa. E o aerofólio? Na medida certa, sem exageros, mas passa o recado: esse carro foi feito pra correr. Resumindo, é um carro que não só anda rápido, mas também faz você parecer um rei nas ruas."
                            name="Brian O'Conner"
                            cargo="Entusiasta Automotivo"
                            rating
                            imgUrl="https://i.pinimg.com/originals/05/cf/d6/05cfd60c033b9e1a72e735010bbfca54.jpg"
                        />
                        <TestimonialCard
                            testemunho="O carro tem presença, não vou negar. O visual tá muito bem feito, linhas agressivas, postura firme, e as cores passam aquela sensação de velocidade. Mas vamos ser sinceros: só aparência não ganha corrida. Ele parece rápido, mas o que tem de estilo, falta de potência. Um carro assim merece mais debaixo do capô. Todo esse design grita por mais força, mais torque. No final do dia, o que importa é o que ele faz na pista. Se esse motor tivesse a mesma pegada que a carroceria, aí sim seria uma verdadeira máquina. Dá pra melhorar, e você sabe que sempre pode ter mais potência."
                            name="Dominic Toretto"
                            cargo="Piloto de Rua"
                            imgUrl="https://thmais.com.br/wp-content/uploads/2024/01/20170724-velozes-furiosos-papo-de-cinema.jpg"
                        />
                    </div>
                </section>

            </section>

            <section id="contact">
                <header>
                    <span>
                        <p>Um presente para quem gostar</p>
                        <h2>Pacote Gratuíto do Fã</h2>
                    </span>
                    <p>Caso tenha gostado do projeto, forneça seu nome e e-mail logo abaixo, após pressionar o botão "Gostei do projeto", enviaremos um kit com fotos e vídeos do projeto para que possa verificar de perto.</p>
                </header>
                <span className="input">
                    <input type="text" value={email} 
                        onChange={event => setMail(event.target.value)} placeholder="Seu e-mail" />
                    <input type="text" value={name}
                        onChange={event => setName(event.target.value)} placeholder="Seu nome"/>
                    
                    <Button text="Gostei do Projeto" func={realizarRequest} />
                </span>
            </section>

        </>
    )

}