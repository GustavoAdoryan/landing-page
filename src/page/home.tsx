import { useEffect, useState } from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import AnaliseLogo from "../assets/images/analise-logo.png";
import PythonLogo from "../assets/images/python-logo.png";
import RaspagemLogo from "../assets/images/raspagem-logo.png";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Logo from "../assets/logo.svg";
import Button from "../components/button.tsx";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solutions.css";
import "../styles/testimonial.css";
import "../styles/utility.css";



export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const toggleBodyOverflow = (isMenuOpen: boolean) => {
            document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
        };

        toggleBodyOverflow(showMobileMenu);
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showMobileMenu]);

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
                                <a href="#solution">Soluções</a>
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
                                        <li><a href="#solution">Soluções</a></li>
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
            <section className="testimonials-section">
                <div className="testimonials-container">
                    <h3 className="section-subtitle">Conselho de quem conhece</h3>
                    <h2 className="section-title">Cada cliente importa!</h2>
                    <p className="section-description">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                    </p>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Ellon Ma"
                                className="testimonial-image"
                            />
                            <p className="testimonial-text">
                                Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
                            </p>
                            <div className="testimonial-rating">⭐⭐⭐⭐☆</div>
                            <h4 className="testimonial-name">Ellon Ma</h4>
                            <p className="testimonial-role">CEO BING CHIILING</p>
                        </div>

                        <div className="testimonial-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Ryan Gosling"
                                className="testimonial-image"
                            />
                            <p className="testimonial-text">
                                Slate helps you see how many more days you need to work to reach your financial goal for the month and year.
                            </p>
                            <div className="testimonial-rating">⭐⭐⭐⭐☆</div>
                            <h4 className="testimonial-name">Ryan Gosling</h4>
                            <p className="testimonial-role">Agrônomo</p>
                        </div>
                        <div className="testimonial-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Jane Doe"
                                className="testimonial-image"
                            />
                            <p className="testimonial-text">
                                O uso do Slate melhorou significativamente a maneira como gerencio minhas tarefas diárias e estabeleço minhas metas.
                            </p>
                            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            <h4 className="testimonial-name">Jane Doe</h4>
                            <p className="testimonial-role">Cientista de Dados</p>
                        </div>

                        <div className="testimonial-card">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="John Smith"
                                className="testimonial-image"
                            />
                            <p className="testimonial-text">
                                A simplicidade e a eficiência da visualização de dados do Slate são incomparáveis. Recomendo muito para profissionais de qualquer área.
                            </p>
                            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
                            <h4 className="testimonial-name">John Smith</h4>
                            <p className="testimonial-role">Engenheiro de Software</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
