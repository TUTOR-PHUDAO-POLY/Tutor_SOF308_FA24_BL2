<template>
  <h1>Buoi 3 - Vong lap & Re nhanh</h1>
  <div>
    <h1>On tap for & ref/ reactive</h1>
    <!--
  1. Tao doi tuong SinhVien gom cac thuoc tinh:
        mssv- String,
        ten - String,
        tuoi - Number,
        diaChi - String,
        gioiTinh - Boolean
    In danh sach SV  -->
    <!--2. Tao doi tuong Sach gom cac thuoc tinh:
      maSach - String,
      tenSach - String,
      tenTacGia - String,
      soLanTaiBan - Number,
      soTrang - Number.
      In danh sach Sach -->
    <!-- 3. Tao doi tuong MayTinh gom cac thuoc tinh:
      maMayTinh - String,
      mauSac - String,
      boNho - String,
      gia - Number,
      namSanXuat - Number
      3.1 In danh sach May Tinh
      3.2 In danh sach co May Tinh co gia > 100
      3.3 In danh sach co May Tinh co Nam san xuat trong khoang tu 2000 - 2004
    -->
    <!-- v-for = doiTuong in ds mang :key=khoa chi -->
    <!-- Re nhanh:
      v-if / v-show / toan tu 3 ngoi -->
    <h2>Bai 1</h2>
    <table>
      <thead>
        <tr>
          <th>STT</th>
          <th>MSSV</th>
          <th>Ten</th>
          <th>Tuoi</th>
          <th>Dia chi</th>
          <th>Gioi tinh</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(sv, index) in listSinhVien" :key="sv.mssv">
          <tr>
            <td>{{ index }}</td>
            <td>{{ sv.mssv }}</td>
            <td>{{ sv.ten }}</td>
            <td>{{ sv.tuoi }}</td>
            <td>{{ sv.diaChi }}</td>
            <!-- <td>{{ sv.gioiTinh ? 'Nam' : 'Nu' }}</td> -->
            <td>
              <span v-if="sv.gioiTinh">Nam</span>
              <span v-else>Nu</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <h2>Bai 2</h2>
    <!-- Tu lam  -->
    <!-- Bai 3 -->
    <h2>Bai 3</h2>
    <table>
      <thead>
        <tr>
          <th>Ma</th>
          <th>Mau sac</th>
          <th>Bo nho</th>
          <th>Nam san xuat</th>
          <th>Gia</th>
        </tr>
      </thead>
      <tbody>
        <!-- KHONG NEN VIET CUNG CAC DIRECTIVE CHUNG 1 DONG  -->
        <template v-for="mt in mayTinhList" :key="mt.maMayTinh">
          <tr v-if="mt.namSanXuat >= 2000 && mt.namSanXuat <= 2004">
            <td>{{ mt.maMayTinh }}</td>
            <td>{{ mt.mauSac }}</td>
            <td>{{ mt.boNho }}</td>
            <td>{{ mt.namSanXuat }}</td>
            <td>{{ mt.gia }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <div>
    <h1>V-Model - Lam viec voi form</h1>
    <form>
      Username: <input type="text" v-model="u1" />
      <br />
      Email: <input type="text" v-model="e1" />
      <br />
      Gioi tinh:
      <input type="radio" value="true" name="gt" v-model="gioiTinh" /> Nam
      <input type="radio" value="false" name="gt" v-model="gioiTinh" /> Nu
    </form>
    <p>Du lieu vua nhap la: Username:{{ u1 }} - Email: {{ e1 }}</p>
    <p>Gioi tinh: {{ gioiTinh }}</p>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const u1 = ref('')
const e1 = ref('')
const gioiTinh = ref('')
// input : type = text, radio, checkbox => v-model
// v-model: two way binding : MAPPING DU LIEU 2 CHIEU
// Khoi tao 1 ds doi tuong SV
const listSinhVien = reactive([
  {
    mssv: 'HE130461',
    ten: 'Hang',
    tuoi: 10,
    diaChi: 'Ha noi',
    gioiTinh: false,
  },
  {
    mssv: 'HE130462',
    ten: 'Hang',
    tuoi: 101,
    diaChi: 'Ha noi',
    gioiTinh: true,
  },
  {
    mssv: 'HE130463',
    ten: 'Hang',
    tuoi: 10,
    diaChi: 'Ha noi',
    gioiTinh: false,
  },
  {
    mssv: 'HE130464',
    ten: 'Han3g',
    tuoi: 130,
    diaChi: 'Ha noi',
    gioiTinh: true,
  },
  {
    mssv: 'HE1303461',
    ten: 'Hang',
    tuoi: 102,
    diaChi: 'Ha noi',
    gioiTinh: true,
  },
])
const lists = ref([
  {
    mssv: 'mssv 1',
    ten: 'ten 1',
    tuoi: 82,
    diaChi: 'diaChi 1',
    gioiTinh: false,
    id: '1',
  },
  {
    mssv: 'mssv 2',
    ten: 'ten 2',
    tuoi: 57,
    diaChi: 'diaChi 2',
    gioiTinh: false,
    id: '2',
  },
  {
    mssv: 'mssv 3',
    ten: 'ten 3',
    tuoi: 97,
    diaChi: 'diaChi 3',
    gioiTinh: false,
    id: '3',
  },
  {
    mssv: 'mssv 4',
    ten: 'ten 4',
    tuoi: 12,
    diaChi: 'diaChi 4',
    gioiTinh: false,
    id: '4',
  },
  {
    mssv: 'mssv 5',
    ten: 'ten 5',
    tuoi: 91,
    diaChi: 'diaChi 5',
    gioiTinh: false,
    id: '5',
  },
  {
    mssv: 'mssv 6',
    ten: 'ten 6',
    tuoi: 89,
    diaChi: 'diaChi 6',
    gioiTinh: false,
    id: '6',
  },
  {
    mssv: 'mssv 7',
    ten: 'ten 7',
    tuoi: 4,
    diaChi: 'diaChi 7',
    gioiTinh: false,
    id: '7',
  },
  {
    mssv: 'mssv 8',
    ten: 'ten 8',
    tuoi: 33,
    diaChi: 'diaChi 8',
    gioiTinh: false,
    id: '8',
  },
  {
    mssv: 'mssv 9',
    ten: 'ten 9',
    tuoi: 61,
    diaChi: 'diaChi 9',
    gioiTinh: false,
    id: '9',
  },
  {
    mssv: 'mssv 10',
    ten: 'ten 10',
    tuoi: 11,
    diaChi: 'diaChi 10',
    gioiTinh: false,
    id: '10',
  },
  {
    mssv: 'mssv 11',
    ten: 'ten 11',
    tuoi: 75,
    diaChi: 'diaChi 11',
    gioiTinh: false,
    id: '11',
  },
  {
    mssv: 'mssv 12',
    ten: 'ten 12',
    tuoi: 86,
    diaChi: 'diaChi 12',
    gioiTinh: false,
    id: '12',
  },
  {
    mssv: 'mssv 13',
    ten: 'ten 13',
    tuoi: 17,
    diaChi: 'diaChi 13',
    gioiTinh: false,
    id: '13',
  },
  {
    mssv: 'mssv 14',
    ten: 'ten 14',
    tuoi: 18,
    diaChi: 'diaChi 14',
    gioiTinh: false,
    id: '14',
  },
  {
    mssv: 'mssv 15',
    ten: 'ten 15',
    tuoi: 47,
    diaChi: 'diaChi 15',
    gioiTinh: false,
    id: '15',
  },
  {
    mssv: 'mssv 16',
    ten: 'ten 16',
    tuoi: 22,
    diaChi: 'diaChi 16',
    gioiTinh: false,
    id: '16',
  },
  {
    mssv: 'mssv 17',
    ten: 'ten 17',
    tuoi: 74,
    diaChi: 'diaChi 17',
    gioiTinh: false,
    id: '17',
  },
  {
    mssv: 'mssv 18',
    ten: 'ten 18',
    tuoi: 71,
    diaChi: 'diaChi 18',
    gioiTinh: false,
    id: '18',
  },
  {
    mssv: 'mssv 19',
    ten: 'ten 19',
    tuoi: 37,
    diaChi: 'diaChi 19',
    gioiTinh: false,
    id: '19',
  },
  {
    mssv: 'mssv 20',
    ten: 'ten 20',
    tuoi: 69,
    diaChi: 'diaChi 20',
    gioiTinh: false,
    id: '20',
  },
  {
    mssv: 'mssv 21',
    ten: 'ten 21',
    tuoi: 39,
    diaChi: 'diaChi 21',
    gioiTinh: false,
    id: '21',
  },
  {
    mssv: 'mssv 22',
    ten: 'ten 22',
    tuoi: 93,
    diaChi: 'diaChi 22',
    gioiTinh: false,
    id: '22',
  },
  {
    mssv: 'mssv 23',
    ten: 'ten 23',
    tuoi: 72,
    diaChi: 'diaChi 23',
    gioiTinh: false,
    id: '23',
  },
  {
    mssv: 'mssv 24',
    ten: 'ten 24',
    tuoi: 73,
    diaChi: 'diaChi 24',
    gioiTinh: false,
    id: '24',
  },
  {
    mssv: 'mssv 25',
    ten: 'ten 25',
    tuoi: 95,
    diaChi: 'diaChi 25',
    gioiTinh: false,
    id: '25',
  },
  {
    mssv: 'mssv 26',
    ten: 'ten 26',
    tuoi: 28,
    diaChi: 'diaChi 26',
    gioiTinh: false,
    id: '26',
  },
  {
    mssv: 'mssv 27',
    ten: 'ten 27',
    tuoi: 35,
    diaChi: 'diaChi 27',
    gioiTinh: false,
    id: '27',
  },
  {
    mssv: 'mssv 28',
    ten: 'ten 28',
    tuoi: 49,
    diaChi: 'diaChi 28',
    gioiTinh: false,
    id: '28',
  },
  {
    mssv: 'mssv 29',
    ten: 'ten 29',
    tuoi: 53,
    diaChi: 'diaChi 29',
    gioiTinh: false,
    id: '29',
  },
  {
    mssv: 'mssv 30',
    ten: 'ten 30',
    tuoi: 21,
    diaChi: 'diaChi 30',
    gioiTinh: false,
    id: '30',
  },
  {
    mssv: 'mssv 31',
    ten: 'ten 31',
    tuoi: 92,
    diaChi: 'diaChi 31',
    gioiTinh: false,
    id: '31',
  },
  {
    mssv: 'mssv 32',
    ten: 'ten 32',
    tuoi: 39,
    diaChi: 'diaChi 32',
    gioiTinh: false,
    id: '32',
  },
  {
    mssv: 'mssv 33',
    ten: 'ten 33',
    tuoi: 87,
    diaChi: 'diaChi 33',
    gioiTinh: false,
    id: '33',
  },
  {
    mssv: 'mssv 34',
    ten: 'ten 34',
    tuoi: 25,
    diaChi: 'diaChi 34',
    gioiTinh: false,
    id: '34',
  },
  {
    mssv: 'mssv 35',
    ten: 'ten 35',
    tuoi: 71,
    diaChi: 'diaChi 35',
    gioiTinh: false,
    id: '35',
  },
  {
    mssv: 'mssv 36',
    ten: 'ten 36',
    tuoi: 91,
    diaChi: 'diaChi 36',
    gioiTinh: false,
    id: '36',
  },
  {
    mssv: 'mssv 37',
    ten: 'ten 37',
    tuoi: 45,
    diaChi: 'diaChi 37',
    gioiTinh: false,
    id: '37',
  },
  {
    mssv: 'mssv 38',
    ten: 'ten 38',
    tuoi: 50,
    diaChi: 'diaChi 38',
    gioiTinh: false,
    id: '38',
  },
  {
    mssv: 'mssv 39',
    ten: 'ten 39',
    tuoi: 34,
    diaChi: 'diaChi 39',
    gioiTinh: false,
    id: '39',
  },
  {
    mssv: 'mssv 40',
    ten: 'ten 40',
    tuoi: 35,
    diaChi: 'diaChi 40',
    gioiTinh: false,
    id: '40',
  },
  {
    mssv: 'mssv 41',
    ten: 'ten 41',
    tuoi: 7,
    diaChi: 'diaChi 41',
    gioiTinh: false,
    id: '41',
  },
  {
    mssv: 'mssv 42',
    ten: 'ten 42',
    tuoi: 86,
    diaChi: 'diaChi 42',
    gioiTinh: false,
    id: '42',
  },
  {
    mssv: 'mssv 43',
    ten: 'ten 43',
    tuoi: 13,
    diaChi: 'diaChi 43',
    gioiTinh: false,
    id: '43',
  },
  {
    mssv: 'mssv 44',
    ten: 'ten 44',
    tuoi: 85,
    diaChi: 'diaChi 44',
    gioiTinh: false,
    id: '44',
  },
  {
    mssv: 'mssv 45',
    ten: 'ten 45',
    tuoi: 10,
    diaChi: 'diaChi 45',
    gioiTinh: false,
    id: '45',
  },
  {
    mssv: 'mssv 46',
    ten: 'ten 46',
    tuoi: 75,
    diaChi: 'diaChi 46',
    gioiTinh: false,
    id: '46',
  },
  {
    mssv: 'mssv 47',
    ten: 'ten 47',
    tuoi: 77,
    diaChi: 'diaChi 47',
    gioiTinh: false,
    id: '47',
  },
  {
    mssv: 'mssv 48',
    ten: 'ten 48',
    tuoi: 35,
    diaChi: 'diaChi 48',
    gioiTinh: false,
    id: '48',
  },
  {
    mssv: 'mssv 49',
    ten: 'ten 49',
    tuoi: 47,
    diaChi: 'diaChi 49',
    gioiTinh: false,
    id: '49',
  },
  {
    mssv: 'mssv 50',
    ten: 'ten 50',
    tuoi: 13,
    diaChi: 'diaChi 50',
    gioiTinh: false,
    id: '50',
  },
  {
    mssv: 'mssv 51',
    ten: 'ten 51',
    tuoi: 37,
    diaChi: 'diaChi 51',
    gioiTinh: false,
    id: '51',
  },
  {
    mssv: 'mssv 52',
    ten: 'ten 52',
    tuoi: 52,
    diaChi: 'diaChi 52',
    gioiTinh: false,
    id: '52',
  },
  {
    mssv: 'mssv 53',
    ten: 'ten 53',
    tuoi: 74,
    diaChi: 'diaChi 53',
    gioiTinh: false,
    id: '53',
  },
  {
    mssv: 'mssv 54',
    ten: 'ten 54',
    tuoi: 49,
    diaChi: 'diaChi 54',
    gioiTinh: false,
    id: '54',
  },
  {
    mssv: 'mssv 55',
    ten: 'ten 55',
    tuoi: 27,
    diaChi: 'diaChi 55',
    gioiTinh: false,
    id: '55',
  },
  {
    mssv: 'mssv 56',
    ten: 'ten 56',
    tuoi: 79,
    diaChi: 'diaChi 56',
    gioiTinh: false,
    id: '56',
  },
  {
    mssv: 'mssv 57',
    ten: 'ten 57',
    tuoi: 83,
    diaChi: 'diaChi 57',
    gioiTinh: false,
    id: '57',
  },
  {
    mssv: 'mssv 58',
    ten: 'ten 58',
    tuoi: 55,
    diaChi: 'diaChi 58',
    gioiTinh: false,
    id: '58',
  },
  {
    mssv: 'mssv 59',
    ten: 'ten 59',
    tuoi: 27,
    diaChi: 'diaChi 59',
    gioiTinh: false,
    id: '59',
  },
  {
    mssv: 'mssv 60',
    ten: 'ten 60',
    tuoi: 100,
    diaChi: 'diaChi 60',
    gioiTinh: false,
    id: '60',
  },
  {
    mssv: 'mssv 61',
    ten: 'ten 61',
    tuoi: 22,
    diaChi: 'diaChi 61',
    gioiTinh: false,
    id: '61',
  },
  {
    mssv: 'mssv 62',
    ten: 'ten 62',
    tuoi: 77,
    diaChi: 'diaChi 62',
    gioiTinh: false,
    id: '62',
  },
])
const sachList = ref([
  {
    maSach: 'S001',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
  {
    maSach: 'S003',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
  {
    maSach: 'S004',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
  {
    maSach: 'S005',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
  {
    maSach: 'S006',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
  {
    maSach: 'S007',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
  {
    maSach: 'S008',
    tenSach: 'Conan',
    tenTacGia: 'Hiroshima',
    soLanTaiBan: 4,
    soTrang: 99,
  },
])
const mayTinhList = ref([
  {
    maMayTinh: 'MT001',
    mauSac: 'Đỏ',
    boNho: '258GB',
    gia: 15000000,
    namSanXuat: 2000,
  },
  {
    maMayTinh: 'MT002',
    mauSac: 'Đỏ',
    boNho: '258GB',
    gia: 15000000,
    namSanXuat: 2004,
  },
  {
    maMayTinh: 'MT003',
    mauSac: 'Đỏ',
    boNho: '258GB',
    gia: 15000000,
    namSanXuat: 2025,
  },
  {
    maMayTinh: 'MT004',
    mauSac: 'Đỏ',
    boNho: '258GB',
    gia: 15000000,
    namSanXuat: 2025,
  },
  {
    maMayTinh: 'MT005',
    mauSac: 'Đỏ',
    boNho: '258GB',
    gia: 15000000,
    namSanXuat: 2025,
  },
  {
    maMayTinh: 'MT006',
    mauSac: 'Đỏ',
    boNho: '258GB',
    gia: 15000000,
    namSanXuat: 2025,
  },
])
</script>
