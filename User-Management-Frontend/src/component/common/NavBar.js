const NavBar =() => {
return (
    <ul className="nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Active</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
    </ul>)

}

export default NavBar;