import { FormEvent, useEffect, useState } from "react";

import Close from "../assets/close.svg";
import Face from "../assets/face.svg";
import Menu from "../assets/hamburguer.svg";
import AnaliseLogo from "../assets/images/analise-logo.png";
import Girl_1 from "../assets/images/girl_1.jpg";
import Man_1 from "../assets/images/man_1.jpg";
import Man_2 from "../assets/images/man_2.jpg";
import PythonLogo from "../assets/images/python-logo.png";
import RaspagemLogo from "../assets/images/raspagem-logo.png";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Instagram from "../assets/instagram.svg";
import Logo from "../assets/logo.svg";
import Star_completa from "../assets/star_completa.svg";
import Star_incompleta from "../assets/star_incompleta.svg";
import Tiktok from "../assets/tiktok.svg";
import Verificado from "../assets/verificado.svg";
import Button from "../components/button.tsx";
import "../styles/contact.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/pricing.css";
import "../styles/rodape.css";
import "../styles/solutions.css";
import "../styles/testimonial.css";
import "../styles/utility.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("Enviando...");

        try {
            const response = await fetch('api/function-2', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer `,
                },
                body: JSON.stringify({
                    toMail: email,
                    content: message,
                }),
            });

            if (response.ok) {
                setStatus("Mensagem enviada com sucesso!");
                setEmail("");
                setMessage("");
            } else {
                const error = await response.json();
                setStatus(`Erro: ${error.error || "Falha ao enviar mensagem."}`);
            }
        } catch (error) {
            setStatus(`Erro ao enviar: ${error}`);
        }
    };

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solutions">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solutions">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact">Contato</a></li>
                                        <li><a className="reverse-color" href="#">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>Transforme Dados Brutos em Insights Valiosos!</h1>
                    <p>Especialista em análise de dados e raspagem de dados utilizando Python e Scrapy. Capacite sua empresa com informações estratégicas para decisões mais assertivas e direcionadas ao sucesso.</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section id="solutions" className="container py-lg">
                <h2 className="section-title">Soluções Sob Medida para Você</h2>
                <p className="section-description">
                    Confira como posso ajudar sua empresa a extrair insights valiosos dos dados através de técnicas avançadas de raspagem de dados e análise.
                </p>
                <div className="solutions-grid">
                    <div className="solution-card">
                        <img src={RaspagemLogo} alt="Raspagem Python" className="raspagem-logo" />
                        <h3>Raspagem de Dados Personalizada</h3>
                        <p>Desenvolvimento de scrapers sob medida para coletar dados específicos de websites e APIs, utilizando Scrapy.</p>
                    </div>
                    <div className="solution-card">
                        <img src={AnaliseLogo} alt="Analise Python" className="analise-logo" />
                        <h3>Análise de Dados e Visualização</h3>
                        <p>Transformação de dados brutos em insights visuais que facilitam a tomada de decisões estratégicas.</p>
                    </div>
                    <div className="solution-card">
                        <img src={PythonLogo} alt="Logo Python" className="python-logo" />
                        <h3>Consultoria em Python para Dados</h3>
                        <p>Consultoria e treinamento para equipes que desejam aprimorar suas habilidades em Python e raspagem de dados.</p>
                    </div>
                </div>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">Conselho de quem conhece</p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Quem já pediu sabe da qualidade das nossas receitas, estamos tirando aquela ideia de que
                        comida congelada tem de ser algo sem gosto, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={Girl_1} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Adotar as práticas do mercado verde nunca foi tão recompensador. Com os serviços certos, alcançar o sucesso é uma questão de tempo.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_incompleta} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Jane Doe</p>
                                <p>Diretora de Inovação</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={Man_1} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Trabalhar com foco e inovação trouxe resultados incríveis para minha equipe. Nunca foi tão fácil manter a motivação em alta.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>John Smith</p>
                                <p>Engenheiro de Software</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={Man_2} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Experiências compartilhadas fortalecem equipes. Nosso sucesso é reflexo do suporte incrível que recebemos todos os dias.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Ryan Gosling</p>
                                <p>Empreendedor Social</p>
                            </span>
                        </div>

                        <div className="carousel-card">
                            <img src={Girl_1} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Adotar as práticas do mercado verde nunca foi tão recompensador. Com os serviços certos, alcançar o sucesso é uma questão de tempo.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_completa} alt="ícone estrela" width={22} height={20} />
                                <img src={Star_incompleta} alt="ícone estrela sem fundo" width={20} height={22} />
                            </span>
                            <span className="names">
                                <p>Jane Doe</p>
                                <p>Diretora de Inovação</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>
            <section id="pricing" className="container">
                <header>
                    <h2 className="section-title">Planos Disponíveis</h2>
                    <p className="section-description">
                        Escolha o plano ideal para suas necessidades de raspagem de dados e análise avançada com Python.
                    </p>
                </header>
                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <h3>Básico</h3>
                        <p>R$ 9,90/mês</p>
                        <ul className="features">
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Raspagem de até 1 website</span>
                            </li>
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Exportação de dados em formato CSV</span>
                            </li>
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Suporte básico</span>
                            </li>
                        </ul>
                        <button>Comece agora</button>
                    </div>
                    <div className="pricing-card highlight">
                        <div className="highlight-title">1 MÊS GRÁTIS</div>
                        <h3>Premium</h3>
                        <p>R$ 19,90/mês</p>
                        <ul className="features">
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Raspagem de até 5 websites</span>
                            </li>
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Agendamento de tarefas automatizadas</span>
                            </li>
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Suporte prioritário via e-mail</span>
                            </li>
                        </ul>
                        <button>Comece agora</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Empresarial</h3>
                        <p>R$ 49,90/mês</p>
                        <ul className="features">
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Raspagem de websites ilimitados</span>
                            </li>
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Análise de dados personalizada</span>
                            </li>
                            <li>
                                <img src={Verificado} alt="ícone estrela" width={22} height={20} />
                                <span>Suporte dedicado 24/7</span>
                            </li>
                        </ul>
                        <button>Comece agora</button>
                    </div>
                </section>
            </section>
            <section id="contact" className="container">
                <h2 className="section-title">Entre em Contato</h2>
                <p className="section-description">
                    Fale comigo para saber mais sobre os serviços de raspagem de dados e análise de dados para sua empresa.
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Digite seu e-mail"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder="Escreva sua mensagem aqui"
                        ></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                    {status && <p>{status}</p>} {/* Exibe o status do envio */}
                </form>
            </section>
            <footer id="footer" className="footer-container">
                <div className="footer-content container">
                    <div className="footer-column">
                        <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
                        <div className="social-icons">
                            <a href="#"><i className="fa fa-instagram">
                                <img src={Instagram} alt="ícone estrela" width={22} height={20} />
                            </i>
                            </a>
                            <a href="#"><i className="fa fa-facebook">
                                <img src={Face} alt="ícone estrela" width={22} height={20} />
                            </i>
                            </a>
                            <a href="#"><i className="fa fa-youtube">
                                <img src={Tiktok} alt="ícone estrela" width={22} height={20} />
                            </i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>Empresa</h3>
                        <ul>
                            <li><a href="#">Sobre nós</a></li>
                            <li><a href="#">Faça parte do time</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Funcionalidades</h3>
                        <ul>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Análise de dados</a></li>
                            <li><a href="#">Boot discord</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Recursos</h3>
                        <ul>
                            <li><a href="#">IOS & Android</a></li>
                            <li><a href="#">Teste a Demo</a></li>
                            <li><a href="#">Clientes</a></li>
                            <li><a href="#">API</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>Feito com amor na aula de Programação Web💙 ©2024 Adoryan - Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    );
}
