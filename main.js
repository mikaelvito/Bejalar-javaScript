const nama = "Mikael Vito";
const pekerjaan = "peserta binar academy";
console.log(`Halo, namaku ${nama}. Aku adalah ${pekerjaan}`);

let nilaiUjianMatematika = 70;
nilaiUjianMatematika = 100;

console.log(nilaiUjianMatematika);

const apakahSayaPintar = true;
const apakahSayaBodoh = false;

console.log(apakahSayaPintar);
console.log(apakahSayaBodoh);

const ktp = {
    nama: "Mikael Vito",    
    alamat: {
        jalan: "JL. Mars No.26",
        "rt/rw": "06/09"
    },
    pekerjaan: [
        "Peserta Binar Academy",
        "Pelaajr"
    ]
};

console.log(ktp.nama)
console.log(ktp.alamat)
console.log(ktp.pekerjaan)
console.log(ktp["alamat"]["rt/rw"])
console.log(ktp.alamat["rt/rw"])


ktp.pekerjaan.forEach(function(item) {
    console.log(`${item} adalah pekerjaan ${ktp.nama}`)
})

const namaKeluarga = ["Vito", "Vita", "Vitu"];
console.log(namaKeluarga);

const namaKartuKeluarga = [
    "Pak Vito",
    "Mak Vita",
    "Kak Vitu"
];


const namaKK = new Array("Vito", "Vita", "Vitu");
console.log(namaKeluarga)
console.log(namaKartuKeluarga.length)

const arrays = [namaKeluarga, namaKartuKeluarga]
console.log(arrays);

const buah = ["Apel", "Pir", "Jambu"];
buah.push("lemon");
console.log(buah);

buah.pop();
console.log(buah);
