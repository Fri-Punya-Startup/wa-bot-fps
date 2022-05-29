const {client} = require('../client.wa');
const axios = require ('axios');
const User = require('../models/user.model');

const waController = {
    accAcount: async (req, res, next) => {
        try {
            const {id, phone, pass} = req.body; // Get the body
            console.log(req.body);
            msg = `*FRI PUNYA STARTUP*

Selamat Akun anda telah berhasil terdaftar.`
            if( pass == "fpsnihbos" && phone != ""){
                
                await client.sendMessage(`${phone}@c.us`, msg); // Send the message
                
                let user = await User.findByPk(id);
                await user.update({
                    verifikasi: 1,
                });
                res.status(200).json({
                    status: "success",
                });
            }else{
                return res.json({
                    status: 'failed',
                });
            }
        } catch (error) {
            console.log(error);
            return res.json({
                status: 'error',
            });
        }
    },

    register: async (req, res, next) => {
        msg = `
*FRI PUNYA STARTUP*

Terima kasih telah mendaftar di website FRI PUNYA STARTUP.
Kami akan segera memverifikasi data anda
Mohon tunggu pesan whatsapp dari kami bahwa data anda telah diverifikasi.`
        try {
            const {phone} = req.params; // Get the body
            await client.sendMessage(`${phone}@c.us`, msg); // Send the message
            res.json({
                status: 'success',
            });
        }catch (error) {
            next(error);
        }
    }
}

module.exports = waController;