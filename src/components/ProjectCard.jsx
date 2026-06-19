import Reveal from "./Reveal"

export default function ProjectCard({ project, i }) {
    return (
        <Reveal delay={i * 80}>
            <li className="work-item">
                <a href="#" className="work-link">
                    <span className="work-year">{project.year}</span>
                    <div className="work-info">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                    <div className="work-tags">
                        {(project.tags ?? []).map((t) => (
                            <span key={t} className="tag">{t}</span>
                        ))}
                    </div>
                </a>
            </li>
        </Reveal>
    )
}