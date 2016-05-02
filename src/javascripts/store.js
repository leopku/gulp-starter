/*
* @Author: leopku
* @Date:   2016-05-02 13:06:59
* @Last Modified by:   leopku
* @Last Modified time: 2016-05-02 13:16:13
*/

'use strict';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	// TODO: 设置启动状态
	count: 0
}

const mutations = {
	// TODO: set up our mutations
	INCREMENT (state, amount) {
		state.count = state.count + amount
	}
}

export default new Vuex.Store({
	state,
	mutations
})
