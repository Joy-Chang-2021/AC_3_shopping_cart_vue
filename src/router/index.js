import Vue from 'vue'
import VueRouter from 'vue-router'
import ShoppingCart from '../views/ShoppingCart.vue'
import CartFormI from '../components/CartFormI.vue'
import CartFormII from '../components/CartFormII.vue'
import CartFormIII from '../components/CartFormIII.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/shoppingcart'
  },
  {
    path: '/shoppingcart',
    name: 'shopping-cart',
    component: ShoppingCart,
    children: [
      {
        path: '',
        redirect: { name: 'form1' }
      },
      {
        path: 'form1',
        name: 'form1',
        component: CartFormI
        
      },
      {
        path: 'form2',
        name: 'form2',
        component: CartFormII
      },
      {
        path: 'form3',
        name: 'form3',
        component: CartFormIII
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
