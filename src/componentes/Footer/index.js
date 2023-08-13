import './Footer.css'

const Footer = () => {
    return(
        <footer>
            <div className='redes-sociais'>
                <a href='#'><img src='/imagens/fb.png' alt='Facebook'></img></a>
                <a href='#'><img src='/imagens/tw.png' alt='Twitter'></img></a>
                <a href='#'><img src='/imagens/ig.png' alt='Instagram'></img></a>
            </div>
            <a href='#'><img src='/imagens/logo.png' alt='Logo Organo'></img></a>
            <p className='footer__creditos'>Desenvolvido por Alura.</p>
        </footer>
    )
}

export default Footer