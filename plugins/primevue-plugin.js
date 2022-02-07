import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

export default defineNuxtPlugin(nuxtApp =>{
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('pAvatar', Avatar);
    nuxtApp.vueApp.component('pButton', Button);
})