import axios from 'axios';
import MockAdpater from 'axios-mock-adapter';

var mock=new MockAdpater(axios);

// 模拟任意GET请求到 /users 
//reply的参数为 (status, data, headers) 
mock.onGet('/sidemenus').reply(200, 
     [{
        text: '首页',
        name: 'home'
    },{
        text: '客户管理',
        name: 'crm'
    }, {
        text: '门店管理',
        name: 'store'
    }, {
        text: '服务管理',
        name: 'service'
    }, {
        text: '采购管理',
        name: 'purchase'
    }, {
        text: '库存管理',
        name: 'stock'
    },
    {
        text: '基础管理',
        name: 'base'
    },
    {
        text: '设置',
        name: 'setting'
    }]
  );