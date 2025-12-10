import { Link } from "react-router-dom"

export default function NavBar(){
    return (
        <nav>
            <ul class="nav-links">
                {/* HOME */}
                <Link to="/" className="home-link">
                    Home
                </Link>
                {/* PROGETTI */}
                <Link to="/progetti" className="home-link">
                    Progetti
                </Link>
                {/* HOBBIES */}
                <Link to="/hobbies" className="home-link">
                    Hobbies
                </Link>
                {/* CONTATTI */}
                <Link to="/contatti" className="home-link">
                    Contatti
                </Link>
            </ul>
        </nav>
    )
}