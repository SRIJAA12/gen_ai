export default function FeaturesSection() {
  const features = [
    {
      icon: '🎯',
      title: 'Personalized Career Paths',
      description: 'AI-driven recommendations tailored to your interests, skills, and career aspirations.'
    },
    {
      icon: '📚',
      title: 'Skill Gap Analysis',
      description: 'Identify skills you need to develop and get personalized learning recommendations.'
    },
    {
      icon: '💼',
      title: 'Internship & Job Matching',
      description: 'Connect with opportunities that align perfectly with your profile and goals.'
    },
    {
      icon: '🧑‍🏫',
      title: 'Mentorship & Guidance',
      description: 'Access expert mentors and receive ongoing support throughout your career journey.'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">
          Powerful Features for Your Career Success
        </h2>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card feature-card h-100">
                <div className="card-body text-center">
                  <div className="feature-icon">{feature.icon}</div>
                  <h5 className="feature-title">{feature.title}</h5>
                  <p className="feature-description">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}