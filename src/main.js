import { createApp } from "vue";
import App from "./App.vue";

import "primevue/resources/themes/saga-blue/theme.css"; // theme
import "primevue/resources/primevue.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import "@/assets/css/style.css";
import InputNumber from "primevue/inputnumber";

const app = createApp(App);
app.use(InputNumber);

app.mount("#app");
