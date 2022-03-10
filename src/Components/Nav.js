import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
          <Link to='/purchases'>
            <li>Bought It</li>
          </Link>
          <Link to='/inventory'>
            <li>Have It</li>
          </Link>
          <Link to='/shopping-list'>
            <li>Need It</li>
          </Link>
          <Link to='/recipes'>
            <li>Cook It</li>
          </Link>
      </ul>
    </nav>
  );
}

export default Nav;