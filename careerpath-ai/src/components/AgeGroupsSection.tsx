export default function AgeGroupsSection() {
  const ageGroups = [
    {
      title: 'School Students',
      subtitle: '13–18 years',
      description: 'Discover your passions through interactive games, connect with mentors, and give parents insights into your career interests through our comprehensive dashboard.',
      features: ['Passion discovery games', 'Student mentorship programs', 'Parental dashboard insights']
    },
    {
      title: 'College Students',
      subtitle: '18–23 years',
      description: 'Find relevant internships, analyze your skill gaps, and practice with AI-powered mock interviews to prepare for your career launch.',
      features: ['Internship matching', 'Skill gap analysis', 'AI mock interviews']
    },
    {
      title: 'Working Professionals',
      subtitle: '24+ years',
      description: 'Navigate career transitions, get AI-powered resume optimization, and receive predictions about emerging job opportunities in your field.',
      features: ['Career pivot guidance', 'Resume optimization', 'Job market predictions']
    }
  ];

  return (
    <section className="age-groups-section">
      <div className="container">
        <h2 className="section-title">
          Personalized by Your Life Stage
        </h2>
        <div className="row g-4">
          {ageGroups.map((group, index) => (
            <div key={index} className="col-lg-4">
              <div className="card age-group-card h-100">
                <div className="card-body">
                  <h5 className="age-title">{group.title}</h5>
                  <p className="age-subtitle">{group.subtitle}</p>
                  <p className="age-description">{group.description}</p>
                  <ul className="list-unstyled mt-3">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <span className="text-primary me-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}