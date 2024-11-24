<template>
  <section>
    Tên: <input type="text" v-model="book.ten" />
    <br />
    Loại:
    <select v-model="book.loai">
      <option value="Loại 1">Loai 1</option>
      <option value="Loại 2">Loai 2</option>
      <option value="Loại 3">Loai 3</option>
      <option value="Loại 4">Loai 4</option>
    </select>
    <br />
    Tác giả: <input type="text" v-model="book.tacGia" />
    <br />
    Giá: <input type="text" v-model="book.gia" />
  </section>
</template>
<script setup>
defineModel('book', {
  default: () => ({
    ten: '',
    loai: '',
    tacGia: '',
    gia: '',
  }),
})
</script>
