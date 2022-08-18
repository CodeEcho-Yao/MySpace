import { createStore } from 'vuex'
import ModuleUser from './user'

export default createStore({
  state: {        // 存储所有数据，可以用modules属性划分成若干模块
  },
  getters: {      // 根据state中的值计算新的值
  },
  mutations: {    // 所有对state的修改操作都需要定义在这里，不支持异步，可以通过$store.commit()触发
  },
  actions: {      // 定义对state的复杂修改操作, 支持异步, 可以通过$store.dispatch()触发 注意不能直接修改state, 只能通过mutations修改state
  },
  modules: {      // 定义state的子模块
    user: ModuleUser
  }
})
