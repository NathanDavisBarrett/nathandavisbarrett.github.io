<template>
    <div class="about">
        <div class="container">
            <section class="hero-section">
                <h1 class="page-title">Overview</h1>
                <div class="aboutSection card">
                    <div class="aboutSectionTextWrapper">
                        <p class="lead-text">I'm driven by a passion for solving complex problems and a belief that meaningful work and a fulfilling personal life are mutually enriching. Professionally, I thrive on the challenge of developing fresh ideas and contributing to projects that have a positive, lasting impact. This same dedication to growth and well-being guides my personal life as a husband, father, and community member.
                            
                        For me, success is about finding the right balance: pursuing intellectually rigorous work while prioritizing health, family, and the simple joy of learning something new.</p>
                    </div>
                    <div class="image-wrapper">
                        <img src="profilePhoto.jpg" alt="Profile photo">
                    </div>
                </div>
            </section>

            <section class="philosophy-section">
                <h1 class="section-title">Personal Philosophies</h1>
                <div class="philSection">
                    <div class="philPoint card">
                        <h3>Empowerment and Potential</h3>
                        <p><b>I believe in the inherent potential of every individual</b>. My goal is to foster environments where people are empowered to pursue their goals through diligence, honesty, and self-awareness, leading to both personal and collective success.</p>
                    </div>

                    <div class="philPoint card">
                        <h3>Professional Kindness</h3>
                        <p><b>Kindness and respect are foundational to effective collaboration.</b> I approach every interaction with the understanding that people are generally doing their best. Maintaining a respectful and composed demeanor, especially during challenges, leads to better outcomes and stronger professional and personal relationships.</p>
                    </div>

                    <div class="philPoint card">
                        <h3>Reasoned Decision-Making</h3>
                        <p>I advocate for a thoughtful and analytical approach to problem-solving. The best decisions come from <b>a deliberate process of consideration, consultation, and reflection</b>. This involves weighing logical factors, maintaining situational awareness, and considering long-term outcomes to avoid preventable errors.</p>
                    </div>

                    <div class="philPoint card">
                        <h3>Confidence with Humility</h3>
                        <p>I value expertise and believe that <b>subject-matter experts should lead in their domains</b>. It is important to be confident when one's experience warrants it, but it is equally important to remain open to input and acknowledge the limits of one's own knowledge. This balance prevents overconfidence and fosters a collaborative spirit.</p>
                    </div>

                    <div class="philPoint card">
                        <h3>Commitment to Excellence</h3>
                        <p>Meaningful achievements are the result of dedicated effort. I believe that <b>the greatest rewards are earned through hard work</b> and a refusal to become complacent. Continuous effort and a drive for improvement are essential for realizing the most fulfilling aspects of professional and personal life.</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <h1 class="section-title">Family Life</h1>
                <div class="aboutSection card">
                    <div class="image-wrapper">
                        <img src="Kate_and_Nate_Formals_058.JPG" alt="Nathan and Kate">
                    </div>
                    <div class="aboutSectionTextWrapper">
                        <p>I was born an raised in a small town in rural Colorado. With both of my parents being school teachers, I quickly gained a love of learning and creating. </p>
                        <p>After years of studying, countless extracurricular activities, work, and play, I chose to study Chemical Engineering at Brigham Young University (BYU).</p>
                        <p>There I met and married my inspiring, beautiful, and caring wife Catherina. While I might know how to make great things for the world, she knows how to make the world great.</p>
                        <p>Shortly after graduating from BYU I began my PhD at Princeton University where I now reside and am enjoying life with my young and growing family.</p>
                    </div>
                </div>
            </section>

            <section class="content-section">
                <h1 class="section-title">Hobbies / Interests</h1>
                
                <div class="aboutSection card">
                    <div class="aboutSectionTextWrapper">
                        <h3 class="hobby-title">Music</h3>
                        <p>Music has been a large part of my life ever since I was very young. It's pushed me to try my hardest, to love what I do, and to love sharing my talents with others.</p>
                        <p>I've been involved in a variety of ensembles (The U.S. Army All-American Marching Band, The BYU Cougar Marching/Pep Bands, The Colorado All-State Band, The Western Colorado Honor Choir, various Jazz ensembles, etc.) and loved each one.</p>
                        <p>For me, music is a way to connect with myself in a different way than I can in other aspects of living.</p>
                    </div>
                    <div class="image-wrapper">
                        <img src="Saxastar.png" alt="Saxophone performance">
                    </div>
                </div>

                <div class="aboutSection aboutSectionRev card">
                    <div class="image-wrapper">
                        <img src="mission.jpg" alt="Mission service">
                    </div>
                    <div class="aboutSectionTextWrapper">
                        <h3 class="hobby-title">Church</h3>
                        <p>Church service has always been very important to me. As a young person, I was very active in my youth group and in my congregation. I also served a two year full-time mission for <a href="https://www.churchofjesuschrist.org/comeuntochrist" target="_blank">The Church of Jesus Christ of Latter-Day Saints</a> in Indiana.</p>
                        <p>My mission and other church service taught me the importance of balancing others' needs with my own and the importance of loving every part of my life.</p>
                    </div>
                </div>

                <div class="aboutSection card">
                    <div class="aboutSectionTextWrapper">
                        <h3 class="hobby-title">Philosophical Discussion</h3>
                        <p>I love discussing ideas about the universe with anyone who's willing to stretch and be stretched. My wife and I love to talk about our ideas over our favorite foods: Pizza, Pizza, and Pizza.</p>
                    </div>
                    <div class="image-wrapper">
                        <img src="pizza.jpg" alt="Pizza discussion">
                    </div>
                </div>

                <div class="aboutSection aboutSectionRev card">
                    <div class="image-wrapper">
                        <img src="triathalon.jpg" alt="Triathlon">
                    </div>
                    <div class="aboutSectionTextWrapper">
                        <h3 class="hobby-title">Cycling and The Outdoors</h3>
                        <p>Whenever we get the chance, my wife and I love getting out on our bikes, running shoes, hiking boots. We're lucky to live in a place with plenty of trails near our house that we ride on frequently.</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>
.about {
    min-height: calc(100vh - 200px);
    padding: 2rem 0;
    background: var(--bg-primary);
}

.hero-section {
    margin-bottom: 4rem;
}

.page-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: var(--text-primary);
}

.content-section, .philosophy-section {
    margin-bottom: 4rem;
}

.lead-text {
    font-size: 1.25rem;
    line-height: 1.7;
    color: var(--text-primary);
    text-align: left;
}

.aboutSection {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    text-align: left;
}

.aboutSectionRev {
    flex-direction: row-reverse;
}

.aboutSectionTextWrapper {
    flex: 1;
    min-width: 0;
}

.aboutSectionTextWrapper p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
}

.aboutSectionTextWrapper b {
    color: var(--text-primary);
    font-weight: 600;
}

.aboutSectionTextWrapper a {
    color: var(--accent-primary);
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: text-decoration-color 0.2s ease;
}

.aboutSectionTextWrapper a:hover {
    text-decoration-color: var(--accent-primary);
}

.image-wrapper {
    flex: 0 0 auto;
    max-width: 400px;
}

.image-wrapper img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-wrapper img:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.hobby-title {
    color: var(--accent-primary);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--accent-primary);
    padding-bottom: 0.5rem;
    display: inline-block;
}

.philSection {
    display: grid;
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.philPoint {
    text-align: left;
    transition: transform 0.2s ease;
}

.philPoint:hover {
    transform: translateY(-4px);
}

.philPoint h3 {
    color: var(--accent-secondary);
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}

.philPoint h3::before {
    content: '▶';
    color: var(--accent-primary);
    margin-right: 0.5rem;
    font-size: 0.8rem;
}

.philPoint p {
    color: var(--text-secondary);
    line-height: 1.7;
}

.philPoint b {
    color: var(--text-primary);
    font-weight: 600;
}

/* Responsive Design */
@media (max-width: 968px) {
    .aboutSection {
        flex-direction: column;
        text-align: center;
    }
    
    .aboutSectionRev {
        flex-direction: column;
    }
    
    .image-wrapper {
        max-width: 100%;
        order: -1;
    }
    
    .aboutSectionRev .image-wrapper {
        order: 0;
    }
    
    .philSection {
        gap: 1rem;
    }
}

@media (max-width: 768px) {
    .about {
        padding: 1rem 0;
    }
    
    .page-title {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    
    .section-title {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    
    .content-section, .philosophy-section {
        margin-bottom: 3rem;
    }
    
    .lead-text {
        font-size: 1.1rem;
    }
    
    .hobby-title {
        font-size: 1.3rem;
    }
    
    .philPoint h3 {
        font-size: 1.2rem;
    }
}

@media (max-width: 480px) {
    .page-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 1.75rem;
    }
    
    .aboutSection {
        gap: 1rem;
    }
    
    .lead-text {
        font-size: 1rem;
    }
    
    .hobby-title {
        font-size: 1.2rem;
    }
    
    .philPoint h3 {
        font-size: 1.1rem;
    }
}
</style>
