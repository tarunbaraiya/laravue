require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';

window.Vue.use(VueRouter);

import CompaniesIndex from './components/companies/CompaniesIndex.vue';
import CompaniesCreate from './components/companies/CompaniesCreate.vue';
import CompaniesEdit from './components/companies/CompaniesEdit.vue';

const routes = [
    {
        path: '/',
        components: {
            companiesIndex: CompaniesIndex
        }
    },
    {path: 'companies/create', component: CompaniesCreate, name: 'createCompany'},
    {path: 'companies/edit/:id', component: CompaniesEdit, name: 'editCompany'},
];




const router = new VueRouter({
    routes:routes,
});
const app = new Vue({ router }).$mount('#app');