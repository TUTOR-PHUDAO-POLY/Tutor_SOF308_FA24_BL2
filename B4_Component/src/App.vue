<template>
  <div>
    <h1>Buổi 4 - Phần 1 - Ôn tập</h1>
    <h2>Bai 1</h2>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>Ma Nhan Vien</th>
          <th>Ten</th>
          <th>Chuc vu</th>
          <th>Luong</th>
          <th>Kinh nghiem</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(nv, index) in listNhanVien" :key="nv.maNV">
          <tr>
            <td>{{ index }}</td>
            <td>{{ nv.maNV }}</td>
            <td>{{ nv.ten }}</td>
            <td>{{ nv.chucVu }}</td>
            <td>{{ nv.luong }}</td>
            <td>{{ nv.kinhNhiem }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <h2>Bai 2</h2>
    <!-- So thu 1: <input type="text" v-model="numberFirst" />
    <br />
    So thu 2: <input type="text" v-model="numberSecond" /> -->
    So thu 1: <input type="number" v-model="numberFirst" />
    <br />
    So thu 2: <input type="number" v-model="numberSecond" />
    <br />
    <button @click="tinhTongHaiSo">Tinh tong</button>
    <br />
    <p>Tong = {{ sum }}</p>
  </div>
  <div>
    <h1>Buổi 4 - Phần 2 - Component</h1>
    <!-- Component trong VueJS : Chia nho giao dien => tach nho giao dien
    => Tai su dung duoc giao dien.
    Component co cac thanh phan: HTML/CSS/JS(logic)
    => .vue
    Co 2 loai component:
      1. Component cuc bo => Chi file day goi duoc thoi
      2. Component toan cuc => Moi noi trong project co the dung duoc (static)
    COMPONENT TRUYEN 1 CHIEU CHA -> CON
    -->
    <!-- Cach goi component con vao component cha
     C1: Goi bang ten file : lac da
     C2: Goi theo ran: gach ngang
     -->
    <!--
     1. Truyen gia tri tu component cha -> component con => props
     2. Truyen su kien tu component cha -> component con => emits
     3. Dong bo du lieu giua component con & component cha (two way binding)
     VUE JS 3.4 DO LEN => defineModel
       -->
    <!-- Truyen CHA -> CON => LUON LUON LA STRING -->
    <p>Count = {{ number }}</p>
    <ButtonComponent
      message1="123 - Test - SOF308 - VueJS"
      message2="abcd"
      :count="3"
      :giaTri="number"
      @increaseNumberBy="increaseNumber"
    />
    <p>Cha: {{ username }} - {{ email }}</p>
    <ComponetVModel v-model:u1="username" v-model:u2="email" />
    <!-- <button-component />
    <span>Cha</span>
     <ComponentA /> -->
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import ButtonComponent from './component/ButtonComponent.vue'
import ComponetVModel from './component/ComponetVModel.vue'
const number = ref(5)
const increaseNumber = () => {
  number.value++
}
const listNhanVien = reactive([
  {
    maNV: 'maNV 1',
    ten: 'ten 1',
    chucVu: 'chucVu 1',
    luong: 67,
    kinhNhiem: 64,
  },
  {
    maNV: 'maNV 2',
    ten: 'ten 2',
    chucVu: 'chucVu 2',
    luong: 84,
    kinhNhiem: 15,
  },
  {
    maNV: 'maNV 3',
    ten: 'ten 3',
    chucVu: 'chucVu 3',
    luong: 35,
    kinhNhiem: 1,
  },
  {
    maNV: 'maNV 4',
    ten: 'ten 4',
    chucVu: 'chucVu 4',
    luong: 52,
    kinhNhiem: 45,
  },
  {
    maNV: 'maNV 5',
    ten: 'ten 5',
    chucVu: 'chucVu 5',
    luong: 74,
    kinhNhiem: 46,
  },
  {
    maNV: 'maNV 6',
    ten: 'ten 6',
    chucVu: 'chucVu 6',
    luong: 53,
    kinhNhiem: 76,
  },
  {
    maNV: 'maNV 7',
    ten: 'ten 7',
    chucVu: 'chucVu 7',
    luong: 44,
    kinhNhiem: 50,
  },
  {
    maNV: 'maNV 8',
    ten: 'ten 8',
    chucVu: 'chucVu 8',
    luong: 8,
    kinhNhiem: 85,
  },
  {
    maNV: 'maNV 9',
    ten: 'ten 9',
    chucVu: 'chucVu 9',
    luong: 60,
    kinhNhiem: 37,
  },
  {
    maNV: 'maNV 10',
    ten: 'ten 10',
    chucVu: 'chucVu 10',
    luong: 88,
    kinhNhiem: 31,
  },
])
const numberFirst = ref(0)
const numberSecond = ref(0)
const sum = ref(0)
const tinhTongHaiSo = () => {
  //text => 2 => '2' + '3' => '23'
  // ep kieu tu String ve Number
  // sum.value = Number(numberFirst.value) + Number(numberSecond.value)
  sum.value = numberFirst.value + numberSecond.value
}
const email = ref('')
const username = ref('')
</script>
