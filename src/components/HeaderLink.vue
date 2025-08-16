<template>
    <div class="headerLink">
        <router-link class="routerLink" :to="fullLocation">{{displayText}}</router-link>
        <div class="lineContainer">
            <div v-if="isActiveSignal" />
            <div class="line" :style="lineWidth"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderLink",
    props: ['linkLocation','displayText','selection'],
    computed: {
        fullLocation() {
            return "/" + this.linkLocation;
        },
        lineWidth() {
            return {
                'width': String(this.currentLineWidth) + "px",
            }
        },
        isActiveSignal() {
            let signal = this.selection;
            let verdict = null;

            if (signal == this.linkLocation) {
                verdict = true;
            }
            else {
                verdict = false;
            }

            if (verdict && !this.isActive) {
                this.animateUp();
            }
            if (!verdict && this.isActive) {
                this.animateDown();
            }

            return verdict;
        }
    },
    data() {
        return {
            active: false,
            minWidth: 0,
            maxWidth: 100,
            currentLineWidth: 0, //In px.
            animationDurration: 100, //In milliseconds
            numAnimationSteps: 40,
            isActive: false,
        }
    },
    methods: {
        sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
        },
        async animateUp() {
            let dt = this.animationDurration / this.numAnimationSteps;
            let dW = (this.maxWidth - this.minWidth) / this.numAnimationSteps

            this.currentLineWidth = 0;

            for (let i = 0; i < this.numAnimationSteps; i++) {
                await this.sleep(dt);
                this.currentLineWidth += dW;
            }
            this.isActive = true;
        },
        async animateDown() {
            let dt = this.animationDurration / this.numAnimationSteps;
            let dW = (this.maxWidth - this.minWidth) / this.numAnimationSteps

            this.currentLineWidth = this.maxWidth;

            for (let i = 0; i < this.numAnimationSteps; i++) {
                await this.sleep(dt);
                this.currentLineWidth -= dW;
            }
            this.isActive = false;
        },
    },
}
</script>

<style>
.headerLink {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: transform 0.2s ease;
}

.headerLink:hover {
    transform: translateY(-2px);
}

.routerLink {
    color: var(--text-primary);
    font-weight: 500;
    font-size: 0.95rem;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    background: transparent;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    position: relative;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    white-space: nowrap;
}

.routerLink::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--accent-primary);
    opacity: 0;
    border-radius: 8px;
    transition: opacity 0.2s ease;
    z-index: -1;
}

.routerLink:hover {
    color: white;
    border-color: var(--accent-primary);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.routerLink:hover::before {
    opacity: 1;
}

.routerLink.router-link-active {
    color: white;
    border-color: var(--accent-primary);
    background: var(--accent-primary);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.lineContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4px;
    margin-top: 0.5rem;
    position: relative;
    overflow: hidden;
}

.line {
    height: 3px;
    background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
    border-radius: 2px;
    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
}

@media (max-width: 768px) {
    .routerLink {
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
        min-width: 100px;
    }
    
    .lineContainer {
        height: 3px;
        margin-top: 0.25rem;
    }
    
    .line {
        height: 2px;
    }
}

@media (max-width: 480px) {
    .routerLink {
        padding: 0.5rem 0.75rem;
        font-size: 0.8rem;
        min-width: 80px;
    }
}
</style>
