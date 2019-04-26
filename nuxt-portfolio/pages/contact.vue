<template>
    <div class="contact">
         <BaseHero
            full
            decorator>
            <template v-slot:default>
                <div class="columns">
                    <div class="column is-two-thirds">
                        <h1>
                            Contact<br /> &amp; Discuss
                        </h1>
                        <p>Do you have something you want to discuss? Reach out to me at <a href="mailto:hello@mikemattner.com">hello@mikemattner.com</a>.</p>
                    </div>
                </div>
            </template>
        </BaseHero>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  transition: 'fade',
  head() {
    return {
      titleTemplate: `Contact – %s`,
    };
  },
};
</script>
