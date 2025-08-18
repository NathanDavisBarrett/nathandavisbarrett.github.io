<template>
    <div class="tutoring">
        <div class="container">
            <!-- Hero Section -->
            <section class="tutoring-hero">
                <div class="hero-content">
                    <h1 class="hero-title">Private Tutoring Services</h1>
                    <p class="hero-subtitle">Personalized academic support in STEM subjects</p>
                    <div class="hero-cta">
                        <a href="#contact" class="btn btn-primary">Schedule a Session</a>
                        <a href="#subjects" class="btn btn-secondary">View Subjects</a>
                    </div>
                </div>
            </section>

            <!-- About Section -->
            <section class="about-tutoring">
                <div class="section-content">
                    <h2 class="section-title">Why Choose My Tutoring?</h2>
                    <div class="features-grid">
                        <div class="feature-card card">
                            <div class="feature-icon">🎓</div>
                            <h3>Expert Knowledge</h3>
                            <p>Advanced degrees in Chemical Engineering with extensive research experience in computational modeling and simulation.</p>
                        </div>
                        <div class="feature-card card">
                            <div class="feature-icon">👨‍🏫</div>
                            <h3>Personalized Approach</h3>
                            <p>Tailored teaching methods adapted to your learning style and academic goals.</p>
                        </div>
                        <div class="feature-card card">
                            <div class="feature-icon">📊</div>
                            <h3>Proven Results</h3>
                            <p>Track record of helping students improve grades and gain confidence in challenging subjects.</p>
                        </div>
                        <div class="feature-card card">
                            <div class="feature-icon">💻</div>
                            <h3>Modern Tools</h3>
                            <p>Integration of computational tools and modern problem-solving techniques.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Subjects Section -->
            <section id="subjects" class="subjects-section">
                <div class="section-content">
                    <h2 class="section-title">Subjects Offered</h2>
                    <div class="subjects-grid">
                        <div class="subject-category card">
                            <h3>Mathematics</h3>
                            <ul>
                                <li>Calculus I, II, III</li>
                                <li>Differential Equations</li>
                                <li>Linear Algebra</li>
                                <li>Statistics & Probability</li>
                                <li>Numerical Methods</li>
                            </ul>
                        </div>
                        <div class="subject-category card">
                            <h3>Engineering</h3>
                            <ul>
                                <li>Chemical Engineering Fundamentals</li>
                                <li>Thermodynamics</li>
                                <li>Fluid Mechanics</li>
                                <li>Heat & Mass Transfer</li>
                                <li>Process Design</li>
                            </ul>
                        </div>
                        <div class="subject-category card">
                            <h3>Programming</h3>
                            <ul>
                                <li>Python Programming</li>
                                <li>MATLAB</li>
                                <li>Data Analysis</li>
                                <li>Scientific Computing</li>
                                <li>Algorithm Development</li>
                            </ul>
                        </div>
                        <div class="subject-category card">
                            <h3>Sciences</h3>
                            <ul>
                                <li>Chemistry</li>
                                <li>Physics</li>
                                <li>Physical Chemistry</li>
                                <li>Materials Science</li>
                                <li>Research Methods</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Pricing Section -->
            <section class="pricing-section">
                <div class="section-content">
                    <h2 class="section-title">Pricing & Packages</h2>
                    <div class="pricing-grid">
                        <div class="pricing-card card">
                            <div class="pricing-header">
                                <h3>Individual Session</h3>
                                <div class="price">$60<span>/hour</span></div>
                            </div>
                            <ul class="pricing-features">
                                <li>One-on-one tutoring</li>
                                <li>Customized lesson plans</li>
                                <li>Homework help</li>
                                <li>Flexible scheduling</li>
                            </ul>
                            <a href="#contact" class="btn btn-secondary">Book Session</a>
                        </div>
                        <div class="pricing-card card featured">
                            <div class="featured-badge">Most Popular</div>
                            <div class="pricing-header">
                                <h3>Package Deal</h3>
                                <div class="price">$50<span>/hour</span></div>
                            </div>
                            <ul class="pricing-features">
                                <li>5+ sessions (save $10/hour)</li>
                                <li>Progress tracking</li>
                                <li>Study materials included</li>
                                <li>Email support between sessions</li>
                            </ul>
                            <a href="#contact" class="btn btn-primary">Get Started</a>
                        </div>
                        <div class="pricing-card card">
                            <div class="pricing-header">
                                <h3>Exam Prep</h3>
                                <div class="price">$70<span>/hour</span></div>
                            </div>
                            <ul class="pricing-features">
                                <li>Intensive exam preparation</li>
                                <li>Practice problems</li>
                                <li>Test-taking strategies</li>
                                <li>Last-minute review sessions</li>
                            </ul>
                            <a href="#contact" class="btn btn-secondary">Prepare Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Contact Section -->
            <section id="contact" class="contact-section">
                <div class="section-content">
                    <h2 class="section-title">Get Started Today</h2>
                    <div class="contact-content">
                        <div class="contact-info">
                            <h3>Ready to improve your grades?</h3>
                            <p>Contact me to schedule your first tutoring session. I offer both in-person and online tutoring options to fit your schedule.</p>
                            <div class="contact-methods">
                                <div class="contact-method">
                                    <strong>Email:</strong>
                                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                                </div>
                                <div class="contact-method">
                                    <strong>Response Time:</strong>
                                    <span>Usually within 24 hours</span>
                                </div>
                                <div class="contact-method">
                                    <strong>Availability:</strong>
                                    <span>Evenings and weekends</span>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form-wrapper">
                            <form class="contact-form card">
                                <h3>Quick Contact</h3>
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required>
                                </div>
                                <div class="form-group">
                                    <label for="subject">Subject Needed</label>
                                    <select id="subject" name="subject" required>
                                        <option value="">Select a subject...</option>
                                        <option value="calculus">Calculus</option>
                                        <option value="chemistry">Chemistry</option>
                                        <option value="physics">Physics</option>
                                        <option value="programming">Programming</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" rows="4" placeholder="Tell me about your tutoring needs..."></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tutoring',
    mounted() {
        // Smooth scrolling for anchor links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}
</script>

<style scoped>
.tutoring {
    padding-top: 120px;
    min-height: 100vh;
}

/* Hero Section */
.tutoring-hero {
    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%);
    border-radius: 20px;
    margin-bottom: 4rem;
    padding: 4rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.tutoring-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Section Styling */
.section-content {
    max-width: 1200px;
    margin: 0 auto 4rem auto;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 3rem;
    color: var(--text-primary);
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.feature-card {
    text-align: center;
    padding: 2rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.feature-card h3 {
    color: var(--accent-primary);
    margin-bottom: 1rem;
}

/* Subjects Grid */
.subjects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.subject-category {
    padding: 2rem;
}

.subject-category h3 {
    color: var(--accent-primary);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
}

.subject-category ul {
    list-style: none;
    padding: 0;
}

.subject-category li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-secondary);
}

.subject-category li:last-child {
    border-bottom: none;
}

/* Pricing Grid */
.pricing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.pricing-card {
    text-align: center;
    padding: 2rem;
    position: relative;
    transition: transform 0.3s ease;
}

.pricing-card:hover {
    transform: translateY(-5px);
}

.pricing-card.featured {
    border: 2px solid var(--accent-primary);
    transform: scale(1.05);
}

.featured-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent-primary);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

.pricing-header {
    margin-bottom: 2rem;
}

.pricing-header h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
}

.price {
    font-size: 3rem;
    font-weight: 700;
    color: var(--accent-primary);
}

.price span {
    font-size: 1rem;
    color: var(--text-secondary);
}

.pricing-features {
    list-style: none;
    padding: 0;
    margin-bottom: 2rem;
}

.pricing-features li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-secondary);
}

.pricing-features li:last-child {
    border-bottom: none;
}

/* Contact Section */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.contact-info h3 {
    color: var(--accent-primary);
    margin-bottom: 1rem;
}

.contact-methods {
    margin-top: 2rem;
}

.contact-method {
    margin-bottom: 1rem;
    color: var(--text-secondary);
}

.contact-method strong {
    color: var(--text-primary);
}

.contact-method a {
    color: var(--accent-primary);
}

/* Contact Form */
.contact-form {
    padding: 2rem;
}

.contact-form h3 {
    margin-bottom: 1.5rem;
    text-align: center;
    color: var(--text-primary);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--accent-primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Responsive Design */
@media (max-width: 968px) {
    .tutoring {
        padding-top: 160px;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .hero-cta {
        flex-direction: column;
        align-items: center;
    }
    
    .pricing-card.featured {
        transform: none;
    }
}

@media (max-width: 768px) {
    .tutoring {
        padding-top: 180px;
    }
    
    .tutoring-hero {
        padding: 3rem 1.5rem;
        margin-bottom: 3rem;
    }
    
    .section-content {
        margin-bottom: 3rem;
    }
    
    .features-grid,
    .subjects-grid,
    .pricing-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .tutoring {
        padding-top: 200px;
    }
    
    .tutoring-hero {
        padding: 2rem 1rem;
        margin-bottom: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .hero-title {
        font-size: 2rem;
    }
}
</style>
