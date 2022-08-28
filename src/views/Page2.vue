<template>
    <div>
      <card-component   mainText="to jest text dla częsci def" >
       
        <template v-slot:media>
          <img src="https://via.placeholder.com/350x150" alt="obrazek">
        </template>
        <p>Main Section</p>
        <template v-slot:action>
          <button>Action Button</button>
          <button>Action Button</button>
        </template>
      </card-component>
      <card-component>
        <template v-slot:header>
          <strong>Card Title</strong><br>
          <span>Card Sub-Title</span>
        </template>
        <template v-slot:media>
          <img src="https://via.placeholder.com/350x150" alt="obrazek">
        </template>
        <p>Main Section</p>
        <template v-slot:action>
          <button>Action Button</button>
          <button>Action Button</button>
        </template>
      </card-component>
      <card-component>
        <template v-slot:header>
          <strong>Card Title</strong><br>
          <span>Card Sub-Title</span>
        </template>
        <template v-slot:media>
          <img src="https://via.placeholder.com/350x150" alt="obrazek">
        </template>
        <p>Main Section</p>
        <template v-slot:action>
          <button>Action Button</button>
          <button>Action Button</button>
        </template>
      </card-component>
      <card-component>
        <template v-slot:header>
          <strong>Card Title</strong><br>
          <span>Card Sub-Title</span>
        </template>
        <template v-slot:media>
          <img src="https://via.placeholder.com/350x150" alt="obrazek">
        </template>
        <p>Main Section</p>
        <template v-slot:action>
          <button>Action Button</button>
          <button>Action Button</button>
        </template>
      </card-component>
    
    </div>
  </template>

<script>
import CardComponent from "../components/CardComponent.vue"; 

export default{
name: 'Page2',
components: {CardComponent},


}

  </script>