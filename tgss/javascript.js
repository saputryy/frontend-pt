document.addEventListener('DOMContentLoaded', () => {
    const inputTugas = document.getElementById('inputTugas');
    const btnTambahTugas = document.getElementById('btnTambahTugas');
    const tugasList = document.getElementById('tugasList');
    const indikatorLoading = document.getElementById('indikatorLoading');

    let semuaTugas = [];

    const tampilkanLoading = () => {
        indikatorLoading.style.display = 'block';
    };

    const sembunyikanLoading = () => {
        indikatorLoading.style.display = 'none';
    };

    
    const renderTugasList = () => {
        tugasList.innerHTML = ''; 

        semuaTugas.forEach(tugas => {
            const itemTugas = document.createElement('li');
            itemTugas.className = 'task-item';
            if (tugas.selesai) {
                itemTugas.classList.add('completed');
            }

            const teksTugas = document.createElement('span');
            teksTugas.textContent = tugas.teks;

            const divAksi = document.createElement('div');
            divAksi.className = 'actions';

            if (tugas.selesai) {
                const btnBatal = document.createElement('button');
                btnBatal.textContent = 'Batal';
                btnBatal.className = 'btn-undo';
                btnBatal.addEventListener('click', () => ubahStatusTugas(tugas.id));
                divAksi.appendChild(btnBatal);
            } else {
                const btnSelesai = document.createElement('button');
                btnSelesai.textContent = 'Selesai';
                btnSelesai.className = 'btn-done';
                btnSelesai.addEventListener('click', () => ubahStatusTugas(tugas.id));
                divAksi.appendChild(btnSelesai);
            }

            const btnHapus = document.createElement('button');
            btnHapus.textContent = 'Hapus';
            btnHapus.className = 'btn-delete';
            btnHapus.addEventListener('click', () => hapusTugas(tugas.id));
            divAksi.appendChild(btnHapus);
            
            itemTugas.appendChild(teksTugas);
            itemTugas.appendChild(divAksi);
            tugasList.appendChild(itemTugas);
        });
    };

    const tambahTugas = async () => {
        const teksInput = inputTugas.value.trim();
        if (teksInput === '') {
            alert('Nama tugas tidak boleh kosong!');
            return;
        }

        tampilkanLoading();
        await new Promise(resolve => setTimeout(resolve, 500)); 
        
        const tugasBaru = {
            id: Date.now(),
            teks: teksInput,
            selesai: false,
        };
        semuaTugas.push(tugasBaru);
        
        sembunyikanLoading();
        renderTugasList();
        inputTugas.value = '';
        console.log(`Pesan sukses: Tugas "${teksInput}" berhasil ditambahkan.`);
    };

    // Fungsi untuk menghapus tugas
    const hapusTugas = async (id) => {
        const tugasYangDihapus = semuaTugas.find(tugas => tugas.id === id);
        
        tampilkanLoading();
        await new Promise(resolve => setTimeout(resolve, 500));

        semuaTugas = semuaTugas.filter(tugas => tugas.id !== id);
        
        sembunyikanLoading();
        renderTugasList();
        console.log(`Pesan sukses: Tugas "${tugasYangDihapus.teks}" berhasil dihapus.`);
    };

    const ubahStatusTugas = (id) => {
        const tugas = semuaTugas.find(tugas => tugas.id === id);
        if (tugas) {
            tugas.selesai = !tugas.selesai;
            renderTugasList();
        }
    };
    

    btnTambahTugas.addEventListener('click', tambahTugas);
    inputTugas.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            tambahTugas();
        }
    });

    renderTugasList();
});