<template>
  <h1>Quan ly sach</h1>
  <FormBookComponent />
  <button>Add</button>
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
            <td>Hanh dong</td>
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
    loai: 'loai 1',
    tacGia: 'tacGia 1',
    gia: 70,
    id: '1',
  },
  {
    ten: 'ten 2',
    loai: 'loai 2',
    tacGia: 'tacGia 2',
    gia: 87,
    id: '2',
  },
  {
    ten: 'ten 3',
    loai: 'loai 3',
    tacGia: 'tacGia 3',
    gia: 40,
    id: '3',
  },
  {
    ten: 'ten 4',
    loai: 'loai 4',
    tacGia: 'tacGia 4',
    gia: 60,
    id: '4',
  },
  {
    ten: 'ten 5',
    loai: 'loai 5',
    tacGia: 'tacGia 5',
    gia: 94,
    id: '5',
  },
  {
    ten: 'ten 6',
    loai: 'loai 6',
    tacGia: 'tacGia 6',
    gia: 20,
    id: '6',
  },
  {
    ten: 'ten 7',
    loai: 'loai 7',
    tacGia: 'tacGia 7',
    gia: 1,
    id: '7',
  },
  {
    ten: 'ten 8',
    loai: 'loai 8',
    tacGia: 'tacGia 8',
    gia: 83,
    id: '8',
  },
  {
    ten: 'ten 9',
    loai: 'loai 9',
    tacGia: 'tacGia 9',
    gia: 39,
    id: '9',
  },
  {
    ten: 'ten 10',
    loai: 'loai 10',
    tacGia: 'tacGia 10',
    gia: 76,
    id: '10',
  },
  {
    ten: 'ten 11',
    loai: 'loai 11',
    tacGia: 'tacGia 11',
    gia: 48,
    id: '11',
  },
  {
    ten: 'ten 12',
    loai: 'loai 12',
    tacGia: 'tacGia 12',
    gia: 100,
    id: '12',
  },
  {
    ten: 'ten 13',
    loai: 'loai 13',
    tacGia: 'tacGia 13',
    gia: 42,
    id: '13',
  },
  {
    ten: 'ten 14',
    loai: 'loai 14',
    tacGia: 'tacGia 14',
    gia: 14,
    id: '14',
  },
  {
    ten: 'ten 15',
    loai: 'loai 15',
    tacGia: 'tacGia 15',
    gia: 51,
    id: '15',
  },
  {
    ten: 'ten 16',
    loai: 'loai 16',
    tacGia: 'tacGia 16',
    gia: 56,
    id: '16',
  },
  {
    ten: 'ten 17',
    loai: 'loai 17',
    tacGia: 'tacGia 17',
    gia: 14,
    id: '17',
  },
  {
    ten: 'ten 18',
    loai: 'loai 18',
    tacGia: 'tacGia 18',
    gia: 86,
    id: '18',
  },
  {
    ten: 'ten 19',
    loai: 'loai 19',
    tacGia: 'tacGia 19',
    gia: 12,
    id: '19',
  },
  {
    ten: 'ten 20',
    loai: 'loai 20',
    tacGia: 'tacGia 20',
    gia: 54,
    id: '20',
  },
  {
    ten: 'ten 21',
    loai: 'loai 21',
    tacGia: 'tacGia 21',
    gia: 74,
    id: '21',
  },
  {
    ten: 'ten 22',
    loai: 'loai 22',
    tacGia: 'tacGia 22',
    gia: 40,
    id: '22',
  },
  {
    ten: 'ten 23',
    loai: 'loai 23',
    tacGia: 'tacGia 23',
    gia: 34,
    id: '23',
  },
  {
    ten: 'ten 24',
    loai: 'loai 24',
    tacGia: 'tacGia 24',
    gia: 83,
    id: '24',
  },
  {
    ten: 'ten 25',
    loai: 'loai 25',
    tacGia: 'tacGia 25',
    gia: 12,
    id: '25',
  },
  {
    ten: 'ten 26',
    loai: 'loai 26',
    tacGia: 'tacGia 26',
    gia: 6,
    id: '26',
  },
  {
    ten: 'ten 27',
    loai: 'loai 27',
    tacGia: 'tacGia 27',
    gia: 43,
    id: '27',
  },
  {
    ten: 'ten 28',
    loai: 'loai 28',
    tacGia: 'tacGia 28',
    gia: 93,
    id: '28',
  },
])
</script>
