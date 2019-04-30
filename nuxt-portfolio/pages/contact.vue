<template>
    <div class="contact">
         <BaseHero
            full
            decorator>
            <template v-slot:default>
                <div class="columns">
                    <div class="column is-two-thirds">
                        <h1 v-html="intro.title"></h1>
                        <p v-html="intro.body"></p>
                    </div>
                </div>
            </template>
        </BaseHero>
    </div>
</template>

<script>
import {intro} from '~/data/contact.yaml';

export default {
  name: 'Contact',
  transition: 'fade',
  data() {
    return {
      intro,
    }
  },
  head() {
    return {
      titleTemplate: `Contact – %s`,
    };
  },
};
</script>
