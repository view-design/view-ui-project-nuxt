import ViewUIPlus from 'view-ui-plus'
// import ViewUIPlus from '../../ViewUIPlus/src/index.js' // local testing

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ViewUIPlus, { transfer: true })
})