const Discord = require("discord.js");
const bot = new Discord.Client();

// Décommenter const auth si en local avec node Ten-nii.js
// const auth = require('./auth.json');

var prefix = "*/";

bot.on("ready", () => {
  console.log("Ohayoo. ");
  bot.user.setActivity("Being angry to Riku.");
});


bot.on("message", message => {

    console.log("indexof<@4... : " + message.content.indexOf("<@492396386906800148>"));
    console.log("indexof@Ten... : " + message.content.indexOf("@Ten-nii"));
    

    if ( (!message.content.startsWith(prefix)) && 
        (message.content.indexOf("<@492396386906800148>") < -1) &&
        (message.content.indexOf("@Ten-nii") < -1) ) {
        return;
    } else {
        if (message.content.substring(0,prefix.length) == prefix) {
            message.content = message.content.slice(prefix.length)
            // console.log("Message : " + message)
        } else if (message.content.substring(0,3) == "<@4") {
            message.content = message.content.slice(22)
            // console.log("Message : " + message)
        }
    }

    var args = message.content.split("/ +/");
    
    var cmd = args.shift().toLowerCase();

    // console.log("cmd : " + message.content)

    switch(cmd) {
        // !ping
        case "ping":
            message.channel.send("Pong !")
            // bot.sendMessage({
            //     to: channelID,
            //     message: 'Pong!'
            // });
        break;

        case "pong":
            message.channel.send("Ping-")
        break;

        case "help":
            var msgRep = "besoin d'aide ? \n"
            msgRep += "Mon préfixe est `*/` \n"
            msgRep += "Pour l'instant mes commandes sont : \n"
            msgRep += "`ping` : renvoi pong \n"
            msgRep += "`pong` : renvoi ping \n"
            msgRep += "`gao` : gentil petit dinosaure \n"
            msgRep += "`haikyuu` : meme aléatoire d'Haikyuu!! \n"
            msgRep += "`video` : envoi une vidéo de IDOLiSH7/TRIGGER/Re:vale \n"
            msgRep += "`nope` : nope. "
            message.reply(msgRep);
        break;

        case "gao":
            message.channel.send("", {
                file: "imgs/Gao.jpg"
            });
        break;

        case "haikyuu":
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


        case "video":
            //Diamond Fusion 3 fois parce que c'est la meilleure
            var videos = ["https://youtu.be/Cj17Lh3QAM8",
                "https://youtu.be/VLNZVGDp9jg",
                "https://youtu.be/WMBdSdUKo6Y",
                "https://youtu.be/WMBdSdUKo6Y",
                "https://youtu.be/WMBdSdUKo6Y",
                "https://youtu.be/aoCPwWt_wr4",
                "https://youtu.be/yacHD29uSVc",
                "https://youtu.be/DBSZIt9z9eg",
                "https://youtu.be/kkIWH6dHRYE",
                "https://youtu.be/stz_2EpFvgE"
                ];

            var n = videos.length;

            var i = Math.floor(Math.random() * n);

            message.channel.send(videos[i]);
        
        break;

        case "nope":
            message.channel.send("Yada.", {
                file: "imgs/nope.jpg"
            })
        break;

        // case 'zerochan':
        //     var ze = "https://www.zerochan.net/"
        //     message.channel.send(ze+"")

    }
});

// Décommenter bot.login si en local avec node Ten-nii.js
// Et commenter bot.login

// bot.login(auth.token)
bot.login(process.env.token)