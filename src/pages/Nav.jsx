const Nav = () => {
    return (
        <nav className="navbar bg-light navbar-expand-lg sticky-top border-bottom border-dark-subtle" data-bs-theme="light">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <span className="me-2 text-success">*</span>
                    <span className="fw-bold">Akash Jana</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
                        <li className="nav-item"><a href="#connect" className="nav-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;