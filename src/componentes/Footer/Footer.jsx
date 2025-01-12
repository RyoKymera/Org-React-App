import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(./img/Footer.png)"}}> 
        <div className='redes'>
            <a href='https://www.linkedin.com/in/diego-o-mateus'>
                <img src="./img/linkedin.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/RyoKymera'>
                <img src="./img/github.png" alt='Github' />
            </a>
        </div>
        <img src="./img/Logo.png" alt='org' />
        <strong>Desarrollado por Diego Mateus</strong>
    </footer>
}

export default Footer