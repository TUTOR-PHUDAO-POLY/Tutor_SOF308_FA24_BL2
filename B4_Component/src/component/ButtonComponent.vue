<template>
  <h1>Day la component con</h1>
  <!-- <p>{{ propValue.message1 }}</p> -->
  <!-- <span>Con</span> -->
  <!-- <ComponentA /> -->
  <p>{{ test.message1 }}</p>
  <p>{{ test.message2 }}</p>
  <p>{{ test.count }}</p>
  <p>{{ test.giaTri }}</p>
  <button @click="clickNumber">Click number</button>
</template>
<script setup>
// Lay gia tri tu component cha ve component con => defineProps
// C1:defineProps(['ten bien tu cha'])
// const propValue = defineProps(['message1'])
// C2: defineProps({ten bien: kieu du lieu })
// 1 FILE => 1 defineProps
const test = defineProps({
  message1: String,
  message2: String,
  count: Number,
  giaTri: Number,
})
const eventButtonEmits = defineEmits('increaseNumberBy')
const clickNumber = () => {
  eventButtonEmits('increaseNumberBy')
}
</script>
