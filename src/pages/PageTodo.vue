<template>
  <q-page class="q-pa-md">
    <q-list
	separator
	 bordered >

      <q-item  
	  v-for="task in tasks"
	  :key="task.id"
	  @click="task.completed=!task.completed"
	  :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
	  clickable
	  v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label 
		  :class="{ 'text-strikethrough': task.completed }"
		  >{{ task.name }}</q-item-label>
        </q-item-section>
		<q-icon 
		name="event"
		size="18px"
		/>
		 <q-item-section side top>
			 <div class="row"> 
				 <div class="col">
					<q-item-label caption>{{ task.dueDate }}</q-item-label>
		   			<q-item-label caption><small>{{ task.dueTime }}</small></q-item-label>
				 </div>
				 </div>
        </q-item-section>
		
         
      </q-item>
 </q-list>
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
		  dueTime: '18:30',
		  completed: false
        },
        {
          id: 2,
          name: 'Get Bananas',
          dueDate: '2020/02/22',
          dueTime: '12:30',
		  completed: false
        },
        {
          id: 3,
          name: 'Get Apples',
          dueDate: '2020/01/11',
          dueTime: '16:30',
		  completed: false
        }
      ]
			}
		}
	}
</script>

<style>
	
</style>
