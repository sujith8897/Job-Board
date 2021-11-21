import {Link} from 'react-router-dom';
import './Header.css';

function Header(){

    function handleClick(){
        //console.log('clicked');
        var element = document.getElementById("menu");
        if(element.classList.contains("show")){
            element.classList.remove("show");
        } else{
            element.classList.add("show");
        }
        //console.log(element.classList)
    }

    return(
        <nav>
            <p><Link to="/">Job Board</Link></p>
            <ul id="menu">
                <Link to="/" className="links">Home</Link>
                <Link to="/shortlisted" className="links">Shortlisted</Link>
                <Link to="/rejected" className="links">Rejected</Link>
            </ul>
            <img alt="menu" className="menu"  onClick={handleClick} src="https://img.icons8.com/material-rounded/24/000000/menu--v1.png"/>
            

        </nav>
    );
}

export default Header;