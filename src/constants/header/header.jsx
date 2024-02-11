import './header.css'
import oeLogo from '../../assets/oe.ico';

function Header() {

  return (
    <div id="header">
        <div className="logo">
            <a href="/"><img src={oeLogo} alt="OE Logo" /></a>
        </div>
        <ul className='navbar'>
            <li><a href="">About</a></li>
            <li><a href="">Passion</a></li>
            <li><a href="">Experiences</a></li>
            <li><a href="">Works</a></li>
            <li><a href="">Say Hi!</a></li>
        </ul>
    </div>
  )
}

export default Header
