// Variabel dengan let (bisa diubah) dan const (tetap)
let nana = "budi";
console.log(nana);

// Node.js supaya bisa running
let a = 2;
let b = 3;
let hasil = a + b;
console.log(hasil);

// Template string
let nama = "ali";
let umur = 18;
let kalimat = `nama saya ${nama} umur saya ${umur}`;
console.log(kalimat);

// Struktur data array (menyimpan banyak nilai)
let angka = ["1", "2", "3"];
console.log(angka[0]); // akses index 0
console.log(angka.length); // jumlah elemen dalam array

// Objek digunakan untuk menyimpan informasi dalam bentuk key dan value
let orang = {
  nama: "siti",
  umur: 20,
};
console.log(orang.nama);
console.log(orang.umur);

// Array method: push (tambah di belakang), unshift (tambah di depan)
angka.push("4");
console.log(angka);

angka.unshift("0");
console.log(angka);

// Objek mobil
let mobil = { merk: "abs", tahun: 2022 };
mobil.tahun = 2023; // ubah value tahun
console.log(mobil.tahun);

// Looping perulangan for
for (let i = 1; i < 5; i++) {
  console.log(i);
}
//jika i belum terpenuhi maka akan ditambah sampai memenuhi

// Looping for-of dengan array
let angka2 = [10, 20, 30];
let total = 0;
for (let x of angka2) {
  total += x;
}
console.log(total);


let buah1={nama:"mangga",jenis:{
    a:"matang",
    b:"mentah",
}}
console.log(`$(buah.nama)$(buah.jenis.b)`)


//while looping sampe terpenuhi
//for jaln dlu bru cek
let buah={nama:"mangga",
    jenis:{
    a:"matang",
    b:"mentah",
}}

console.log( ` ${buah.jenis.b}`  );