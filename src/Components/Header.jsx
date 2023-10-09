import "./Header.css";

const Header = () => {
  return (
    <div className="Head">

      <header className="header">
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <a className="navbar-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#">
                About
              </a>
            </li>
            <li>
              <select className="navbar-link" name="" id="select-section-1">
                <option value="">Product</option>
                <option value="">Utility Service</option>
                <option value="">Finacial Service</option>
                <option value="">Purchase Service</option>
              </select>
            </li>
            <li>
              <a className="navbar-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <select className="navbar-link" name="" id="select-section-2">
                <option value="">Resources</option>
                <option value="">Partnar Program</option>
                <option value="">Developer Docs</option>
              </select>
            </li>
          </ul>
        </nav>

        <button className="login">LOG IN</button>

      </header>

    </div>
  );
};
export default Header;
