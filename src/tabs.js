import Vue from 'vue';
import Hello from './components/Hello';
import crmindex from './pages/crm';
import storeindex from './pages/store';
//import stkindex from './pages/stock';
import basindex from './pages/base';
import purindex3 from './pages/purchase';
import srvindex from './pages/service';
import cfgindex from './pages/setting';

//console.log(purindex);
var purindex2=require('./pages/purchase').default;
console.log(purindex2);

const stkindex = resolve => {
    // require.ensure 是 Webpack 的特殊语法, 配置需要分块的文件
    require.ensure(['./pages/stock.vue'], () => resolve(require('./pages/stock.vue')),'stkindex')
};

export default [{
    name: 'home',
    title: '首页',
    component: Hello,
    beforeCreate (tab, next) {
        console.log('before create:', tab)
        next()
    },
    beforeClose (tab, next) {
        console.log('before close', tab)
        next()
    }
}, 
{
    name: 'crm',
    title: '客户管理',
    component: crmindex,
    beforeCreate (tab, next) {
        console.log('before create:', tab)
        next()
    }
}, 
{
    name: 'store',
    title: '门店管理',
    component:storeindex
}, 
{
    name: 'service',
    title: '服务管理',
    component: resolve => {
        setTimeout(() => {
            resolve(srvindex);
        }, 3000)
    }
}, 
{
    name: 'purchase',
    title: '采购管理',
    beforeCreate (tab, next) {
        console.log('before create:', tab)
        next()
    },
    component:  purindex3
},
{
    name: 'stock',
    title: '库存管理',
    component: resolve => require(['./pages/stock.vue'],resolve)
}, 
{
    name: 'base',
    title: '基础管理',
    component: basindex
},
{
    name: 'setting',
    title: '设置',
    component: cfgindex
}]