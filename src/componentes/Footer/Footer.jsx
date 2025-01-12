import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(./public/img/Footer.png)"}}> 
        <div className='redes'>
            <a href='https://www.linkedin.com/in/diego-o-mateus'>
                <img src="./public/img/linkedin.png" alt='Linkedin' />
            </a>
            <a href='https://github.com/RyoKymera'>
                <img src="./public/img/github.png" alt='Github' />
            </a>
        </div>
        <img src="./public/img/Logo.png" alt='org' />
        <strong>Desarrollado por Diego Mateus</strong>
    </footer>
}

export default Footer