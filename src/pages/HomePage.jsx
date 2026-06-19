import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projectsInfos";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";

export default function HomePage() {


    return (
        <>
            <header className="nav">
                <div className="nav-inner">
                    <a href="#top" className="logo">Riccardo Ottavi<span className="accent">.</span></a>
                    <div className="nav-links">
                        <a href="#about">Chi Sono</a>
                        <a href="#work">Lavori</a>
                        <a href="#contact">Contatti</a>
                    </div>
                    <a href="#contact" className="pill">
                        Disponibile <span className="dot" />
                    </a>
                </div>
            </header>

            <section id="top" className="hero">
                <div className="grain" aria-hidden />
                <div className="container">
                    <p className="eyebrow fade-up">Portfolio</p>
                    <h1>
                        <span className="fade-up" style={{ animationDelay: "100ms" }}>Strutturare</span>
                        <span className="fade-up italic muted" style={{ animationDelay: "250ms" }}>con metodo,</span>
                        <span className="fade-up" style={{ animationDelay: "400ms" }}>costruire bene.</span>
                    </h1>
                    <div className="hero-grid fade-up" style={{ animationDelay: "600ms" }}>
                        <p>
                            Sono un web developer. Aiuto brand e prodotti a esprimersi con
                            chiarezza attraverso identità, interfacce e siti web.
                        </p>
                        <a href="#work" className="hero-cta">
                            <span>Esplora i progetti</span>
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </section>

            <div className="marquee">
                <div className="marquee-track">
                    {[0, 1].map((i) => (
                        <div key={i} className="marquee-group">
                            <span>Brand Identity</span><span className="accent">✦</span>
                            <span>Web Design</span><span className="accent">✦</span>
                            <span>Art Direction</span><span className="accent">✦</span>
                            <span>Editorial</span><span className="accent">✦</span>
                            <span>Motion</span><span className="accent">✦</span>
                        </div>
                    ))}
                </div>
            </div>

            <section id="work" className="section">
                <div className="container">
                    <Reveal>
                        <div className="section-head">
                            <div>
                                <p className="eyebrow">⟶ Lavori selezionati</p>
                                <h2>Progetti recenti</h2>
                            </div>
                            <p className="font-mono muted" style={{ fontSize: "0.75rem" }}>
                                {String(projects.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                            </p>
                        </div>
                    </Reveal>

                    <ul className="work-list">
                        {projects.map((p, i) => (
                            <Link
                                to={`/projects/${p.id}`}
                                key={p.id || p.title}
                            >
                                <ProjectCard
                                project={p}
                                i={i}
                            />
                            </Link>                          
                        ))}
                    </ul>
                </div>
            </section>

            <section id="about" className="section about">
                <div className="container about-grid">
                    <Reveal>
                        <p className="eyebrow">⟶ Studio</p>
                    </Reveal>
                    <div>
                        <Reveal delay={100}>
                            <p className="about-text">
                                Lavoro all'incrocio tra <span className="italic muted">forma</span> e{" "}
                                <span className="italic muted">funzione</span>. Ogni progetto inizia
                                ascoltando — e finisce con un sistema chiaro, durevole e su misura.
                            </p>
                        </Reveal>
                        <Reveal delay={250}>
                            <div className="stats">
                                {[
                                    { k: "12+", v: "Anni di pratica" },
                                    { k: "60", v: "Progetti consegnati" },
                                    { k: "4", v: "Awwwards menzionati" },
                                ].map((s) => (
                                    <div key={s.v}>
                                        <div className="stat-num">{s.k}</div>
                                        <div className="stat-label">{s.v}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            <section id="contact" className="section contact">
                <div className="container">
                    <Reveal><p className="eyebrow">⟶ Iniziamo</p></Reveal>
                    <Reveal delay={120}>
                        <h2>Hai un progetto<br /><span className="italic muted">in mente?</span></h2>
                    </Reveal>
                    <Reveal delay={250}>
                        <a href="mailto:hello@studio.it" className="contact-link">
                            hello@studio.it <span>↗</span>
                        </a>
                    </Reveal>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-inner">
                    <p>© 2025 Studio — Tutti i diritti riservati</p>
                    <div className="footer-links">
                        <a href="#">Instagram</a>
                        <a href="#">Are.na</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </>
    )
}