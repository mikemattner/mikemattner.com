<template>
    <div class="home">
        <BaseHero
            full
            arrow
            decorator>
            <template v-slot:default>
                <div class="columns">
                    <div class="column is-offset-one-quarter is-two-thirds">
                        <img src="@/assets/img/me.jpg" alt="A Picture of me." width="1275" height="1152" class="self-portrait" />
                        <h1>
                            Hello there.
                        </h1>
                        <p>
                            I'm Mike Mattner, a native Michigander working as a UX designer 
                            &amp; developer at Aisle Rocket Studios.
                        </p>
                        <p>
                            I'm @mikemattner on
                            <a href="https://www.linkedin.com/in/mikeamattner/">LinkedIn</a>,
                            <a href="https://twitter.com/mikemattner">Twitter</a>,
                            <a href="https://codepen.io/mikemattner/#">Codepen</a>,
                            &amp; <a href="https://github.com/mikemattner">GitHub</a>.
                        </p>
                    </div>
                </div>
            </template>
        </BaseHero>
        <section class="section section--dark">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <h2 class="decorator">Summary</h2>
                    </div>
                    <div class="column is-one-quarter">
                        <h3>Knowledge</h3>
                        <ul class="list--blank">
                            <li v-for="tech in technical">{{tech}}</li>
                        </ul>
                    </div>
                    <div class="column is-one-quarter">
                        <h3>Software</h3>
                        <ul class="list--blank">
                            <li v-for="software in softwares">{{software}}</li>
                        </ul>
                    </div>
                    <div class="column is-one-quarter">
                        <h3>Skills</h3>
                        <ul class="list--blank">
                            <li v-for="skill in skills">{{skill}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column is-one-quarter">
                        <h2 class="decorator">Brands</h2>
                    </div>
                    <div class="column is-three-quarters">
                        <h3>Agency</h3>
                        <div class="columns">
                            <div class="column is-one-quarter">
                                <ul class="list--blank">
                                    <li v-for="brand in wpcorp" v-html="brand"></li>
                                </ul>
                            </div>
                            <div class="column is-one-quarter">
                                <ul class="list--blank">
                                    <li v-for="brand in other" v-html="brand"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
        skills: ['Front End Development',
                 'Creative Direction',
                 'UX/UI Design',
                 'Creative Strategy',
                 'Git'],
        softwares: ['Figma',
                   'Sublime Text',
                   'VS Code',
                   'iTerm',
                   'Photoshop',
                   'InDesign',
                   'After Effects'],
        technical: ['HTML/CSS',
                    'JavaScropt',
                    'Sass/SCSS',
                    'php',
                    'VueJS',
                    'jQuery',
                    'Gulp',
                    'npm/yarn'],
        wpcorp: ['JennAir<sup>&reg;</sup>',
                 'Whirlpool<sup>&reg;</sup>',
                 'Maytag<sup>&reg;</sup>',
                 'KitchenAid<sup>&reg;</sup>',
                 'Amana<sup>&reg;</sup>',
                 'Gladiator<sup>&reg;</sup>'],
        other: ['Craftsman<sup>&reg;</sup>',
                'Kenmore<sup>&reg;</sup>',
                'UFCU',
                'Stryder',
                'RCBS']
    };
  },
  beforeCreate() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/utils/_variables.scss";
    .home {
        img {
            display: block;
            width: 100%;
            height: auto;
        }
        .hero {
            @media (min-width: $tablet) {
                h1 {
                    margin-left: -5rem;
                }
            }
            .column {
                position: relative;
            }
            .self-portrait {
                margin-top: 4rem;
                border-radius: 40px 4px 40px 4px;
                box-shadow: 0 2px 20px rgba(0, 0, 0, .33);
                transition: all 0.25s ease-in-out;
                &:hover {
                    .self-portrait {
                        box-shadow: 0 4px 30px rgba(0, 0, 0, .4);
                    }
                }
                @media (min-width: $tablet) {
                    margin-top: 0;
                    position: absolute;
                    width: 250px;
                    z-index: -1;
                    top: -5rem;
                    left: -13rem;
                    width: 400px;
                }
            }
        }
        h2 {
            margin-top: 0.25rem;
        }
        .section {
            padding: 4rem 0;
            
            @media (min-width: $tablet) {
                .container {
                    min-height: 60vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            }

            &--dark {
                background-color: rgba(0,0,0,0.25);
            }
        }
    }
</style>
