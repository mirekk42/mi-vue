<template>
<div>
  <current-time></current-time>
  <task-input @add-task="addNewTask"></task-input>
  <div class='col-9 center'>
      <div class='cardBox'>
        <div class='container'>
          <h2>My Tasks</h2>
          <ul class='taskList'>
            <li 
              v-for='(taskItem, index) in displayList'
              :key='`${index}_${Math.random()}`'
            >
              <input type='checkbox' 
                :checked='!!taskItem.finishedAt' 
                @input='changeStatus(index)'
              /> 
              {{ taskItem.task }} 
              <span v-if='taskItem.finishedAt'> || Done at:  {{ formatDate(taskItem.finishedAt) }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import TaskInput from '../components/MyTask.vue'
import CurrentTime from '../components/CurrentTime.vue';




export default {
  name: 'Main',
  components: {TaskInput,CurrentTime},
  data: () => ({
    taskList: [],
  }),
  computed: {
    displayList(){
      return this.taskList;
    },
  },
  methods:{
    addNewTask(task){
      this.taskList.push({
        task,
        createdAt: Date.now(),
        finishedAt: undefined,
      }); 
      alert(`New task added: ${task}`);
    },
     changeStatus(taskIndex){
  const task = this.taskList[taskIndex];
    if(task.finishedAt){
      task.finishedAt = undefined;
    } else {
      task.finishedAt = Date.now();
    }   
   },
      formatDate(value) {
        if (!value) return '';
        if (typeof value !== 'number') return value;

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

        return intlDateTime.format(new Date(value));
      }
}
}
</script>

<style scoped>
.taskList li{
    text-align: left;
  }
.center{
 margin-left: 12%;
}

</style>