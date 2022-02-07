import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Avatar from 'primevue/avatar'
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import Message from 'primevue/message';
import Card from 'primevue/card';
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Badge from 'primevue/badge';

export default defineNuxtPlugin(nuxtApp =>{
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.component('pAvatar', Avatar);
    nuxtApp.vueApp.component('pPanel', Panel);
    nuxtApp.vueApp.component('pButton', Button); 
    nuxtApp.vueApp.component('pMessage', Message); 
    nuxtApp.vueApp.component('pCard', Card); 
    nuxtApp.vueApp.component('pSplitter', Splitter); 
    nuxtApp.vueApp.component('pSplitterPanel', SplitterPanel); 
    nuxtApp.vueApp.component('pBadge', Badge); 
})