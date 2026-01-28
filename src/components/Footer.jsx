import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          <span className="footer-name">Nicolas Moy</span>
        </p>
        <p className="footer-copyright">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
