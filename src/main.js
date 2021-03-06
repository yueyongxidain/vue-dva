import Vue from 'vue'
import App from './App.vue'
import A from './store/createUrlStore.js'
import {
  Container, Header, Main, Button, Aside, Footer, DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Image,
  Avatar,
  Row,
  Col,
  Tooltip,
  Card
} from 'element-ui'
Vue.config.productionTip = false
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Image);
Vue.use(Avatar);
Vue.use(Row);
Vue.use(Col);
Vue.use(Tooltip);
Vue.use(Card);
new Vue({
  router: A.router, store: A.store,
  render: h => h(App)
}).$mount('#app')
