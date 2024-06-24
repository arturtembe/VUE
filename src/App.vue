<template>
  <router-view/>
</template>

<style>

/*
@import url(
"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
*/
@font-face {
  font-family: "Poppins";
  src: url('~@/assets/fonts/Poppins/Poppins-Regular.ttf') format('ttf'),
  url('~@/assets/fonts/Ubuntu/Ubuntu-Bold.ttf') format('ttf');
  font-weight: 700;
  font-style: normal;
  /* src: url("/src/assets/fonts/Ubuntu/Ubuntu-Bold.ttf"); */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    font-family: "Poppins", sans-serif,Avenir, Helvetica, Arial;
    text-decoration: none;
}

:root {
    --background-color1: #fafaff;
    --background-color2: #ffffff;
    --background-color3: #ededed;
    --background-color4: #cad7fda4;
    --primary-color: #4b49ac;
    --secondary-color: #0c007d;
    --Border-color: #3f0097;
    --one-use-color: #3f0097;
    --two-use-color: #5500cb;
}

/* #app {
  
} */



</style>
