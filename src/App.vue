<template>
    <div id="app">
        <Header id="baseHeader" />
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: "Home",
    components: {
        Header,
    },
    created() {
        this.$globalData = {};
        this.$globalData["headerSelection"] = "about";
    }
}
</script>


<style>
#app {
    padding: 0;
    min-height: 100vh;
    background: var(--bg-primary);
}

/* Ensure page content doesn't get hidden behind fixed header */
.about, .CV, .researchProjects, .personalProjects {
    padding-top: 120px; /* Account for fixed header height */
}

@media (max-width: 968px) {
  .about, .CV, .researchProjects, .personalProjects {
    padding-top: 160px; /* Increase padding for larger mobile header */
  }
}

@media (max-width: 768px) {
  .about, .CV, .researchProjects, .personalProjects {
    padding-top: 180px; /* Further increase for smaller screens */
  }
}

@media (max-width: 480px) {
  .about, .CV, .researchProjects, .personalProjects {
    padding-top: 200px; /* Maximum padding for very small screens */
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: 500;
  color: var(--text-primary);
  transition: color 0.2s ease;
}

#nav a:hover {
  color: var(--accent-primary);
}

#nav a.router-link-exact-active {
  color: var(--accent-primary);
}

.wrapper {
    width: 100%;
    min-height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Global utility classes */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-primary {
  background: var(--accent-primary);
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.btn-secondary:hover {
  background: var(--border-color);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
  
  .card {
    padding: 1.5rem;
  }
}
</style>
