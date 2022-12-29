import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} mb-2`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">TechBlogsDaily</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-post">Create Post</Link>
                            </li>
                        </ul>

                        <span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ marginRight: 10,marginBottom: 2}}>
                            <i className="fa-regular fa-sun"></i>
                        </span>
                        <div style={{ marginRight: 5 }} className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><i style={{ marginLeft: -1 }} className="fa-sharp fa-solid fa-moon"></i></label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;