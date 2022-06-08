import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import './index.css';
import store from './store'

// store.subscribe( (mutation, state) => {
//     localStorage.setItem('tasks', JSON.stringify(state.tasks));  
//   }
// )


const app = createApp(App);

app.use(router);

app.use(store);

app.mount("#app");
