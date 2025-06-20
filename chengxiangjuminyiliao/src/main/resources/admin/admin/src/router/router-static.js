import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import bingli from '@/views/modules/bingli/list'
    import bingren from '@/views/modules/bingren/list'
    import dictionary from '@/views/modules/dictionary/list'
    import gonggao from '@/views/modules/gonggao/list'
    import yaopin from '@/views/modules/yaopin/list'
    import yaopinruku from '@/views/modules/yaopinruku/list'
    import yaopinshiyong from '@/views/modules/yaopinshiyong/list'
    import yisheng from '@/views/modules/yisheng/list'
    import yishengChat from '@/views/modules/yishengChat/list'
    import yishengGuahao from '@/views/modules/yishengGuahao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryBingli from '@/views/modules/dictionaryBingli/list'
    import dictionaryBingren from '@/views/modules/dictionaryBingren/list'
    import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
    import dictionaryKeshi from '@/views/modules/dictionaryKeshi/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryYaopin from '@/views/modules/dictionaryYaopin/list'
    import dictionaryYishengChat from '@/views/modules/dictionaryYishengChat/list'
    import dictionaryYishengGuahao from '@/views/modules/dictionaryYishengGuahao/list'
    import dictionaryZhiwei from '@/views/modules/dictionaryZhiwei/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBingli',
        name: '状态',
        component: dictionaryBingli
    }
    ,{
        path: '/dictionaryBingren',
        name: '病人类型',
        component: dictionaryBingren
    }
    ,{
        path: '/dictionaryGonggao',
        name: '医院资讯类型',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryKeshi',
        name: '科室',
        component: dictionaryKeshi
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryYaopin',
        name: '药品类型',
        component: dictionaryYaopin
    }
    ,{
        path: '/dictionaryYishengChat',
        name: '数据类型',
        component: dictionaryYishengChat
    }
    ,{
        path: '/dictionaryYishengGuahao',
        name: '挂号状态',
        component: dictionaryYishengGuahao
    }
    ,{
        path: '/dictionaryZhiwei',
        name: '职位',
        component: dictionaryZhiwei
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/bingli',
        name: '病例',
        component: bingli
      }
    ,{
        path: '/bingren',
        name: '病人',
        component: bingren
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/gonggao',
        name: '医院资讯',
        component: gonggao
      }
    ,{
        path: '/yaopin',
        name: '药品',
        component: yaopin
      }
    ,{
        path: '/yaopinruku',
        name: '药品入库',
        component: yaopinruku
      }
    ,{
        path: '/yaopinshiyong',
        name: '药品使用',
        component: yaopinshiyong
      }
    ,{
        path: '/yisheng',
        name: '医生',
        component: yisheng
      }
    ,{
        path: '/yishengChat',
        name: '医生咨询',
        component: yishengChat
      }
    ,{
        path: '/yishengGuahao',
        name: '医生挂号',
        component: yishengGuahao
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
