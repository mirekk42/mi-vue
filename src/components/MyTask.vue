<template>
   <div class='cardBox'>
    <div class='container tasker'>
      <strong>My task is: {{ task }}</strong><br>
      <input 
        type='text'
        v-model='task'
        class='taskInput' 
        :class="v$.task.$error ? 'fieldError' : ''" />
        <div v-if="this.v$.task.$error">Name field has an error.</div>
        <button v-on:click='addTask'> Add Task </button>
    </div>
   </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required,minLength } from '@vuelidate/validators'


export default{
setup () {
    return { v$: useVuelidate() }
  },
name : 'TaskInput',
data: () => ({
    task: 'wpisz...',
  }),
methods: {
    addTask(){
      this.v$.$touch();
      if(this.v$.task.$error) return false
      this.$emit('add-task', this.task);
      this.task = '';
      this.v$.task.$reset();
      return true
    },
  },
   validations () {
    return {
      task: {required,minLength: minLength(5) } 
      }
    }
}

</script>

<style>
.cardBox{
max-height: 25%;
text-align: center;
}
.tasker{
    margin: 20px;
    font-size: xx-large;
  }
  .tasker .taskInput {
    font-size: 14px;
    margin: 0 10px;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.75);
  }
  .tasker button {
    border: 1px solid rgba(0, 0, 0, 0.75);
    border-radius: 3px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  }
  .fieldError {
  border: 2px solid red !important;
  color: red;
  border-radius: 3px;
}

</style>