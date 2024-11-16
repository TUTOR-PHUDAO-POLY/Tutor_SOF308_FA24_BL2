<script setup>
import { reactive, ref } from 'vue'

// let count = 0
// Khai bao giong js : loai(var/let/const) ten bien ;
// C1: Ref - theo doi su thay doi cua bien => render tren dom
let count = ref(0)
const clickButton = () => {
  // Khi muon lay gia tri cua 1 bien ref
  count.value++
  console.log('Count: ' + count.value)
  // count++
  // console.log(count)
}
// function clickButton1(){

// }
// Khai bao 1 Object
const sinhVien = ref({
  // liet ke cac thuoc tinh cua Object
  mssv: 'PH12345',
  ten: 'ten123',
  tuoi: 10,
  diaChi: 'Ha Noi',
})
// Khai bao 1 mang
const arrayString = ref(['String 1', 'String 2', 'String 3'])
// C2: Reactive - theo doi su thay doi cua bien => render tren dom
// Ref : ref(gia tri: so,chuoi, mang,Object..)
// Reactive => BAT BUOC PHAI TRUYEN VAO 1 OBJECT
let number = reactive({
  count: 0,
})
const clickButton2 = () => {
  number.count++
}
// 1 mang Object
const listNhanVien = ref([
  {
    maNV: 'HangNT169',
    ten: 'Nguyen Thuy Hang',
    tuoi: 10,
    diaChiLamViec: 'Ha Noi',
    soNamLamViec: 1,
  },
  {
    maNV: 'HangNT170',
    ten: 'Nguyen Thuy Hang1',
    tuoi: 101,
    diaChiLamViec: 'Ha Noi1',
    soNamLamViec: 11,
  },
  {
    maNV: 'HangNT1691',
    ten: 'Nguyen Thuy Hang1',
    tuoi: 1011,
    diaChiLamViec: 'Ha Noi1',
    soNamLamViec: 11,
  },
  {
    maNV: 'HangNT123',
    ten: 'Nguyen Thuy Hang4234',
    tuoi: 10,
    diaChiLamViec: 'Ha Noi',
    soNamLamViec: 1,
  },
  {
    maNV: 'HangNT169fdf',
    ten: 'Nguyen Thuy Hang',
    tuoi: 10,
    diaChiLamViec: 'Ha Noi',
    soNamLamViec: 1,
  },
  {
    maNV: 'HangNTfds169',
    ten: 'Nguyen Thuy Hang',
    tuoi: 10,
    diaChiLamViec: 'Ha Noi',
    soNamLamViec: 1,
  },

  {
    maNV: 'HangNfsdT169',
    ten: 'fsdf Thuy Hang',
    tuoi: 10,
    diaChiLamViec: 'Ha Noi',
    soNamLamViec: 1,
  },
  {
    maNV: 'fsd',
    ten: 'sfd Thuy Hang',
    tuoi: 10,
    diaChiLamViec: 'Hagsfg Noi',
    soNamLamViec: 1,
  },
  {
    maNV: 'HangNThgfh169',
    ten: 'Nguyen fsdThuy Hang',
    tuoi: 110,
    diaChiLamViec: 'H3q4a Noi',
    soNamLamViec: 2,
  },
  {
    maNV: 'HanggdfgNT169',
    ten: 'Nguyen Thuy Hang',
    tuoi: 10,
    diaChiLamViec: 'Ha Noi',
    soNamLamViec: 3,
  },
])
</script>
<template>
  <div>
    <!--
    Gia tri cua bien count => ro rang da thay doi
    => K cap nhat lai vao giao dien
    De vue co the theo doi va cap nhat 1 state (1 bien/ 1 ham/ 1 gia tri...)
    => de cap nhat duoc vao dom
    => Reactivity (Phan ung )
    Vue 3: ref/ Reactive: theo doi duoc su thay doi cua 1 bien /1 ham
    // composition api & option api
    // Vue : composition : khuyen dung khai bao ref
    Tai sao phai dung ref
    1. Ref: Duoc su dung trong template
    => Khi ma gia tri ref thay doi => dom nhan duoc tin hieu vue
    => cap nhat lai gia tri tuong ung cua bien
    2. Vue se giup tu dong theo doi toan bo su thay doi state
    => tu dong render dom tuong ung khi can
    3. Neu k dung ref
      => Gia tri cua bien se duoc thay doi
      => Vue se k the biet duoc khi nao ma bien/ham...
      thay doi de ma cap nhat
      4. Ref:
          1 number,
          1 String,
          doi tuong - Object - {},
          mang - arrary - [],
          1 mang Object [{}]...
     -->
    <!--
     1. Thong tin cua 1 doi tuong SV: mssv, ten, tuoi, diaChi
     => Hien thi thong tin cua doi tuong SV ra man hinh
     2. Thong tin cua 1 mang chuoi cac mon an yeu thich .
     => Hien thi lan luot tt cua cac mon an trong ds ra man hinh
      -->
    <h1>Buoi 2- Ref & Reactive</h1>
    <p>{{ count }}</p>
    <button @click="clickButton">Click me</button>
    <p>Thong tin cua doi tuong SV</p>
    <p>{{ sinhVien.mssv }} - {{ sinhVien.ten }} - {{ sinhVien.tuoi }} - {{ sinhVien.diaChi }}</p>
    <p>Thong tin mang String</p>
    <p>{{ arrayString[0] }} - {{ arrayString[1] }} - {{ arrayString[2] }}</p>
    <p>C2: Reactive</p>
    <p>{{ number.count }}</p>
    <button @click="clickButton2">Click me2</button>
  </div>
  <div>
    <h1>Vong lap - v-for</h1>
    <!-- Cu phap : GIONG FOR EACH TRONG JAVA  FOR :
    // Java
    for (Doi tuong : lists){
     // code
     }
     v-for = Doi tuong in danh sach  :key => Khoa chinh cua tung dong
     gia su : index - vi tri cua for
     v-for = (doi tuong, vi tri) in danh sach : key = khoa chinh
     Key: la duy nhat => Toi uu trong viec dom duoc cap nhap lai (render)
      -->
    <!-- BT:
      Tao 1 Mang Object Nhan Vien: maNV, ten, tuoi, diaChiLamViec, soNamLamViec
      => Hien thi danh sach Nhan Vien ra man hinh (v-for)
       -->
    <table>
      <thead>
        <th>STT</th>
        <th>MaNV</th>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>Dia chi lam viec</th>
        <th>So Nam Lam viec</th>
      </thead>
      <tbody>
        <template v-for="(nhanVien, index) in listNhanVien" :key="nhanVien.maNV">
          <tr>
            <td>{{ index }}</td>
            <td>{{ nhanVien.maNV }}</td>
            <td>{{ nhanVien.ten }}</td>
            <td>{{ nhanVien.tuoi }}</td>
            <td>{{ nhanVien.diaChiLamViec }}</td>
            <td>{{ nhanVien.soNamLamViec }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
