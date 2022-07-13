import icon from '../../assets/img/logo.svg';
import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={icon} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://github.com/PauloFH99">Paulo Henrique Fernandes dos Santos</a>
                </p>
            </div>
        </header>
    )
}

export default Header;