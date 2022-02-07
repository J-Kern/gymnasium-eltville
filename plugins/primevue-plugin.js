import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Card from 'primevue/card';

export default defineNuxtPlugin(nuxtApp =>{
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('pPanel', Panel);
    nuxtApp.vueApp.component('pButton', Button); 
    nuxtApp.vueApp.component('pMessage', Message); 
    nuxtApp.vueApp.component('pCard', Card); 
})