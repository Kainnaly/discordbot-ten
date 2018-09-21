const Discord = require('discord.js');
const bot = new Discord.Client();
// const auth = require('./auth.json');
var prefix = '*/';

bot.on('ready', () => {
  console.log("Ohayoo. ");
  bot.user.setActivity('Being angry to Riku.')
});


bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.slice(prefix.length).split(/ +/);
    var cmd = args.shift().toLowerCase();

    switch(cmd) {
        // !ping
        case 'ping':
            message.channel.send('Pong !')
            // bot.sendMessage({
            //     to: channelID,
            //     message: 'Pong!'
            // });
        break;

        case 'pong':
            message.channel.send('Ping-')
        break;

        case 'help':
            message.reply("besoin d'aide ? \nPour l'instant mes commandes sont : \nping : renvoi pong \npong : renvoi ping \ngao : gentil petit dinosaure \nhaikyuu : meme aléatoire d'Haikyuu!! \nvideo : envoi une vidéo de IDOLiSH7/TRIGGER/Re:vale");
        break;

        case 'gao':
            message.channel.send("", {
                file: "imgs/Gao.jpg"
            });
        break;

        case 'haikyuu':
            // fso = new ActiveXObject("Scripting.FileSystemObject");
            // var n = 0;
            // rep = "imgs/memes/memesHaikyuu"
            
            // function lit_fic(rep) {
            //     var f,ff=""
            //     f = fso.GetFolder(rep)
            //     ff = new Enumerator(f.files);
            //     for(; !ff.atEnd(); ff.moveNext()) {
            //         n++
            //     }
            // }

            var n = 25;

            var i = Math.floor(Math.random() * n);

            var rep = "imgs/memes/memesHaikyuu/"

            message.channel.send("", {
                file: rep + "/meme" + i + ".jpg"
            })

        break;


        case 'video':
            //Diamond Fusion 3 fois parce que c'est la meilleure
            var videos = ['https://youtu.be/Cj17Lh3QAM8',
                'https://youtu.be/VLNZVGDp9jg',
                'https://youtu.be/WMBdSdUKo6Y',
                'https://youtu.be/WMBdSdUKo6Y',
                'https://youtu.be/WMBdSdUKo6Y',
                'https://youtu.be/aoCPwWt_wr4',
                'https://youtu.be/yacHD29uSVc',
                'https://youtu.be/DBSZIt9z9eg',
                'https://youtu.be/kkIWH6dHRYE',
                'https://youtu.be/stz_2EpFvgE'
                ];

            var n = videos.length;

            var i = Math.floor(Math.random() * n);

            message.channel.send(videos[i]);
        
        break;



    }
});


// bot.login(auth.token)
bot.login(process.env.token)