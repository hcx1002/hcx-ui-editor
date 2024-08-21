import "./assets/main.css";
import { createApp, type Component } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import "element-plus/dist/index.css";
import "@/assets/main.css";
import "@/assets/iconfont/iconfont.css";
import "@/assets/iconfont/iconfont.js";

const app = createApp(App);

// 动态导入所有组件
const components = import.meta.glob("/src/components/**/*.vue");

// 注册所有组件
Object.entries(components).forEach(async ([filePath, component]) => {
  // 提取组件名称
  //@ts-ignore
  const match = filePath.match(/([^/]+)\/[^/]+\.vue$/);
  if (match) {
    const componentName = match[1];
    // 注册组件
    const importedComponent = (await component()) as any;
    app.component(componentName, importedComponent.default);
  }
});
//注册所有ElementPlusIconsVue图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
