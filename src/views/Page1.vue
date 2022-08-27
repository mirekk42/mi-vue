<template>
<div>
  <div class='cardBox'>
    <div class='container'>
      <h2>Today is:</h2>
      <h3>{{ getCurrentDate }}</h3>
    </div>
  </div>

   <div class='cardBox'>
    <div class='container tasker'>
      <strong>My task is: {{ task }}</strong><br>
      <input 
        type='text'
        v-model='task'
        class='taskInput' />
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'CurrentTime',
  
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
  data: () => ({
    task: 'wpisz swoj task ',
  }),
};
</script>

<style scoped>
.cardBox{
max-width: 100%;
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
</style>