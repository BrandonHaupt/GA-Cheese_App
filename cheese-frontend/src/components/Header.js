import { Link } from "react-router-dom"


export default function Header() {
    return(
        <nav className="nav">
            <Link to='/'><div>Cheese Catalog</div></Link>
        </nav>
    )
}