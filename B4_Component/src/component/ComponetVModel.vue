<template>
  <h1>Component V Model - Two way binding Cha & Con</h1>
  Email: <input type="text" v-model="email1" />
  <br />
  Username: <input type="text" v-model="username1" />
  <br />
  <p>Gia tri component con: {{ username1 }} - {{ email1 }}</p>
</template>
<script setup>
const email1 = defineModel('u2')
const username1 = defineModel('u1')
</script>
