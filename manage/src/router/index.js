import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import AdmHome from '@/components/admin/Home'
import teachHome from '@/components/teacher/Home'
import Management from '@/components/admin/Management'
import Order from '@/components/admin/Order'
import Finance from '@/components/admin/Finance'
import Mail from '@/components/admin/Mail'
import Staff from '@/components/admin/Staff'
import EditStaff from '@/components/admin/EditStaff'
import EditCourse from '@/components/admin/EditCourse'
import AddStaff from '@/components/admin/AddStaff'
import AddCourse from '@/components/admin/AddCourse'
import Client from '@/components/admin/Client'
import AddClient from '@/components/admin/AddClient'
import Course from '@/components/admin/Course'
import Kaohe from '@/components/admin/Kaohe'
import Yejishezhi from '@/components/admin/Yejishezhi'
import Baobiao from '@/components/admin/Baobiao'
import Fapiao from '@/components/admin/Fapiao'
import Fenqi from '@/components/admin/Fenqi'
import Shoukuan from '@/components/admin/Shoukuan'
import CourseDetail from '@/components/admin/CourseDetail'
import Fapiaoshenhe from '@/components/financial/Fapiaoshenhe'
import ShoukuanFapiao from '@/components/financial/ShoukuanFapiao'
import teacherClient from '@/components/teacher/TeacherClient'
import Login from '@/components/login'



Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/shoukuan',
          name: 'Shoukuan',
          component: Shoukuan,
        },
        {
          path: '/adminHome',
          name: 'AdmHome',
          component: AdmHome,
        },
        {
          path: '/management',
          name: 'Management',
          component: Management,
        },
        {
          path: '/order',
          name: 'Order',
          component: Order,
        },
        {
          path: '/finance',
          name: 'Finance',
          component: Finance,
        },
        {
          path: '/mail',
          name: 'Mail',
          component: Mail,
        },
        {
          path: '/staff',
          name: 'Staff',
          component: Staff,
        },
        {
          path: '/client',
          name: 'Client',
          component: Client,
        },
        {
          path: '/addclient',
          name: 'AddClient',
          component: AddClient,
        },
        {
          path: '/editstaff',
          name: 'EditStaff',
          component: EditStaff,
        },
        {
          path: '/addstaff',
          name: 'AddStaff',
          component: AddStaff,
        },
        {
          path: '/course',
          name: 'Course',
          component: Course,
        },
        {
          path: '/addcourse',
          name: 'AddCourse',
          component: AddCourse,
        },
        {
          path: '/editcourse',
          name: 'EditCourse',
          component: EditCourse,
        },
        {
          path: '/kaohe',
          name: 'Kaohe',
          component: Kaohe,
        },
        {
          path: '/yejishezhi',
          name: 'Yejishezhi',
          component: Yejishezhi,
        },
        {
          path: '/baobiao',
          name: 'Baobiao',
          component: Baobiao,     
        },
        {
          path: '/fapiao',
          name: 'Fapiao',
          component: Fapiao,
        },
        {
          path: '/fenqi',
          name: 'Fenqi',
          component: Fenqi,
        },
        {
          path: '/coursedetail',
          name: 'CourseDetail',
          component: CourseDetail,
        },
        {
          path:'*',
          redirect:'/adminHome',
          component:AdmHome
        }
      ]
    },
    {
      path: '/teacher',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/teacherhome',
          name: 'teachHome',
          component: teachHome,
        },
        {
          path: '/teacherclient',
          name: 'teacherClient',
          component: teacherClient,
        },
      ]
    },
    {
      path: '/financial',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/fapiaoshenhe',
          name: 'Fapiaoshenhe',
          component: Fapiaoshenhe,
        },
        {
          path: '/shoukuanfapiao',
          name: 'ShoukuanFapiao',
          component: ShoukuanFapiao,
        },
        
      ]
    },
    {
      path:'*',
      redirect:'/login',
      component:Index
    }
  ]
})
