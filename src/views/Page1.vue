<template>
<div>
  <current-time></current-time>
  <task-input @add-task="addNewTask"></task-input>
  <div class='col-9 center'>
      <div class='cardBox'>
        <div class='container'>
          <h2>My Tasks</h2>
          <hr /> 
          <div class="col-4">
            <input 
              v-model="hideDone"
              type="checkbox"
              id="hideDone"
              name="hideDone"
            />
            <label for="hideDone">
              Hide Done Tasks
            </label>
          </div>
          <div class="col-4">
            <input 
              v-model="reverse"
              type="checkbox"
              id="reverse"
              name="reverse"
            />
            <label for="reverse">
              Reverse Order
            </label>
          </div>
          <div class="col-4">
            <input 
              v-model="sortById"
              type="checkbox"
              id="sortById"
              name="sortById"
            />
            <label for="sortById">
              Sort By Id
            </label>
          </div>
          <ul class='taskList'>
            <li 
              v-for='(taskItem, index) in displayList'
              :key='`${index}_${Math.random()}`'
              :class="taskItem.finishedAt ? 'taskDone' : ''"
            >
              <input type='checkbox' 
                :checked='!!taskItem.finishedAt' 
                @input='changeStatus(taskItem.id)'
              /> 
             # {{taskItem.id}} - {{ taskItem.task }} 
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
    hideDone: false,
    reverse: false,
    sortById: false,
  }),
  computed: {
    baseList() {
      return [...this.taskList]
        .map((t, index) => ({
            ...t,
            id: index + 1
          }));
    },
    filteredList() {
      return this.hideDone? [...this.baseList].filter(t => !t.finishedAt):[...this.baseList]
    },
    sortedList() {
      return [...this.filteredList].sort((a,b)=>
      (this.sortById? b.id - a.id: (a.finishedAt || 0)-(b.finishedAt || 0)))
    },
    displayList() {
      const taskList =  [...this.sortedList];
      return this.reverse? taskList.reverse(): taskList;
    }
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
  const task = this.taskList[taskIndex-1];
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
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 5px 10px;
    list-style: none;
  }
.center{
 margin-left: 12%;
}
@keyframes colorChange {
    from{
      background-color: inherit;
    }
    to{
      background-color: rgba(0, 160, 24, 0.577); 
    }
  }
  .taskList li:nth-child(even){
    background-color: rgba(0,0,0,0.05);
  }

  .taskList li.taskDone{
    animation: colorChange 5s ease;
    background-color: rgba(0, 160, 24, 0.577);
  }

</style>