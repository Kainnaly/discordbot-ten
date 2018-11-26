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

    // console.log("Message : " + message.content);
    // console.log(message.content.startsWith(prefix));
    // console.log("indexof<@4... : " + message.content.indexOf("<@492396386906800148>"));
    // console.log("indexof@Ten... : " + message.content.indexOf("@Ten-nii"));
    // console.log("");


    if ( (!message.content.startsWith(prefix)) && 
        (message.content.indexOf("<@492396386906800148>") < 0) &&
        (message.content.indexOf("@Ten-nii") < 0) ) {
        console.log("Return");
        console.log("");
        if (message.content == "stroustrup.") {
            message.channel.send("STROUSTRUP.");
        }
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

    // var args = message.content.split(" ");
    var args = message.content.split(" ");
    
    // console.log("args : " + args + ". Taille : " + args.length)

    // var cmd = args.shift().toLowerCase();



    if (args.length>1) {
        var deux = (args[0] + " " + args[1]).toLowerCase()
        // console.log("Deux : " + deux);
        switch(deux) {
            case "t'es beau":
                if (message.author.username == "Xeljira") {
                    message.channel.send("Merci.")
                } else {
                    message.channel.send("Ah ... Merci. Mais pas autant que toi. ")
                }
            break;
        }

        switch(message.content.toLowerCase()) {
            case "ça va ?":
            case "ca va ?":
                message.channel.send("Je vais bien. ")
            break;
        }
        
    } else if (args.length == 0 || message.content == "") {
        message.channel.send("... ? Un problème ?")
    } else {

        var cmd = args[0].toLowerCase();

        // console.log("cmd : " + message.content)

        // if (args>1) {
            // console.log(args.length);
            // console.log("cmd : " + cmd)
        // }

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
                msgRep += "Mon préfixe est `*/`. \n"
                msgRep += "Pour l'instant mes commandes sont : \n"
                msgRep += "`ping` : renvoi pong \n"
                msgRep += "`pong` : renvoi ping \n"
                msgRep += "`gao` : gentil petit dinosaure \n"
                msgRep += "`haikyuu` : meme aléatoire d'Haikyuu!! \n"
                msgRep += "`video` : envoi une vidéo de IDOLiSH7/TRIGGER/Re:vale \n"
                msgRep += "`nope` : nope. \n"
                msgRep += "`flip_table` : marre. \n"
                msgRep += "`F` : Press F to pay respect. "
                message.reply(msgRep);
            break;

            case "gao":
                var auteurs = ['<https://twitter.com/ucnr_senasan>','']
                var imgs_gao = ['imgs/GaoRiku.jpg','imgs/Gao.jpg']

                var n = imgs_gao.length;

                var i = Math.floor(Math.random() * n);

                message.channel.send(auteurs[i], {
                    file: imgs_gao[i]
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

            case "flip_table":
                message.channel.send("", {
                    file: "imgs/flip_table.png"
                });
            break;

            case "salut": 
            case "bonjour":
            case "hey": 
            case "yosh":
            case "yop":
                message.channel.send("Bonjour.");
            break;

            case "f":
            case "F":
                message.channel.send("", {
                    file: "imgs/F.jpg"
                });

            // case 'zerochan':
            //     var ze = "https://www.zerochan.net/"
            //     message.channel.send(ze+"")

        }
    }
});

// Décommenter bot.login si en local avec node Ten-nii.js
// Et commenter bot.login

// bot.login(auth.token)
bot.login(process.env.token)