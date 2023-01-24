import { createStore } from "vuex";
import axios from 'axios'
import assetModule from "./modules/assets";
import categoryModule from "./modules/category";
import auth from "./modules/AuthModule"


const store = createStore({
  modules: {
    assets: assetModule,
    category: categoryModule,
    auth 
  },
  
})

export default store
