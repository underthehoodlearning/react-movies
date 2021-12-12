import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">React Movies</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/genres">
                                Genres
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}