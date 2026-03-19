<template>
    <div class="cv-page">
        <div class="container">
            <h1 class="page-title">Curriculum Vitae</h1>
            <div class="cv-container">
                <div class="cvSection">
                    <h2 class="section-title">Education</h2>
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Princeton University (PU)</h4>
                            <p>September 2022 - Present</p>
                        </div>
                        <p class="degree">Ph.D. in Chemical Engineering (4th year)</p>
                        <ul>
                            <li>Advisor: Christos Maravelias</li>
                            <li>Current Project: Modeling/solution techniques to increase detail of thermal power plant startup/shutdown dynamics in unit commitment models</li>
                            <li>Princeton Research Computing: Frequent use of the Della cluster for large-scale Mixed-integer optimization problems</li>
                            <li>Designated Maravelias Group cluster expert/manager</li>
                            <li>Relevant Courses: Linear & Nonlinear Optimization, Energy Systems Optimization, Stochastic Programming, Structural Optimization, Transport Phenomena, Thermodynamics</li>
                        </ul>
                    </div>
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Brigham Young University (BYU)</h4>
                            <p>September 2015 - April 2022</p>
                        </div>
                        <p class="degree">B.S. Chemical Engineering</p>
                        <ul>
                            <li>GPA: 3.95/4.00</li>
                            <li>Magna Cum Laude</li>
                            <li>Relevant Courses: High-Performance Computing, Molecular Modeling, Software Engineering, Python for Engineers</li>
                            <li>Awards/Honors: BYU Chem. Eng. Outstanding Senior Award, BYU Chem. Eng. Outstanding Junior Award, Brigham Young Scholarship, Chem. Eng. Dept. Scholarship</li>
                        </ul>
                    </div>
                </div>
                <div class="cvSection">
                    <h2 class="section-title">Research Experience</h2>
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Graduate Student</h4>
                            <p>September 2022 - Present</p>
                        </div>
                        <p class="role">Maravelias Group, Princeton University</p>
                        <p class="project-title"><em>MILP Unit Commitment Models Accounting For Operational Flexibility During Startup and Shutdown</em></p>
                        <ul>
                            <li>Developed modeling/solution techniques for grid-wide operational planning (i.e., the Unit Commitment problem)</li>
                            <li>Increased accuracy and controllability of Startup/Shutdown (SU/SD) models for thermal power plants</li>
                            <li>Developed a framework to quantify the impact of controllable SU/SD models producing cost reductions up to 30%</li>
                            <li>Paper under review at IEEE Transactions on Power Systems</li>
                        </ul>
                    </div>
                    
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Research Assistant</h4>
                            <p>April 2018 - April 2022</p>
                        </div>
                        <p class="role">Battery Materials Research Group, BYU</p>
                        <p class="project-title"><em>Meso-scale Modeling of Manufacturing Inconsistencies in Lithium-ion Battery Electrodes</em></p>
                        <ul>
                            <li>Developed a custom data-syncing/storage management code on BYU's super-computing cluster</li>
                            <li>Adapted LAMMPS simulation package to handle meso-scale Smoothed-Particle Hydrodynamics (SPH) simulations</li>
                            <li>Designed a drying algorithm to simulate the drying of liquids within heterogeneous structures without the need of additional expensive CFD simulations</li>
                            <li>Developed automated test generation, execution, and optimization codes used throughout the research group</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Research Intern</h4>
                            <p>May 2021 - August 2022</p>
                        </div>
                        <p class="role">Juan de Pablo Group, University of Chicago</p>
                        <p class="project-title"><em>Implementing a Custom Reversible Reference System Propagator Algorithm (RESPA)</em></p>
                        <ul>
                            <li>Developed a custom RESPA integrator plugin for the HOOMD molecular dynamics (MD) package</li>
                            <li>Created an integrator that enables MD simulations to effectively capture dynamics on various time and spatial scales simultaneously</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>IMMERSE Outreach Researcher</h4>
                            <p>May 2019 - August 2021</p>
                        </div>
                        <p class="role">IMMERSE, BYU</p>
                        <ul>
                            <li>Delivered oral presentations explaining the details of my research to various audiences including experienced faculty and university students from diverse fields.</li>
                            <li>Planned, and hosted a chemistry lesson/demonstration within a yearly children’s summer camp.</li>
                            <li>Composed full-length, professional quality video presentations about the yearly summer camp while under extreme time constraints.</li>
                        </ul>
                    </div>
                </div>

                <div class="cvSection">
                    <h2 class="section-title">Work & Volunteer Experience</h2>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>(Upcoming) Operations Research Intern</h4>
                            <p>Jun 2026 - Sep 2026</p>
                        </div>
                        <p class="role">United Airlines</p>
                        <ul>
                            <li>Partner with cross-functional teams (e.g., Airport Ops, Network Planning, Revenue Mgmt, Digital Products) to translate complex problems into analytical requirements and influence enterprise strategy.</li>
                            <li>Build and apply mathematical models and advanced analytics to generate practical solutions with measurable operational and financial impact.</li>
                            <li>Deliver value through end-to-end project work, research &amp; development, and stakeholder communication.</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Tutor (Master Level)</h4>
                            <p>May 2024 - Present</p>
                        </div>
                        <p class="role">Princeton Tutoring</p>
                        <ul>
                            <li>Authored and delivered customized curricula to multiple high-school and undergraduate students</li>
                            <li>Taught and demonstrated topics such as dynamic programming, optimization, deep learning, order of complexity, inheritance, polymorphism, the single-responsibility principle, documentation, and unit testing</li>
                            <li>Received personal recommendations and requests as a repeat tutor for subsequent semesters</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Research Mentor</h4>
                            <p>Sep 2025 - Mar 2026</p>
                        </div>
                        <p class="role">Lumiere Education</p>
                        <ul>
                            <li>Mentored 4 students in independent research projects covering dynamic modeling, optimal control, energy systems optimization, and LLM fine-tuning</li>
                            <li>Multiple students submitted their written papers to high-school level academic journals</li>
                        </ul>
                    </div>
                    
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Instructor</h4>
                            <p>October 2024 - December 2024</p>
                        </div>
                        <p class="role">Princeton Adult School</p>
                        <ul>
                            <li>Developed and taught "Computational Decision Making For Regular People" course for community members</li>
                            <li>Clearly taught concepts such as linearization, binary modeling, and stochastic programming</li>
                            <li>Received outstanding reviews such as: "Nathan was intent on preparing us to be able to apply these skills in our personal lives. Both, his passion for and expertise were evident. A spectacular class."</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Junior Computational Physics Engineer</h4>
                            <p>May 2022 - August 2022</p>
                        </div>
                        <p class="role">PassiveLogic</p>
                        <ul>
                            <li>Developed computational tools to enable deep-learning capable digital twins of energy-intensive HVAC systems</li>
                            <li>Designed a mathematical basis for simulating heat transfer and humid air dynamics within the "Quantum" ontology</li>
                            <li>Identified potential sources of error in current simulation methodologies</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Teaching Assistant</h4>
                            <p>August 2019 - April 2021</p>
                        </div>
                        <p class="role">Intro. to Chem. Eng., Thermodynamics, BYU</p>
                        <ul>
                            <li>Re-wrote lab procedures in response to changes in curriculum, lab location, and the COVID-19 pandemic</li>
                            <li>Advised brand-new chemical engineering students on study practices and course planning</li>
                            <li>Hosted office hours which students often deliberately chose to come to</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Volunteer Tutor</h4>
                            <p>October 2019 - April 2022</p>
                        </div>
                        <p class="role">BYU Y-Serve</p>
                        <ul>
                            <li>Tutored 20+ students in diverse STEM fields ranging from Chemical Engineering and Chemistry to Math and Physics encompassing 100+ hours</li>
                            <li>Was specifically requested by multiple students to be their tutor for several further classes</li>
                            <li>Completed both levels of formal tutoring training offered at BYU</li>
                        </ul>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Volunteer Missionary</h4>
                            <p>January 2016 - January 2018</p>
                        </div>
                        <p class="role">The Church of Jesus Christ of Latter-day Saints</p>
                        <ul>
                            <li>Developed interpersonal communication skills allowing me to understand and listen to people of different cultures</li>
                            <li>Learned to handle heated situations in an orderly, respectful, and constructive way</li>
                            <li>Organized and participated in hundreds of hours of community service</li>
                            <li>Trained, taught, and led teams of 12 fellow volunteers to help reach the goals we set as a group</li>
                        </ul>
                    </div>
                </div>

                <div class="cvSection">
                    <h2 class="section-title">Awards & Honors</h2>
                    <div class="subcvSection card">
                        <div class="honor">
                            <p>BYU Chemical Engineering Outstanding Senior</p>
                            <p class="year">2022</p>
                        </div>
                        <div class="honor">
                            <p>BYU Chemical Engineering Outstanding Junior</p>
                            <p class="year">2021</p>
                        </div>
                        <div class="honor">
                            <p>Brigham Young Scholarship</p>
                            <p class="year">2020, 2018</p>
                        </div>
                        <div class="honor">
                            <p>Robert R. & Vera S. Cederlof Scholarship</p>
                            <p class="year">2019</p>
                        </div>
                        <div class="honor">
                            <p>John Einar Anderson Scholarship</p>
                            <p class="year">2018</p>
                        </div>
                        <div class="honor">
                            <p>Elks State Scholarship</p>
                            <p class="year">2015</p>
                        </div>
                    </div>
                </div>

                <div class="cvSection">
                    <h2 class="section-title">Notable Projects</h2>
                    
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>Pure-Python MILP Solver</h4>
                            <p>Summer/Fall 2024</p>
                        </div>
                        <ul>
                            <li>Personally developed a fully-functional branch-and-bound MILP solver from scratch</li>
                            <li>Implemented several best-practices for matrix sparsity, algorithms, and general software engineering</li>
                            <li>Written as an equational guide of how MILP solvers work and how they're implemented</li>
                        </ul>
                    </div>
                    
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <h4>PyomoTools</h4>
                            <p>May 2023 - Present</p>
                        </div>
                        <ul>
                            <li>Developed a set of tools addressing model infeasibility, visualization, and low-level formulations</li>
                            <li>Saved myself, other group members, and dozens of undergrads countless hours of debugging and frustration</li>
                            <li>Available as a complete python package on PyPI</li>
                        </ul>
                    </div>
                </div>

                <div class="cvSection">
                    <h2 class="section-title">Applicable Courses</h2>
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <p class="course-category">Optimization & Computer Science</p>
                        </div>
                        <div class="compactList">
                            <p>Linear & Nonlinear Optimization, Energy Systems Optimization, Stochastic Programming, Structural Optimization, High-Performance and Parallel Computing, Software Engineering, Data Structures, Advanced Programming Concepts</p>
                        </div>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <p class="course-category">Engineering & Chemistry</p>
                        </div>
                        <div class="compactList">
                            <p>Transport Phenomena, Thermodynamics, Molecular Modeling, Physical/Quantum Chemistry, Material Science, Heat and Mass Transfer, Fluid Mechanics, Computational Fluid Dynamics</p>
                        </div>
                    </div>
                </div>

                <div class="cvSection">
                    <h2 class="section-title">Technical Skills</h2>
                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <p class="course-category">Computer Languages</p>
                        </div>
                        <div class="compactList">
                            <p>Python, Julia, C++, C, GAMS, Swift, LaTeX, CUDA, MATLAB, VBA, Java, JavaScript, HTML, CSS</p>
                        </div>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <p class="course-category">Software & Tools</p>
                        </div>
                        <div class="compactList">
                            <p>MPI, OpenMP, C++ threading, Python multithreading, Pyomo, Gurobi, PyTorch, HOOMD, LAMMPS, Aspen HYSYS, ChemCAD, Visual Studio, VueJS</p>
                        </div>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <p class="course-category">Computer & Engineering Skills</p>
                        </div>
                        <div class="compactList">
                            <p>Mixed-Integer Linear Programming, Mathematical Optimization, Parallel Computing, Deep Learning, Bash, Linux, Unix, HTTP, SSH, Smoothed-Particle Hydrodynamics, Molecular Dynamics, Monte Carlo Simulation</p>
                        </div>
                    </div>

                    <div class="subcvSection card">
                        <div class="subcvSectionHeader">
                            <p class="course-category">Basic Professional Skills</p>
                        </div>
                        <div class="compactList">
                            <p>Microsoft Office Suite, Google Office Suite, Leadership, Communication, Self-Motivation, Attention to Detail, Time Management</p>
                        </div>
                    </div>
                </div>

                <div class="cvSection">
                    <h2 class="section-title">Journal Article</h2>
                    <div class="subcvSection card">
                        <p><a href="https://iopscience.iop.org/article/10.1149/1945-7111/ac0bf1" target="_blank">M. Nikpour, <b>N. Barrett</b>, Z. Hillman, A.I. Thompson, B.A. Mazzeo, and D.R. Wheeler, “Model for Investigating Sources of Li-Ion Battery Electrode Heterogeneity – Part 1: Electrode Drying and Calendering Processes,” 2021 J. Electrochem. Soc. 168 060547</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cv-page {
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

.cv-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
}

.cvSection {
    width: 100%;
}

.section-title {
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--accent-primary);
}

.subcvSection {
    margin-bottom: 1.5rem;
    text-align: left;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.subcvSection:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.subcvSectionHeader {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
}

.subcvSectionHeader h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.subcvSectionHeader p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    font-style: italic;
    margin: 0;
}

.degree, .role {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent-secondary);
    margin-bottom: 0.5rem;
}

.project-title {
    font-size: 1rem;
    font-style: italic;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}

.subcvSection ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
    color: var(--text-secondary);
}

.subcvSection ul li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
}

.honor {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--text-secondary);
    padding: 0.25rem 0;
}

.honor .year {
    font-weight: 600;
    color: var(--text-primary);
}

.course-category {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
}

.compactList {
    color: var(--text-secondary);
    line-height: 1.7;
}

.compactList p {
    margin: 0;
}

a {
    color: var(--accent-primary);
    text-decoration: none;
    font-weight: 600;
}

a:hover {
    text-decoration: underline;
}

b {
    font-weight: 600;
    color: var(--text-primary);
}

/* Responsive Design */
@media (max-width: 768px) {
    .page-title {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .subcvSectionHeader {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 0.75rem;
    }
}

@media (max-width: 480px) {
    .cv-page {
        padding: 1rem 0;
    }
    
    .page-title {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.5rem;
    }

    .subcvSectionHeader h4 {
        font-size: 1.1rem;
    }
}
</style>
