<template>
<div class="box">
  <current-time></current-time>
  <task-input @add-task="addNewTask"></task-input>
</div>
</template>

<script>
import TaskInput from '../components/MyTask.vue'
import CurrentTime from '../components/CurrentTime.vue'

export default {
  name: 'Main',
  components: { TaskInput, CurrentTime },
   methods:{
    addNewTask(task){
      alert(`New task added: ${task}`);
    },
  },
};
</script>
<style>
.box{
 max-width: 100%;
 display: block;
}
</style>