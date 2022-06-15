const Event = require('../models/event.model');

module.exports = webinar = async (args,msg,pass) => {
        if(args[1] == 'update' && args[2] == pass && args[3] != undefined && args[4] != undefined){
            const event = await Event.findOne({
                    where: {
                            key: args[3]
                    }
            });
            if(event){
                    event.update({
                            grup_id: args[4]
                    })
                    msg.reply(`grup id event ${event.title} berhasil diupdate`);
            }else{
                    msg.reply('Maaf key anda salah')
            }
                    
    }else if(args[1]){
            msg.reply('format salah');
    }else{
            const event = await Event.findAll();
            msg.reply();
    }
}