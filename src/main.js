import Vue from 'vue';
import App from './App.vue';
import {
    Button,
    Dialog,
    Container,
    Main,
    Header,
    Aside,
    menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Breadcrumb,
    BreadcrumbItem,
    Tag,
    Form,
    FormItem,
    Input,
    Select,
    Switch,
    DatePicker,
    Option,
    Table,
    TableColumn,
    Pagination,
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/less/index.css';

import router from './router';
import store from './store';
import http from 'axios';
import './api/mock.js';

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Dialog);

Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Option);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);

Vue.prototype.$http = http;

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app');
