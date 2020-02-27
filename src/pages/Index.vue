<template>
  <q-page class="flex flex-center">
    <ul>


      <task 
      v-for="(task, index) in tasks"
      :key="task.id"
      :task="task"
      :index="index"></task>
    </ul>
  </q-page>
</template>

<script>

export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          dueDate: '2019/02/12',
          dueTime: '18:30'
        },
        {
          id: 2,
          name: 'Get Bananas',
          dueDate: '2020/02/22',
          dueTime: '12:30'
        },
        {
          id: 3,
          name: 'Get Apples',
          dueDate: '2020/01/11',
          dueTime: '16:30'
        }
      ]
    }
    },
    methods: {
      deleteTask(index){
        this.tasks.splice(index,1)
      }
      
  },
  components: {
        'task': require('components/Task.vue').default
      }
}
</script>
