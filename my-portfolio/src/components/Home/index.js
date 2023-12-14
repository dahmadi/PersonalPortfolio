import LogoTitle from '../../assets/LogoD.png';
import {Link} from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br />I'm
                    <img src={LogoTitle} alt="developer" />
                    <span className="name">onya</span> 
                    <br />
                    software engineer
                </h1>
                <h2>Full-Stack Developer</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME </Link>
            </div>
        </div>
    );
};

export default Home;