const Event = require('../models/event.model');

// mengambil data wkatu jakarta

// tampilkan waktu jakarta

const eventMulai = async (wa) => {
    const tanggal = new Date();
    let now = new Date(tanggal.getTime() + (7 * 60 * 60 * 1000));
    now = now.toISOString().slice(0, 10);
    let jam = new Date();
    jam = jam.toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour12: false});
    const events = await Event.findAll({
        where: {
            tanggal: now,
            waktu: jam
        }
    });
    if(events.length > 0){
    acara = events[0].dataValues
    pesan = `FRI PUNYA STARTUP

Mengingatkan kembali webinar ${acara.title} telah dimulai

Hari/Tanggal : ${acara.tanggal.split('-').reverse().join('-')}
Waktu :  ${acara.waktu}

Berikut kami informasikan link Zoom ${acara.title}

Link : 
${acara.zoom}

Meeting ID : ${acara.zoom_id}
Passcode : ${acara.zoompass}


Note
1. Diharapkan peserta webinar sudah bergabung 15 menit sebelum kegiatan dimulai.

2. Akses ruang Zoom telah dibuka silahkan untuk langsung bergabung 

3. Menggunakan username Zoom dengan format (Peserta - Nama Lengkap) 

4. Mematikan microphone (mute) selama proses webinar berlangsung dan dapat diaktifkan pada sesi tanya-jawab. 

5. Peserta dapat mengajukan pertanyaan pada saat sesi tanya-jawab dengan menggunakan raise hand / lewat link slido yang diberikan chat zoom . Moderator akan menyampaikan pertanyaan pada pemateri. 

6. Sertifikat digital HANYA akan diberikan kepada peserta yang mengikuti kegiatan dari awal hingga akhir acara dengan mengisi link absensi kehadiran webinar  yang akan diinformasikan setelah pemaparan materi (akhir acara).

Sampai jumpa, kami tunggu kehadiranya. Terimakasih. `

    
        wa.sendMessage(acara.grup_id,pesan);
    }

}


module.exports = eventMulai;