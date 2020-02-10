import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home.vue'
import Login from '@/views/Home/Login.vue'
import Signup from '@/views/Home/Signup.vue'

// Member routes
import IndexMember from '@/views/Member/Index.vue';
import MemberHome from '@/views/Member/Home.vue';
import MemberMap from '@/views/Member/Map.vue';
import MemberCatalog from '@/views/Member/Catalog.vue';

// Provider routes
import IndexProvider from '@/views/Provider/Index.vue';
import ProviderHome from '@/views/Provider/Home.vue';
import ProviderValidate from '@/views/Provider/Validate.vue';
import ProviderCatalog from '@/views/Provider/Catalog.vue';
import ProviderHistory from '@/views/Provider/History.vue';
import ProviderMap from '@/views/Provider/Map.vue';

// Provider Catalog
import CatalogProducts from './views/Provider/CatalogOptions/Products.vue';
import CatalogPromotions from './views/Provider/CatalogOptions/Promotions.vue';


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/member',
      name: 'member',
      component: IndexMember,
      children: [
        {
          path: '/home',
          name: 'member-home',
          component: MemberHome
        },
        {
          path: '/catalog',
          name: 'member-catalog',
          component: MemberCatalog
        },
        {
          path: '/map',
          name: 'member-map',
          component: MemberMap
        }
      ]
    },
    {
      path: '/provider',
      name: 'provider',
      component: IndexProvider,
      children: [
        {
          path: '/provider-home',
          name: 'provider-home',
          component: ProviderHome
        },
        {
          path: '/provider-validate',
          name: 'provider-validate',
          component: ProviderValidate
        },
        {
          path: '/provider-catalog',
          name: 'provider-catalog',
          component: ProviderCatalog,
          children: [
            {
              name: 'provider-catalog-product',
              path: 'products',
              component: CatalogProducts
            },
            {
              name: 'provider-catalog-promo',
              path: 'promotions',
              component: CatalogPromotions
            }
          ]
        },
        {
          path: '/provider-history',
          name: 'provider-history',
          component: ProviderHistory
        },
        {
          path: '/provider-map',
          name: 'provider-map',
          component: ProviderMap
        },
      ]
    }
  ]
})
