"use strict";

import Vuex from "vuex";
import Vue from "vue";
import product from "./modules/product";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        purchase: 0.0,
        sale: 0.0,
        balance: 0.0,
    },
    getters,
    mutations,
    actions,
    modules: {
        product,
    }
});