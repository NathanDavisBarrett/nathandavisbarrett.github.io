<template>
    <div class="researchProjects">
        <div class="container">
            <h1 class="page-title">Research Projects</h1>
            
            <h2 class="section-title">Current Projects</h2>
            
            <div class="projects-grid">
                <div class="project-card card">
                    <div class="project-image">
                        <img src="StateTransitionGraph.png" alt="Startup/Shutdown Modeling">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">Accurate Modeling of Generator Startups/Shutdowns</h2>
                        <div class="project-tags">
                            <span class="tag">Optimization</span>
                            <span class="tag">Integer Programming</span>
                            <span class="tag">Renewable Energy Transition</span>
                            <span class="tag">Mathematical Modeling</span>
                        </div>
                        <p>With the rise in renewable energy sources, existing electrical generators are having to startup and shutdown at a much greater frequency.</p>
                        <p>These startup/shutdown transitions are nuanced and costly. Thus it's important to accurately model them when making operation decisions for the grid.</p>
                        <p>This project, with its paper currently under review, aims to present way to accurately model these transitions while being efficient enough to meet this needs of large-scale electrical grids.</p>
                    </div>
                </div>
            </div>
            
            <h2 class="section-title">Project Archive</h2>

            <div class="projects-grid">
                <div class="project-card card">
                    <div class="project-content">
                        <h2 class="project-title">Diffusion Drying Simulation</h2>
                        <div class="project-tags">
                            <span class="tag">SPH</span>
                            <span class="tag">LAMMPS</span>
                            <span class="tag">Li-ion Battery</span>
                            <span class="tag">MD</span>
                        </div>
                        <p>Using a custom inter-particle diffusion model built into LAMMPS's SPH implementation, I was able to model the drying of Li-ion Battery solvent during the drying manufacturing step.</p>
                        <p>The diagram shows the simulation result used to verify correct behavior using a simple column of pure solvent. Similar verifications were done using the simulated and anaylitcal solution to the Arnold Diffusion cell.</p>
                        <p>This model can be used to accurately observe how solvent evaporates through the porous electrode film during drying.</p>
                        <p>This model will be included in future work published by the Battery Materials Research (BMR) Group at BYU.</p>
                    </div>
                    <div class="project-image">
                        <img src="ezgif-6-403fe3f0a529.gif" alt="Diffusion drying simulation">
                    </div>
                </div>
     
                <div class="project-card card">
                    <div class="project-image">
                        <img src="slurry_cropped.png" alt="Initial structure generator">
                    </div>
                    <div class="project-content">
                        <h2 class="project-title">Realistic Initial Structure Generator</h2>
                        <div class="project-tags">
                            <span class="tag">Python</span>
                            <span class="tag">Neighbor List</span>
                            <span class="tag">Algorithm</span>
                        </div>
                        <p>When I first joined the BMR group, the molecular modeling team already had an initial structure generator in use. However, this generator was plagued by horrible wait times and by particles placed on top of neighboring particles.</p>
                        <p>After familiarizing myself with the program, I saw several opportunities for improvement. I introduced a novel neighbor tracking algormithm that kept track of particle's positions and neighbors without ever needing to itterate over every particle in the system. This algorithm also allowed for additional parameters to be set to completely eliminate the possibility of an overlap.</p>
                        <p>This reduced the operation time from quadratic with time to linear, saving countless hours of waiting. Once the user-input parameters are set, this generator can create realistic initial structures that minimize equilibrium simulation time while perfectly matching slurry specifications such as composition, particle size, particle shape, particle orientation, spacial distribution, etc.</p>
                        <p>This generator was used in several BMR publications beyond those posted in the CV portion of this site.</p>
                    </div>
                </div>

                <div class="project-card card">
                    <div class="project-content">
                        <h2 class="project-title">RESPA Implementation in HOOMD</h2>
                        <div class="project-tags">
                            <span class="tag">HOOMD</span>
                            <span class="tag">RESPA</span>
                            <span class="tag">DPD</span>
                            <span class="tag">MD</span>
                        </div>
                        <p>One of the greatest limitations of Molecular Dynamics is the inability to simulate large time or spatial scales without absolutely massive computational resources. While sophisticated neighbor tracking can ease this issue slightly, other solutions are needed. Reversible Reference System Propagator Algorithms (RESPA) allow for multiple time scales to be used to govergn various interactions in an MD simulation.</p>
                        <p>However, there is not a current official implementation of RESPA in HOOMD. I've currently been working in the de Pablo Group at the Pritzker School of Molecular Engineering to create one. The implementation is currently undergoing testing to validate it's physical accuracy before it is used to boost the time scale of several DPD simulations.</p>
                    </div>
                    <div class="project-image">
                        <img src="CodeSnip.PNG" alt="RESPA implementation code">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.researchProjects {
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

.section-title {
    text-align: center;
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: var(--text-primary);
    margin-top: 2rem;
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
    flex: 0 0 40%;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    position: relative;
}

.project-image img {
    max-width: 100%;
    max-height: 400px;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 12px;
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
        max-width: 100%;
        margin: 0 auto;
    }
    
    .project-image img {
        max-width: 100%;
        max-height: 350px;
    }
    
    .project-content {
        text-align: left;
    }
}

@media (max-width: 768px) {
    .researchProjects {
        padding: 1rem 0;
    }
    
    .page-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    
    .section-title {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
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
    
    .project-image img {
        max-height: 300px;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 1.5rem;
    }
    
    .project-title {
        font-size: 1.4rem;
    }
    
    .project-card {
        gap: 1rem;
    }
    
    .project-image img {
        max-height: 250px;
    }
    
    .tag {
        font-size: 0.75rem;
        padding: 0.2rem 0.6rem;
    }
}
</style>
