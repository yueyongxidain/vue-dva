export default ({
    namespaced: true,
    state: {
        count: 0
    },
    getters: {
        getState(state) {
            return state
        }
    },
    mutations: {
        save(state, newState) {
            for (let [key, val] of Object.entries(newState)) {
                state[key] = val;
            }
        }
    },
    actions: {
        //ajax请求
    }
});