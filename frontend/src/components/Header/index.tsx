import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                    <h1>DsMeta</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                        /   Aluno: Daniel José Barbosa Lima
                        <ul><a href="https://github.com/danieljblima/">Github</a>
                            / <a href="https://www.linkedin.com/in/daniel-lima-aa74b698/">LinkedIn</a>
                        </ul>

                    </p>
            </div>
        </header>
    )
}

export default Header