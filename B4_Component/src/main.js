import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './component/GlobalComponent.vue'

// createApp(App).mount('#app')
// Dang ky component toan cau => MOI NOI TRONG PROJECT DEU CO THE GOI
// DC COMPONENET MA KHONG CAN PHAI IMPORT
const app = createApp(App)
// BAT BUOC PHAI VIET TREN MOUNT
app.component('ComponentA', GlobalComponent)
app.mount('#app')
