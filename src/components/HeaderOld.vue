<template>
  <div class="Header" :class="{ 'header-scrolled': isScrolled }">
      <div class="header-content">
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
          
          <div class="logoContainer" :class="{ 'logo-collapsed': isScrolled }">
              <img src="NLogo_BluePurple.png" alt="Nathan Barrett Logo">
          </div>

          <div class="mainName" v-show="!isScrolled">
              <h1>Nathan Davis Barrett:~$<span class="blink">_</span></h1>
              <div class="attrFullList">
                  <span v-for="(attr, index) in codeNameAttrs" :key="attr">
                      <h2 v-if="index != 0">,&#160;</h2>
                      <h2>{{attr}}</h2>
                  </span>
              </div>
          </div>

          <div class="routerLinksContainer" :class="{ 'nav-collapsed': isScrolled }">
              <div class="routerLinks">
                  <HeaderLink v-bind:linkLocation="'about'" v-bind:displayText="'About'" v-bind:selection="selection" v-on:click="setSelection('about')"/>
                  <HeaderLink v-bind:linkLocation="'cv'" v-bind:displayText="'CV'" v-bind:selection="selection" v-on:click="setSelection('cv')"/>
                  <HeaderLink v-bind:linkLocation="'research_projects'" v-bind:displayText="'Research Projects'" v-bind:selection="selection" v-on:click="setSelection('research_projects')"/>
                  <HeaderLink v-bind:linkLocation="'personal_projects'" v-bind:displayText="'Personal Projects'" v-bind:selection="selection" v-on:click="setSelection('personal_projects')"/>
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
          codeNameAttrs: ["Thermophysical Simulation Engineer"],
          selection: "",
          isScrolled: false,
          scrollThreshold: 100
      }
  },
  methods: {
      setSelection(newSelection) {
          this.selection = newSelection;
      },
      handleScroll() {
          this.isScrolled = window.scrollY > this.scrollThreshold;
      }
  },
  mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll(); // Check initial scroll position
  },
  beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style>
.Header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    border-bottom: 1px solid var(--border-color);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
    transition: opacity 0.3s ease;
}

.header-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Scrolled state */
.header-scrolled {
    background: rgba(10, 10, 11, 0.95);
    border-bottom-color: var(--border-color);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.header-scrolled::before {
    opacity: 0.5;
}

.header-scrolled .header-content {
    padding: 0.75rem 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.profilePalate {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;
}

.header-scrolled .profilePalate {
    order: 3;
    padding: 0 1rem;
}

.profilePalate a {
    height: 40px;
    width: 40px;
    padding: 0;
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
    height: 24px;
    width: 24px;
    object-fit: contain;
    filter: brightness(0.9);
    transition: filter 0.2s ease;
}

.profilePalate a:hover img {
    filter: brightness(1.2);
}

.logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    position: relative;
    z-index: 10;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logoContainer img {
    max-width: 300px;
    max-height: 150px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.logoContainer:hover img {
    transform: scale(1.05);
}

/* Logo collapsed state */
.logo-collapsed {
    position: absolute;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 !important;
    order: 1;
}

.logo-collapsed img {
    max-width: 60px !important;
    max-height: 40px !important;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.mainName {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;
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
    margin-bottom: 1rem;
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
    width: 90%;
    max-width: 600px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.attrFullList span {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.attrFullList h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
}

.attrFullList h2:hover {
    color: var(--text-primary);
    border-color: var(--accent-primary);
    transform: translateY(-1px);
}

.routerLinksContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 3rem 0 2rem 0;
    position: relative;
    z-index: 10;
    transition: all 0.3s ease;
}

.routerLinks {
    display: flex;
    max-width: 800px;
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    background: var(--bg-secondary);
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

/* Navigation collapsed state */
.nav-collapsed {
    margin: 0;
    order: 2;
    flex: 1;
    max-width: none;
}

.nav-collapsed .routerLinks {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0.5rem 1rem;
    max-width: none;
    width: auto;
    justify-content: center;
}

/* Add padding to body to prevent content from being hidden behind fixed header */
body {
    padding-top: 200px; /* Adjust based on your header height */
}

.header-scrolled ~ * {
    padding-top: 80px; /* Smaller padding when scrolled */
}

@media (max-width: 968px) {
    .header-content {
        padding: 1rem 0;
    }
    
    .header-scrolled .header-content {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .logo-collapsed {
        position: static;
        transform: none;
        order: 1;
    }
    
    .nav-collapsed {
        order: 2;
    }
    
    .header-scrolled .profilePalate {
        order: 3;
    }
}

@media (max-width: 768px) {
    .profilePalate {
        padding: 0 1rem;
        gap: 0.5rem;
    }
    
    .profilePalate a {
        height: 36px;
        width: 36px;
    }
    
    .profilePalate img {
        height: 20px;
        width: 20px;
    }
    
    .logoContainer img {
        max-width: 200px;
        max-height: 100px;
    }
    
    .logo-collapsed img {
        max-width: 50px !important;
        max-height: 35px !important;
    }
    
    .routerLinks {
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0.5rem;
    }
    
    .nav-collapsed .routerLinks {
        flex-direction: row;
        gap: 0.25rem;
        padding: 0.25rem;
    }
    
    .attrFullList h2 {
        font-size: 0.9rem;
        padding: 0.25rem 0.75rem;
    }
}

@media (max-width: 480px) {
    .logo-collapsed {
        left: 1rem;
    }
    
    .profilePalate {
        padding: 0 0.5rem;
    }
    
    .mainName h1 {
        font-size: 2rem;
    }
    
    .nav-collapsed .routerLinks {
        gap: 0.125rem;
    }
}
</style>
    height: 40px;
    width: 40px;
    padding: 0;
    margin-left: 1rem;
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
    height: 24px;
    width: 24px;
    object-fit: contain;
    filter: brightness(0.9);
    transition: filter 0.2s ease;
}

.profilePalate a:hover img {
    filter: brightness(1.2);
}

.namePalate {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 2rem 0;
    opacity: 0.7;
    font-family: 'JetBrains Mono', monospace;
    position: relative;
    z-index: 10;
}

.namePalate h1 {
    margin: 0.25rem 0;
    font-size: clamp(0.7rem, 2vw, 1rem);
    font-weight: 400;
}

.codeName {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0.25rem 0;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.2s ease;
}

.codeName:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--accent-primary);
    transform: translateY(-1px);
}

.attrList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

.actualName {
    font-weight: 600;
    color: var(--accent-secondary);
}

.extraText {
    font-weight: 300;
    color: var(--text-secondary);
}

.logoContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    width: 100%;
    height: 200px;
    margin: 2rem 0;
}

.logoContainer img {
    max-width: 300px;
    max-height: 150px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    transition: transform 0.3s ease;
}

.logoContainer:hover img {
    transform: scale(1.05);
}

.mainName {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    position: relative;
    z-index: 10;
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
    margin-bottom: 1rem;
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
    width: 90%;
    max-width: 600px;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.attrFullList span {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.attrFullList h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--text-secondary);
    background: var(--bg-tertiary);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease;
}

.attrFullList h2:hover {
    color: var(--text-primary);
    border-color: var(--accent-primary);
    transform: translateY(-1px);
}

.routerLinksContainer {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 3rem 0 2rem 0;
    position: relative;
    z-index: 10;
}

.routerLinks {
    display: flex;
    max-width: 800px;
    width: 90%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
    background: var(--bg-secondary);
    padding: 1rem;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
    .Header {
        padding: 1rem 0;
    }
    
    .profilePalate {
        padding: 0 1rem;
        height: 50px;
    }
    
    .profilePalate a {
        height: 36px;
        width: 36px;
        margin-left: 0.5rem;
    }
    
    .profilePalate img {
        height: 20px;
        width: 20px;
    }
    
    .logoContainer {
        height: 120px;
        margin: 1rem 0;
    }
    
    .logoContainer img {
        max-width: 200px;
        max-height: 100px;
    }
    
    .routerLinks {
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem 0.5rem;
    }
    
    .namePalate {
        margin: 1rem 0;
        padding: 0 1rem;
    }
    
    .codeName {
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        margin: 0.125rem 0;
    }
    
    .attrFullList h2 {
        font-size: 0.9rem;
        padding: 0.25rem 0.75rem;
    }
}

@media (max-width: 480px) {
    .routerLinks {
        width: 95%;
        margin: 0 auto;
    }
    
    .mainName h1 {
        font-size: 2rem;
    }
    
    .namePalate {
        display: none;
    }
}
</style>
