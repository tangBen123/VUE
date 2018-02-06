
import foods from '../components/common/foods'
import search from '../components/common/search'
import order from '../components/common/order'
import mine from '../components/common/mine'
import delicacy from '../components/common/delicacy'
import food from '../components/common/food'
import sales from '../components/common/sales'
export default  [
    {
      path: '/foods',
      component:foods,
      children:[
        {
          path:'delicacy',
          component:delicacy
        },
        {
          path:'food',
          component:food
        },
        {
          path:'sales',
          component:sales
        }
      ]
    },
    {
      path: '/footSearch',
      component:search
    },
    {
      path: '/order',
      component:order
    },
    {
      path: '/mine',
      component:mine
    },
    {
      path: "/", redirect: "/foods"
    },
  ]

