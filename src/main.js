import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import locale from "element-plus/lib/locale/lang/zh-cn"; // 中文语言
import SvgIcon from '@/components/SvgIcon'
import elementIcons from '@/components/SvgIcon/svgicon'

import App from "./App.vue";
import store from "./stores";
import router from "./router";

import "./styles/index.scss";

const app = createApp(App);

app.use(createPinia());
app.use(store);
app.use(router);
app.use(elementIcons)
app.component('svg-icon', SvgIcon)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
    size: "default",
});

app.mount("#app");
