<template>
  <div class="Header">
      <!-- Sticky header bar with logo, profile, and navigation -->
      <div class="sticky-header">
          <div class="sticky-content">
              <div class="logoContainer">
                  <router-link to="/about" @click="setSelection('about')"><img src="NLogo_BluePurple.png" alt="Nathan Barrett Logo"></router-link>
              </div>

              <div class="routerLinksContainer">
                  <div class="routerLinks">
                      <HeaderLink v-bind:linkLocation="'about'" v-bind:displayText="'About'" v-bind:selection="selection" v-on:click="setSelection('about')"/>
                      <HeaderLink v-bind:linkLocation="'cv'" v-bind:displayText="'CV'" v-bind:selection="selection" v-on:click="setSelection('cv')"/>
                      <HeaderLink v-bind:linkLocation="'research_projects'" v-bind:displayText="'Research Projects'" v-bind:selection="selection" v-on:click="setSelection('research_projects')"/>
                      <HeaderLink v-bind:linkLocation="'personal_projects'" v-bind:displayText="'Personal Projects'" v-bind:selection="selection" v-on:click="setSelection('personal_projects')"/>
                  </div>
              </div>

              <div class="profilePalate">
                  <a href="https://github.com/NathanDavisBarrett" title="GitHub" target="_blank">
                      <img src="GitHub-Mark-Light-120px-plus.png">
                  </a>
                  <a href="https://www.linkedin.com/in/nathandavisbarrett/" title="LinkedIn" target="_blank">
                      <img src="In-Blue-Logo.png.original.png">
                  </a>
                  <a href="https://scholar.google.com/citations?user=4KekiOAAAAAJ&hl=en" title="Google Scholar" target="_blank">
                      <img src="google-scholar.png">
                  </a>
              </div>
          </div>
      </div>

      <!-- Scrollable main name section -->
      <div class="hero-section">
          <div class="mainName">
              <h1>Nathan Davis Barrett:~$<span class="blink">_</span></h1>
              <div class="attrFullList">
                  <span v-for="(attr, index) in codeNameAttrs" :key="attr">
                      <!-- <h2 v-if="index != 0">,&#160;</h2> -->
                      <h2 v-if="index >= 0">{{attr}}</h2>
                  </span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderLink from '@/components/HeaderLink.vue'

export default {
  name: 'Header',
  components: {
      HeaderLink,
  },
  data() {
      return {
          myName: "NathanDavisBarrett",
          codeNameAttrs: ["Decision Intelligence", "High-Performance Computing", "Modeling/Simulation Engineering"],
          selection: ""
      }
  },
  methods: {
      setSelection(newSelection) {
          this.selection = newSelection;
      }
  }
}
</script>

<style scoped>
.Header {
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    position: relative;
    overflow: hidden;
}

.Header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    pointer-events: none;
}

/* Sticky header bar */
.sticky-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    background: rgba(10, 10, 11, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

.sticky-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0.75rem 2rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-areas: "logo nav profile";
    gap: 2rem;
    align-items: center;
}

.logoContainer {
    grid-area: logo;
    display: flex;
    align-items: center;
}

.logoContainer img {
    width: 50px;
    height: auto;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
}

.logoContainer:hover img {
    transform: scale(1.05);
}

.routerLinksContainer {
    grid-area: nav;
    display: flex;
    justify-content: center;
}

.routerLinks {
    display: flex;
    gap: 0.5rem;
    background: transparent;
    padding: 0.5rem;
    border-radius: 12px;
    flex-wrap: wrap;
    justify-content: center;
}

.profilePalate {
    grid-area: profile;
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.profilePalate a {
    height: 36px;
    width: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-tertiary);
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
}

.profilePalate a:hover {
    transform: translateY(-2px);
    background: var(--accent-primary);
    border-color: var(--accent-primary);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.profilePalate img {
    height: 20px;
    width: 20px;
    object-fit: contain;
    filter: brightness(0.9);
    transition: filter 0.2s ease;
}

.profilePalate a:hover img {
    filter: brightness(1.2);
}

/* Hero section with main name (scrollable) */
.hero-section {
    position: relative;
    z-index: 1;
    padding: 6rem 2rem 4rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mainName {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 1200px;
    width: 100%;
}

.mainName h1 {
    font-size: clamp(2rem, 6vw, 4rem);
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary));
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease-in-out infinite;
    margin-bottom: 2rem;
}

@keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.blink {
    animation: blinker 1.5s ease-in-out infinite;
    color: var(--accent-primary);
}

@keyframes blinker {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

.attrFullList {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    max-width: 600px;
}

.attrFullList span {
    display: flex;
    align-items: center;
}

.attrFullList h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.attrFullList h2:hover {
    color: var(--text-primary);
    border-color: var(--accent-primary);
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.2);
}

/* Responsive Design */
@media (max-width: 968px) {
    .sticky-content {
        grid-template-columns: 1fr;
        grid-template-areas: 
            "logo"
            "nav"
            "profile";
        gap: 1rem;
        text-align: center;
        padding: 1rem;
    }
    
    .routerLinks {
        justify-content: center;
        gap: 0.25rem;
    }
    
    .profilePalate {
        justify-content: center;
    }
    
    .hero-section {
        padding: 5rem 1rem 3rem 1rem;
    }
}

@media (max-width: 768px) {
    .sticky-content {
        padding: 0.75rem 1rem;
        gap: 0.75rem;
    }
    
    .logoContainer img {
        width: 40px;
    }
    
    .profilePalate a {
        height: 32px;
        width: 32px;
    }
    
    .profilePalate img {
        height: 18px;
        width: 18px;
    }
    
    .routerLinks {
        gap: 0.25rem;
    }
    
    .hero-section {
        padding: 4.5rem 1rem 2rem 1rem;
    }
    
    .attrFullList h2 {
        font-size: 0.9rem;
        padding: 0.5rem 1rem;
    }
}

@media (max-width: 480px) {
    .sticky-content {
        padding: 0.5rem;
        gap: 0.5rem;
    }
    
    .logoContainer img {
        width: 35px;
    }
    
    .profilePalate {
        gap: 0.5rem;
    }
    
    .profilePalate a {
        height: 30px;
        width: 30px;
    }
    
    .profilePalate img {
        height: 16px;
        width: 16px;
    }
    
    .mainName h1 {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }
    
    .hero-section {
        padding: 4rem 0.5rem 1.5rem 0.5rem;
    }
    
    .attrFullList {
        gap: 0.5rem;
    }
    
    .attrFullList h2 {
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>
