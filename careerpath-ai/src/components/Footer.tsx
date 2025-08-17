export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <h5 className="mb-3" style={{ color: '#2563eb' }}>CareerPath AI</h5>
            <p className="text-muted">
              Empowering careers with AI-driven insights and personalized guidance for every stage of your professional journey.
            </p>
          </div>
          <div className="col-lg-3 col-md-3">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#about">About</a></li>
              <li className="mb-2"><a href="#features">Features</a></li>
              <li className="mb-2"><a href="#contact">Contact</a></li>
              <li className="mb-2"><a href="#privacy">Privacy Policy</a></li>
              <li className="mb-2"><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3">
            <h6 className="mb-3">Connect With Us</h6>
            <div className="social-icons">
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
        </div>
        <hr className="my-4" style={{ borderColor: '#374151' }} />
        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              © {currentYear} CareerPath AI. All rights reserved. | 
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}