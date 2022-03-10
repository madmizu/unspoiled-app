import { Link } from 'react-router-dom';

function Header () {

    return (
        <div className = "header">
            <Link to='/'>
                <img className = "logo" src = "https://i.ibb.co/Gp6PJ5J/spoiled-logo2-1.png" alt = {"unspoiled logo"} />
            </Link>

        </div>
    );
}

export default Header;