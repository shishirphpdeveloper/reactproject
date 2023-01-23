import {Link,useNavigate} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    
    localStorage.removeItem('userinfo');
    navigate('/');
  }
    return <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/home">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="/listproducts">List Products</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/addproduct">Add Product</Link>
        </li>
        <li className="nav-item">
        <a href="#/" className="nav-link" onClick={logout}>Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>;
}

export default Navbar;