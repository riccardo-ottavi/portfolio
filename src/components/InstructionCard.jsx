import Reveal from "./Reveal"

export default function InstructionCard({ instruction, i }) {
    return (
        <div className="instruction-card">
            <Reveal delay={i * 80}>
                <li className="work-item work-link">
                    
                        <span className="work-year">{instruction.period}</span>
                        <div className="work-info">
                            <h3>{instruction.name}</h3>
                            <p>{instruction.type}</p>
                            <p>{instruction.where}</p>
                        </div>
                        <div className="work-tags">
                            {(instruction.skills ?? []).map((s) => (
                                <span key={s} className="tag">{s}</span>
                            ))}
                        </div>
                    
                </li>
            </Reveal>
        </div>
    )
}