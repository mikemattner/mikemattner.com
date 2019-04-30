<template>
    <div class="brand-logo">
        <svg class="brand-logo__image" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
            <circle class="circle-shape" cx="256" cy="256" r="255"/>
            <path class="logo-shape" d="M415.7,90.8c-4-1.7-9-0.7-12,2.3L255.7,240.6L107.9,93.1c-3.1-3.1-7.5-4-11.5-2.3c-4,1.7-6.4,5.6-6.4,9.9v310.6
                c0,4.3,2.4,8.2,6.4,9.9c1.3,0.6,2.6,0.8,4,0.8c2.8,0,5.5-1.1,7.5-3.1l147.7-147.5l147.7,147.5c2,2,4.8,3.1,7.6,3.1
                c1.4,0,3.5-0.3,4.8-0.8c4-1.7,7.3-5.6,7.3-9.9V100.7C423,96.4,419.7,92.5,415.7,90.8z M113,385.5V126.5L242.7,256L113,385.5z
                 M400,385.5L270.3,256L400,126.5V385.5z"/>
        </svg>
        <div v-if="label == true" class="brand-logo__type">
            Mike Mattner
        </div>
    </div>
</template>

<script>
export default {
  name: 'BrandLogo',
  props: {
    label: Boolean,
  },
};
</script>

<style scoped lang="scss">
    .brand-logo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow: hidden;
        transition: all 0.25s ease-in-out;
        color: #fff;

        &__image {
            height: 1.75rem;
            width: 1.75rem;
            z-index: 10;

            .circle-shape {
                fill: #fff;
                transition: all 0.25s ease-in-out;
            }
            .logo-shape {
                fill: rgba(39,47,52,1.0);
                transition: all 0.25s ease-in-out;
            }
        }

        &__type {
            font-size: 0.75rem;
            margin-left: 0.5rem;
            opacity: 0;
            transition: all 0.125s ease-in-out;
            transform: translateX(-100px);
            color: #fff;
            z-index: 9;
            text-decoration: none;
        }

        &:hover {
            .brand-logo__image {
                .circle-shape {
                    fill: rgba(255,255,255,0);
                }
                .logo-shape {
                    // fill: rgba(255,88,1,1.0);
                    fill: #fff;
                }
            }
            .brand-logo__type {
                opacity: 1;
                transform: translateX(0);
                color: #fff;
            }
        }
    }
</style>
