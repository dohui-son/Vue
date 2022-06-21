import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.ts'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
