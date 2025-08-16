<template>
    <div class="personalProjects">
        <div class="container">
            <h1 class="page-title">Personal Projects</h1>
            
            <div class="projects-grid">
                <div class="project-card card">
                    <div class="project-image">
                        <img src="McCabeThile.png" alt="NathanLibrary project">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">The NathanLibrary</h2>
                        <div class="project-tags">
                            <span class="tag">Python</span>
                            <span class="tag">Chemical Engineering</span>
                            <span class="tag">Algorithm</span>
                        </div>
                        <p>As Chemical Engineering majors, we sure are expected to know a lot about how to code. For a Computer Scientist such as myself this comes naturally, but for a lot of others it can be a major challenge.</p>
                        <p>So I've compiled all of the custom functions, classes, algorithms, procedures, etc. that I've written over the course of my time in the Chemical Engineering major into one boilerplate that is easy to import and move around. This is done so that others can have easy access to a variety of problem solving tools while still being able to see how those tools work. That's why I haven't converted the NathanLibrary to a dedicated python module and moved a lot of the heavy computing to C++. Students can see my solution, and use it as a pattern to create their own.</p>
                        <p>Additionally, a lot of the libraries we use as Chemical Engineers are not compatible with eachother (e.g. Sympy, pint, numpy, and scipy all have significant limitations in working with eachother). The NathanLibrary is written in a way to make each of these libraries cross-compatible. One example would be that scipy's fsolve function does not work with pint variables. So I've written an explanative wrapper function "pintSolve" to rectify this.</p>
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett/NathanLibrary" target="_blank" class="btn btn-primary">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div class="project-card card">
                    <div class="project-image">
                        <img src="deepLearning.jpg" alt="Deep Learning project">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">Material Properties Deep Learning Model</h2>
                        <div class="project-tags">
                            <span class="tag">Python</span>
                            <span class="tag">PyTorch</span>
                            <span class="tag">Machine Learning</span>
                            <span class="tag">Deep Learning</span>
                            <span class="tag">Materials</span>
                        </div>
                        <p>I love taking the skills that I have and applying them to new fields. This is the case with this project. Deep learning is widely in use throughout the world for purposes such as computer vision, voice recognition, fraud detection, etc. A new up-and-coming application is that of physical property prediction. Here's the problem: We know a lot about chemicals' molecular properties like their shape, size, electron density, and characteristics. We know a lot about their macroscopic properties (melting point, vapor pressure, density...) from empirical evidence. But wouldn't it be cool if we could predict these properties just from their molecular structure? After all, that is where those macroscopic properties originate. But to do this now requires massive MD simulations to even get a glimpse of what these properties could be.</p>
                        <p><strong>The Goal</strong> of my deep learning model is to use the vast ammounts of data we have about chemicals' macroscopic properties and the separate, but equally vast, amounts of data we have about chemicals' molecular sctructures to train a Deep Learning model to take in a molecular structure and predict it's macroscopic properties <strong>without the need of any physical tests</strong>.</p>
                        <p>If the model works well, it could serve as an extremely useful resource A) to the development of new chemicals since we wouldn't have to run multi-million dollar tests to accurately determine their macroscopic properties and B) to make these properties much more accessible to the public since most macroscopic data can only be found in costly textbooks, institutional databases, or are found with one's own equipment.</p>
                        <p>My Model is currently being written using the PyTorch machine learning framework.</p>
                    </div>
                </div>

                <div class="project-card card">
                    <div class="project-image">
                        <img src="NLogo_New_Transparent.png" alt="Web Development projects">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">Various Web Development Projects</h2>
                        <div class="project-tags">
                            <span class="tag">Vue.js</span>
                            <span class="tag">JavaScript</span>
                            <span class="tag">Web Development</span>
                            <span class="tag">Angular</span>
                        </div>
                        <p>What I love about web development is the freedom it allows me to have while still using my talents and skills. I enjoy spending my spare time making great-looking websites. Examples (with their accompanying source code) include <a href="http://www.nathandavisbarrett.com" target="_blank">this website</a> (<a href="https://github.com/NathanDavisBarrett/NathanDavisBarrett.com" target="_blank">code</a>), my wife's website <a href="http://www.catherinabarrett.com" target="_blank">CatherinaBarrett.com</a> (<a href="https://github.com/NathanDavisBarrett/CatherinaBarrett.com" target="_blank">code</a>), our wedding website <a href="http://ww.kateandnatebarrett.com" target="_blank">KateAndNateBarrett.com</a> (<a href="https://github.com/NathanDavisBarrett/weddingWebsite" target="_blank">code</a>), and several others that can be found on my <a href="https://github.com/NathanDavisBarrett" target="_blank">Github</a>.</p>
                        <p>While most of my experience is with Vue, I'm also currently learning the Angular framework and intend to learn the React framework eventually.</p>
                        <div class="project-links">
                            <a href="https://github.com/NathanDavisBarrett" target="_blank" class="btn btn-primary">
                                View All Projects
                            </a>
                        </div>
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

.project-card:nth-child(even) {
    flex-direction: row-reverse;
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

.project-content a {
    color: var(--accent-primary);
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.2s ease;
}

.project-content a:hover {
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
