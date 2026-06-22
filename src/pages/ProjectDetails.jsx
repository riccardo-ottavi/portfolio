import { useParams } from "react-router-dom";
import { projects } from "../data/projectsInfos";

export default function ProjectDetails() {
    const { id } = useParams();

    const project = projects.find(
        (p) => p.id === Number(id)
    );

    if (!project) {
        return <h1>Progetto non trovato</h1>;
    }

    return (
        <>
            <main className="project-detail">

                <div className="container">

                    <p className="eyebrow">
                        ⟶ {project.year}
                    </p>

                    <h1 className="project-title">
                        {project.title}
                    </h1>

                    <div className="project-meta">
                        {project.tags.map(tag => (
                            <span key={tag} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="project-divider" />

                    <div className="project-grid">
                        <aside>
                            <p className="eyebrow">Demo</p>
                        </aside>

                        <div>
                            <p>{project.media}</p>
                        </div>
                    </div>

                    <div className="project-grid">
                        <aside>
                            <p className="eyebrow">Descrizione</p>
                        </aside>

                        <div>
                            <p className="project-description">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    <div className="project-grid">
                        <aside>
                            <p className="eyebrow">Dettagli</p>
                        </aside>

                        <div>
                            <p className="project-detail">
                                {project.details}
                            </p>
                        </div>
                    </div>

                    <div className="project-grid">
                        <aside>
                            <p className="eyebrow">Link</p>
                        </aside>

                        <div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Visita progetto
                            </a>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}