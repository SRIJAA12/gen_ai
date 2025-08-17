export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="hero-title">
              Your Personalized Career & Skills Advisor
            </h1>
            <p className="hero-subtitle">
              Get tailored guidance, discover skills, and explore future-ready careers with AI-powered insights.
            </p>
            <button className="btn cta-button">
              Get Started
            </button>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-placeholder">
              <div className="text-center">
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚀</div>
                <p>AI-Powered Career Insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}