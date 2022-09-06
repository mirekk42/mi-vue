<template>
    <div class="cardBox" :class="cardElevation">
    <div class="section">
    This is a Material Card Box
    </div>
   
    <div v-if="showHeader" class="header">
         <slot v-if="$slots.header" name="header" />
         <div v-else>
           <h1 class="cardHeader cardText"> {{header}}  </h1>
           <h2 class="cardSubHeader cardText"> {{subHeader}} </h2>
         </div>
    </div>
   
    <div v-if="showMediaContent" class="media">
         <slot v-if="$slots.media" name="media" />
         <img v-else :src="imgSrc"  alt="obrazek">
   </div>
   
   <div v-if="showMainContent" 
   class="section cardText" 
   :class="{ noBottomPadding: $slots.action,  halfPaddingTop: $slots.media,  }" >
         <slot v-if="$slots.default" />
         <p v-else class="cardText"> {{ mainText }} </p>
   </div>
   <div v-if="$slots.action" class="action" >
      <slot name="action" />
   </div>
    
    </div>
   
   </template>
   
   <script>
     export default {
      name: 'CartComponent',
      props: {
    header: {
      type: String,
      required: false,
      default: 'glowa',
      validator: v => typeof v === 'string',
    },
    subHeader: {
      type: String,
      required: false,
      default: 'nagł',
      validator: v => typeof v === 'string',
    },
    
    mainText: {
      type: String,
      required: false,
      default: '',
      validator: v => typeof v === 'string',
    },
    showMedia: {
      type: Boolean,
      required: false,
      default: true,
      validator: v => typeof v === 'boolean',
    },
    imgSrc: {
      type: String,
      required: false,
      default: '',
      validator: v => typeof v === 'string',
    },
    showActions: {
      type: Boolean,
      required: false,
      default: false,
      validator: v => typeof v === 'boolean',
    },
    elevation: {
      type: Number,
      required: false,
      default: 2,
      validator: v => typeof v === 'number',
    },
  },
  computed: {
    showMediaContent() {
      return (this.$slots.media || this.imgSrc) && this.showMedia;
    
    },
    showHeader() {
      return this.$slots.header || (this.header || this.subHeader);
    },
    showMainContent() {
      return this.$slots.default || this.mainText;
    },
    cardElevation() {
      return `elevation_${parseInt(this.elevation, 10)}`;
    },
  }
};
    
   
   </script>
   
   <style scoped>
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
    @import '../assets/elevation.css';
    @import '../assets/cardStyles.css';
   
    *{
       font-family: 'Roboto', sans-serif;
     }
     .cardBox{
         width: 100%;
     max-width: 300px;
       background-color: #fff;
       position: relative;
       display: inline-block;
       border-radius: 0.25rem;
     }
     .cardBox > .section {
       padding: 1rem;
       position: relative;
     }
   .cardBox > .header {
     padding: 1rem;
     position: relative;
     display: block;
   }
   .cardBox > .media {
     overflow: hidden;
     position: relative;
     display: block;
     max-width: 100%;
   }
   .cardBox > .action {
     padding: 0.5rem;
     position: relative;
     display: block;
   }
   .cardBox > .action > *:not(:first-child) {
     margin-left: 0.4rem;
   }
   .noBottomPadding {
     padding-bottom: 0 !important;
   }
   .halfPaddingTop {
     padding-top: 0.5rem !important;
   }
   </style>