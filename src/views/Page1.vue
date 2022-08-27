<template>
<div>
<div>
  <div class='cardBox'>
    <div class='container'>
      <h2>Today is:</h2>
      <h3>{{ getCurrentDate }}</h3>
    </div>
  </div>
  </div>
  <task-input @add-task="addNewTask"></task-input>
</div>
</template>

<script>
import TaskInput from '../components/MyTask.vue'


export default {
  name: 'CurrentTime',
  components: {TaskInput},
   methods:{
    addNewTask(task){
      alert(`New task added: ${task}`);
    },
  },
  computed: {
    getCurrentDate() {
      const browserLocale =
        navigator.languages && navigator.languages.length
          ? navigator.languages[0]
          : navigator.language;
      const intlDateTime = new Intl.DateTimeFormat(
        browserLocale, 
        {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric'
        });

      return intlDateTime.format(new Date());
    }
  },
};
</script>

<style scoped>
.cardBox{
max-width: 100%;
max-height: 25%;
text-align: center;
}

</style>