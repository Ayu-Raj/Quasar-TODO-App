import Vue from 'vue'
const state = {
    tasks: {
        'ID1':{
            name: 'Go to shop',
          dueDate: '2019/02/12',
		  dueTime: '18:30',
		  completed: false
        },
        'ID2':{
            name: 'Get Bananas',
                  dueDate: '2020/02/22',
                  dueTime: '12:30',
            	  completed: false
        },
        'ID3':{
            name: 'Get Apples',
                  dueDate: '2020/01/11',
                  dueTime: '16:30',
            	  completed: false
        }
    }
   
}

const mutations = {
    updateTask(state, payload) {
        console.log(payload)
        //copy one obj to another
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks,id)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({commit}, id){
        commit('deleteTask', id);
    }
}

const getters = {
    tasks: (state) => {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}