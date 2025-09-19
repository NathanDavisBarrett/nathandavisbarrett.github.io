<template>
    <div class="personalProjects">
        <div class="container">
            <h1 class="page-title">Personal Projects</h1>
            
            <div class="projects-grid">
                <div class="project-card card">
                    <div class="project-content">
                        <h2 class="project-title">A Pure-Python Mixed-Integer Linear Programming (MILP) Solver</h2>
                        <div class="project-tags">
                            <span class="tag">Optimization</span>
                            <span class="tag">Mathematics</span>
                            <span class="tag">Python</span>
                            <span class="tag">Algorithms</span>
                        </div>
                        <p> Algorithms, math, and their application to the real-world have always fascinated me.</p>
                        <p>That's why I spent a substantial amount of my personal "fun project time" dedicated to building a fully-functional MILP solver in pure python. Originally, this was just so that I could fully and completely understand how these solvers work. But in retrospect, it's a great educational guide to others.</p>
                        <p> I made sure to balance the beauty and elegance of the python programming language with several best-practices for matrix sparsity, algorithms, and general software engineering</p>
                            
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett/NathansBranchAndCut" target="_blank" class="btn btn-primary">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="BranchAndBound.PNG" alt="MILP solver project">
                    </div>
                </div>
                
                <div class="project-card card">
                    <div class="project-image">
                        <img src="MultiStart_Initial.gif" alt="Reusable Landing Vehicle Optimization">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">Reusable Landing Vehicle Optimization</h2>
                        <div class="project-tags">
                            <span class="tag">Optimization</span>
                            <span class="tag">Uncertainty Modeling</span>
                            <span class="tag">Aerospace</span>
                            <span class="tag">Python</span>
                        </div>
                        <p>This project focuses on optimizing the fuel-efficient landing of reusable space vehicles, a transformative innovation in the aerospace industry. By leveraging advanced optimization techniques, the project addresses the challenges of non-linear and non-convex dynamics inherent in such landings.</p>
                        <p><strong>Sequential Convexification:</strong> The project employs a first-order Taylor approximation to relax non-convexities, reformulating the problem as a Quadratic Second-Order Cone Program (QCQP). This approach ensures rapid and globally optimal solutions, even for large problem instances.</p>
                        <p><strong>Stochastic Programming Architecture:</strong> A major contribution of this work is the introduction of a general stochastic programming framework. This architecture handles uncertainty in parameters such as wind speed, initial conditions, and environmental factors through Monte Carlo-generated scenarios, enabling robust and adaptable solutions.</p>
                        <p><strong>Software Engineering Excellence:</strong> The project adheres to rigorous software engineering practices, including thorough documentation, object-oriented design, and extensive unit testing. These principles ensure scalability, maintainability, and clarity in the codebase.</p>
                        <p>This work demonstrates expertise in targeting and optimization, estimation and uncertainty modeling, and simulation—key skills for aerospace applications. It also aligns with cutting-edge research, drawing inspiration from the work of Szmuk et al. on successive convexification for powered landings.</p>
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett/ModelPredictiveControl/tree/main/ResuableLandingVehicle" target="_blank" class="btn btn-primary">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card card">
                    <div class="project-content">
                        <h2 class="project-title">Computational Decision Making for Regular People</h2>
                        <div class="project-tags">
                            <span class="tag">Education</span>
                            <span class="tag">Optimization</span>
                            <span class="tag">Mathematics</span>
                            <span class="tag">Modeling</span>
                        </div>
                        <p> I've found that learning about optimization, mathematical modeling, and simulation can be frustratingly difficult, especially if you don't have a good teacher and a good place to start.</p>
                        <p>Simultaneously, I see the immense potential for positive impact that this kind of modeling can have on every-day peoples' lives: From deicing which insurance plan to purchase, to planning out how to save for retirement, to organizing daily and weekly tasks.</p>
                        <p> So I coupled my passion for learning and teaching with my passion for optimization and mathematical modeling to create a publicly accessible course on the topic. I've given this course to several community members from diverse backgrounds with math/coding and received phenomenal reviews all around.</p>
                            
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett/ComputationalDecisionMakingCourse" target="_blank" class="btn btn-primary">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="computationalDecisionMaking.png" alt="Computational Decision Making Course">
                    </div>
                </div>
                <div class="project-card card">
                    <div class="project-image">
                        <img src="McCabeThile.png" alt="NathanLibrary project">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">The NathanLibrary</h2>
                        <div class="project-tags">
                            <span class="tag">Python</span>
                            <span class="tag">Chemical Engineering</span>
                            <span class="tag">Algorithms</span>
                        </div>
                        <p>As chemical engineering majors, we sure are expected to know a lot about how to code. For a computer scientist such as myself this comes naturally, but for a lot of others it can be a major challenge.</p>
                        <p>So I've compiled all of the custom functions, classes, algorithms, procedures, etc. that I've written over the course of my time in the Chemical Engineering major into one boilerplate that is easy to import and move around. This is done so that others can have easy access to a variety of problem solving tools while still being able to see how those tools work. That's why I haven't converted the NathanLibrary to a dedicated python module and moved a lot of the heavy computing to C++. Students can see my solution, and use it as a pattern to create their own.</p>
                        <p>Additionally, a lot of the libraries we use as Chemical Engineers are not compatible with eachother (e.g. Sympy, pint, numpy, and scipy all have significant limitations in working with eachother). The NathanLibrary is written in a way to make each of these libraries cross-compatible.</p>
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett/NathanLibrary" target="_blank" class="btn btn-primary">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card card">
                    <div class="project-content">
                        <h2 class="project-title">Various Web Development Projects</h2>
                        <div class="project-tags">
                            <span class="tag">Vue.js</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">Web Development</span>
                            <span class="tag">Angular</span>
                        </div>
                        <p>What I love about web development is the freedom it allows me to have while still using my talents and skills. I enjoy spending my spare time making great-looking websites. Examples (with their accompanying source code) include this website (<a href="https://github.com/NathanDavisBarrett/NathanDavisBarrett.com" target="_blank">code</a>), a custom website for my wedding (<a href="https://github.com/NathanDavisBarrett/weddingWebsite" target="_blank">code</a>), and several others that can be found on my <a href="https://github.com/NathanDavisBarrett" target="_blank">Github</a>.</p>
                        <p>While most of my experience is with Vue, I'm also currently learning the Angular framework and intend to learn the React framework eventually.</p>
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett/NathanDavisBarrett.com" target="_blank" class="btn btn-primary">
                                View On GitHub
                            </a>
                        </div>
                    </div>
                    <div class="project-image">
                        <img src="NLogo_BluePurple.png" alt="Web Development projects">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.personalProjects {
    min-height: calc(100vh - 200px);
    padding: 2rem 0;
    background: var(--bg-primary);
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.project-card {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    text-align: left;
    min-height: 400px;
}

.project-image {
    flex: 0 0 300px;
    height: 250px;
    overflow: hidden;
    border-radius: 12px;
    position: relative;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-image:hover img {
    transform: scale(1.05);
}

.project-content {
    flex: 1;
    min-width: 0;
}

.project-title {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    line-height: 1.3;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tag {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.project-content p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
}

.project-content p strong,
.project-content p b {
    color: var(--text-primary);
    font-weight: 600;
}

.project-content p a {
    color: var(--accent-primary);
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.2s ease;
}

.project-content p a:hover {
    text-decoration-color: var(--accent-primary);
}

.project-links {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* Responsive Design */
@media (max-width: 968px) {
    .project-card {
        flex-direction: column !important;
        text-align: center;
        min-height: auto;
    }
    
    .project-image {
        flex: 0 0 auto;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
    
    .project-content {
        text-align: left;
    }
}

@media (max-width: 768px) {
    .personalProjects {
        padding: 1rem 0;
    }
    
    .page-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    
    .projects-grid {
        gap: 2rem;
    }
    
    .project-card {
        gap: 1.5rem;
    }
    
    .project-title {
        font-size: 1.6rem;
    }
    
    .project-image {
        height: 200px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }
    
    .project-title {
        font-size: 1.4rem;
    }
    
    .project-card {
        gap: 1rem;
    }
    
    .project-image {
        height: 180px;
    }
    
    .tag {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
    }
}
</style>
