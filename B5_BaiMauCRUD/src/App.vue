<template>
  <HeaderLayout />
  <main>
    <BookPage />
  </main>
  <FooterLayout />
</template>
<script setup>
import FooterLayout from './layout/FooterLayout.vue'
import HeaderLayout from './layout/HeaderLayout.vue'
import BookPage from './page/BookPage.vue'
</script>
