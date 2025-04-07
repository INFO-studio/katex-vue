import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
export default {
    ...DefaultTheme,
    NotFound: () => "404",
    enhanceApp({ app, router, siteData }) {
        app.use(ElementPlus);
    },
};