<template>
  <h1 style="text-align: center">Quan ly sach</h1>
  <h2 style="text-align: center">{{ !isUpdate ? 'Them sach' : 'Chinh sua sach' }}</h2>
  <FormBookComponent v-model:book="newBook" />
  <button @click="addBook()" v-show="!isUpdate">Add</button>
  <button @click="updateBook()" v-if="isUpdate">Update</button>
  <section>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Ten</th>
          <th scope="col">Loai</th>
          <th scope="col">Tac gia</th>
          <th scope="col">Gia</th>
          <th scope="col">Hanh dong</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="sach in listSach" :key="sach.id">
          <tr>
            <td>{{ sach.id }}</td>
            <td>{{ sach.ten }}</td>
            <td>{{ sach.loai }}</td>
            <td>{{ sach.tacGia }}</td>
            <td>{{ sach.gia }}</td>
            <td>
              <button @click="removeBook(sach.id)">Xoa</button>
              <button @click="detailBook(sach)">Detail</button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import FormBookComponent from '../component/FormBookComponent.vue'
const listSach = ref([
  {
    ten: 'ten 1',
    loai: 'Loại 4',
    tacGia: 'tacGia 1',
    gia: 70,
    id: '1',
  },
  {
    ten: 'ten 2',
    loai: 'Loại 2',
    tacGia: 'tacGia 2',
    gia: 87,
    id: '2',
  },
  {
    ten: 'ten 3',
    loai: 'Loại 1',
    tacGia: 'tacGia 3',
    gia: 40,
    id: '3',
  },
])
const indexUpdate = ref(-1)
const isUpdate = ref(false)
// isUpdate = false => Add
// isUpdate = true => Update
// remove sach
const removeBook = (id) => {
  // console.log(index)
  const index = listSach.value.findIndex((mt) => mt.id === id)
  listSach.value.splice(index, 1)
}
const newBook = ref({
  ten: '',
  loai: '',
  tacGia: '',
  gia: '',
})
// Clear Form : J2 => Lam sach du lieu trong form
const resertData = () => {
  newBook.value = {
    ten: '',
    loai: '',
    tacGia: '',
    gia: '',
  }
}
const addBook = () => {
  // validate ?
  listSach.value.push({
    id: listSach.value.length + 1,
    ...newBook.value, // sao chep thuoc tinh cua object => BeanUtils.copyProp...
  })
  resertData()
}
const detailBook = (item) => {
  newBook.value = { ...item }
  isUpdate.value = true
  // lay vi tri cua doi tuong can update
  indexUpdate.value = listSach.value.findIndex((b) => b.id === item.id)
}
const updateBook = () => {
  listSach.value[indexUpdate.value] = { ...newBook.value }
  resertData
  isUpdate.value = false
  indexUpdate.value = -1
}
</script>
