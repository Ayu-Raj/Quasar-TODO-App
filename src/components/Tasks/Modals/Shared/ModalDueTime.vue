<template>
  <div 
       
        class="row q-mb-sm">
              <q-input outlined 
              label="Due Time"
              class="col"
              :value="dueTime"
              @input="$emit('update:dueTime', $event)"
              >
                <template v-slot:append>
                    <q-icon 
                v-if="dueTime"
                name="close" @click="$emit('update:dueTime', '')"
                class="cursor-pointer"/> 
                <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time 
                    @input="$emit('update:dueTime', $event)"
                    :value="dueTime" />
                    </q-popup-proxy>
                </q-icon>
                 
                </template>
            </q-input>
        </div> 
</template>

<script>
export default {
    props: ['dueTime', 'dueDate']
}
</script>

<style>

</style>