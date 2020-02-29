import Vue from 'vue'
import { uid } from 'quasar'

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
    },
    addTask(state, payload){
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({commit}, id){
        commit('deleteTask', id);
    },
    addTask({commit}, task){
        let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        } 
        commit('addTask', payload);
    }
}

const getters = {
    tasksTodo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            console.log(task)
            if(!task.completed){
                tasks[key]=task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            console.log(task)
            if(task.completed){
                tasks[key]=task
            }
        })
        return tasks
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}