import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './index.scss';
import LogoD from '../../assets/LogoD.png';
import LogoSubtitle from '../../assets/Logo_sub.png';


const Sidebar = () => (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoD} alt="logo"/>
      <img src={LogoSubtitle} alt="logo" className='logoSub'/>
    </Link>
    <nav>
      <NavLink exact={true} activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact={true} activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
        <li>
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/donya-ahmadi/"
              >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dahmadi"
              >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
  </div>
);

export default Sidebar;
