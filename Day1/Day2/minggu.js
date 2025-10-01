// function hitungUsia(tahunLahir){
//     let tahunSekarang=2025
//     return tahunSekarang-tahunLahir
// }

// console.log(hitungUsia(2000))
 
// function cekKategoriUmur(umur){
//     if(umur >=0 &&umur <= 12){
//         return ('Anak anak')
//     }
//     else if(umur >=13 &&umur<=17){
//         return ('remaja')
//     }
//     else if ( umur >=18 &&umur<=59){
//         return ('Dewasa')
//     }
//     else if (umur>=60){
//         return ('lansia')
//     }else{
//         return ('Umur Tidak valid')
//     }

// }
// console.log(cekKategoriUmur(80))

// class BankAccaount{
//     constructor(namaAkun){
//         this.namaAkun=namaAkun
//         this.saldo=0
//     }

//     setor(jumlah){
//         this.saldo+=jumlah
//     }
//     tarik(jumlah){
//         this.saldo-=jumlah
//     }
//     cekSaldo() {
//         console.log('saldo anda:'+this.saldo)
//     }
//     transfer(jumlah,tujuan){
//         console.log('Transfer sebanyak '+(jumlah)+' ke '+(tujuan))
//     }
// }
// let akun1=new BankAccaount('mega123')
// let akun2=new BankAccaount('mega')
// akun1.setor(30000)
// akun1.cekSaldo()
// akun1.tarik(15000)
// akun2.cekSaldo()
// akun1.transfer(2000,'akun2')
// akun2.cekSaldo()
// akun1.cekSaldo()

function ambilDataUser(userId){
     return new Promise((resolve,reject) => {
        if (userId<=0){
            reject('user ID tidak vslid');
            return;
        }
        setTimeout(()=>{
            const userData={
                id:userId,
                nama: 'user'+userId,
                email: 'user'+userId+'@Gmail.com'
            };
            console.log('Data User berhasil diambil dari server');
            resolve(userData);
        },2000)
     });
}
async function tesAmbildata(){
    try{
        console.log('sedang mengambil data...')
        let dataUser=await ambilDataUser(12)
        console.log(dataUser)

    } catch (error){
        console.log(error)

    }
}

tesAmbildata()