import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ViewUIPlus, { transfer: true })
})