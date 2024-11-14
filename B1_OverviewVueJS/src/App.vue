<script setup>
// import { ref } from 'vue'
// Java script => JS (logic )
const number = 5
// const number1 = ref(5)
const button = '<button class="btn">Click me</button>'
const table = `<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>`
const classButton = 'btn btn-button'
const idButton = 'button'
// Function JS co ban
function test() {
  console.log('Test 123')
}
// Function ES5, ES6: arrow function: lamda (=>)
const test1 = () => {
  // noi dung cua ham
  console.log('test 123 - arrow function')
}
</script>
<template>
  <div>
    <!-- HTML -->
    <h1>Buoi 1 - Gioi thieu ve vue js</h1>
    <!-- Cu phap noi suy van ban: {{ giatri }} -->
    <p>{{ number }}</p>
    <!-- Nhung HTML  -->
    <div>{{ button }}</div>
    <!-- Tat ca cac directive trong vuejs: deu bat dau bang v -->
    <!-- v-html: Nhung ca doan 1 bien html tu ben ngoai vao -->
    <div v-html="button"></div>
    <div v-html="table"></div>
  </div>
  <div>
    <h1>Data binding - Binding du lieu</h1>
    <!--
    C1: v-bind:class/id
     C2: :id / :class
     -->
    <button v-bind:id="idButton" v-bind:class="classButton">Click me 1</button>
    <button :id="idButton" :class="classButton">Click me 2</button>
    <!-- Su kien
     C1: v-on:ten sk => v-on:click, v-on:change ....
     C2: @click, @change
     -->
    <button v-on:click="test">Click 3</button>
    <button @click="test1">Click 4</button>
  </div>
  <div>
    <h1>Nhung boostrap</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <button type="button" class="btn btn-outline-primary">Primary</button>
    <button type="button" class="btn btn-outline-secondary">Secondary</button>
    <button type="button" class="btn btn-outline-success">Success</button>
    <button type="button" class="btn btn-outline-danger">Danger</button>
    <button type="button" class="btn btn-outline-warning">Warning</button>
    <button type="button" class="btn btn-outline-info">Info</button>
    <button type="button" class="btn btn-outline-light">Light</button>
    <button type="button" class="btn btn-outline-dark">Dark</button>
  </div>
</template>
<style>
/*  Chua CSS */
</style>
<!-- Reactivity (Phan ung trong Vue JS), Ref, Reactive, For
 DOM: Dom that, Dom ao
 -->
<!-- Vue => Vue 3
 Option API : export default data/method => viet kieu cu
 Composition API
  -->
<!-- Single File Component (SFC)
 => Trong cung 1 vue js: vua chua logic , vua chua css, vua html
 angular (FW JS): 1 component ( 4 file: moi file 1 nhiem vu)
 1 JS(TS) => Code logic
 1 HTML => Code giao dien
 1. CSS/SCSS : lam dep giao dien
 1 file UT
 => Phan tan
 Vue JS : 1 file ( chua tat ca )
 Cu phap co ban:
 Noi suy van ban :
 request.setAttribute("a",,listSinhVien);
 => JSP: ${}
 Vue: {{}}
   -->
