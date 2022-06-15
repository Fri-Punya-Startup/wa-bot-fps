const Event = require('../models/event.model');

// mengambil data wkatu jakarta
const tanggal = new Date();
let now = new Date(tanggal.getTime() + (7 * 60 * 60 * 1000));
now = now.toISOString().slice(0, 10);

// tampilkan waktu jakarta

const salamSapa = async (wa) => {
    let jam = new Date();
    jam = jam.toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour12: false});
    const events = await Event.findAll({
        where: {
            tanggal: now
        }
    });

    acara = events[0].dataValues

    lol = '06:00:00';

    let lima15Menit = (parseInt(acara.waktu.slice(3, 5)) - 15)

    if (lima15Menit < 0) {
        lima15Menit = 60 + lima15Menit
        lima15Menit = (acara.waktu.slice(0,2)-1)+':'+lima15Menit
    }
    
    pesan = `FRI PUNYA STARTUP

Sudah siap mengikuti keseruan webinar ${acara.title} ?

Hari/Tanggal : ${acara.tanggal.split('-').reverse().join('-')}
Waktu :  ${acara.waktu}

Berikut kami informasikan link Zoom ${acara.title}

Link : 
${acara.zoom}

Meeting ID : ${acara.zoom_id}
Passcode : ${acara.zoompass}


Note
1. Diharapkan peserta webinar sudah bergabung 15 menit sebelum kegiatan dimulai.

2. Akses ruang Zoom akan dibuka mulai pukul ${lima15Menit} WIB

3. Menggunakan username Zoom dengan format (Peserta - Nama Lengkap) 

4. Mematikan suara/speaker (mute) selama proses webinar berlangsung dan dapat diaktifkan pada sesi tanya-jawab. 

5. Peserta dapat mengajukan pertanyaan pada saat sesi tanya-jawab dengan menggunakan raise hand / lewat link slido yang diberikan chat zoom . Moderator akan menyampaikan pertanyaan pada pemateri. 

6. Sertifikat digital HANYA akan diberikan kepada peserta yang mengikuti kegiatan dari awal hingga akhir acara dengan mengisi link absensi kehadiran webinar  yang akan diinformasikan setelah pemaparan materi (akhir acara).

Sampai jumpa, kami tunggu kehadiranya. Terimakasih. `

    if(jam == lol && events.length > 0){
        wa.sendMessage('6281818261976@c.us',pesan);
    }

}


module.exports = salamSapa;