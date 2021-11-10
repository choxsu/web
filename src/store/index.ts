import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
// vuex状态持久化
import createPersistedState from "vuex-persistedstate"
// 为 store state 声明类型
export interface State {
    count: number
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()


export const store = createStore<State>({
    plugins: [createPersistedState({ storage: window.localStorage })],
    state() {
        return {
            count: 0
        }
    },
    mutations: {
        // 累加功能
        increment(state) {
            state.count++
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}