let express = require("express");
let app = express();
const fs = require ("fs-extra")
const http = require('http');
const { tmpdir } = require("os");
const router = express.Router();
const Jimp = require('jimp');
const port = process.env.PORT || 3000;
let {
    toBuffer
} = require("qrcode");
const CryptoJS = require("crypto-js");
console.log("Starting...")
const {
    delay,
    useMultiFileAuthState,
    BufferJSON,
    fetchLatestBaileysVersion,
    Browsers,
    default: makeWASocket
    } = require("@whiskeysockets/baileys")
    const pino = require("pino");
    let PORT = process.env.PORT || 3030;
    const PastebinAPI = require("pastebin-js"),
    pastebin = new PastebinAPI("h4cO2gJEMwmgmBoteYufW6_weLvBYCqT");

    app.use("/", (req, res) => {
      
        async function XAsena() {
            try {
                let {
                    version, isLatest
                } = await fetchLatestBaileysVersion()
              let tempfolder = tmpdir()
                const {
                    state, saveCreds
                } = await useMultiFileAuthState(tempfolder)
                const session = makeWASocket({
                    logger: pino({
                        level: 'silent'
                    }),
                    printQRInTerminal: false,
                    browser: Browsers.macOS("Desktop"),
                    auth: state,
                    version
                })
                //------------------------------------------------------

                session.ev.on("connection.update", async (s) => {
                    if (s.qr) {
Jimp.read(await toBuffer(s.qr), (err, image) => {
  if (err) throw err;
  image.write('qr.png');
  console.log("image saved")
})
                      await delay(2000)
                        let qr = fs.readFileSync("./qr.png")
  res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Image in HTML</title>
        </head>
        <body>
        <h1>Scan the Qr Code</h1>
        <img src= "data:image/png;base64, ${Buffer.from(qr).toString('base64')}" alt="Qr code" width="300" height="300">
        </body>
      </html>
    `)
     
                       // res.end(await toBuffer(s.qr));
                    }
                    const {
                        connection,
                        lastDisconnect
                    } = s
                    if (connection == "open") {
                        const authfile = `${tempfolder + "/creds.json"}`
                        await delay(1000 * 10)

                        let link = await pastebin.createPasteFromFile(
                            authfile,
                            "XAsena",
                            null,
                            0,
                            "N"
                        );
                        let data = link.replace("https://pastebin.com/", "");
                        let code = btoa(data);
                        var words = code.split("");
                        var ress = words[Math.floor(words.length / 2)];
                        let c = code.split(ress).join(ress + "_SHADOW_");
                        await session.sendMessage(session.user.id, {
                            text: `${c}`
                        })
                        await session.sendMessage(session.user.id, {
                            text: `\n*ᴅᴇᴀʀ ᴜsᴇʀ ᴛʜɪs ɪs ʏᴏᴜʀ sᴇssɪᴏɴ ɪᴅ*\n◕ ⚠️ *ᴘʟᴇᴀsᴇ ᴅᴏ ɴᴏᴛ sʜᴀʀᴇ ᴛʜɪs ᴄᴏᴅᴇ ᴡɪᴛʜ ᴀɴʏᴏɴᴇ ᴀs ɪᴛ ᴄᴏɴᴛᴀɪɴs ʀᴇǫᴜɪʀᴇᴅ ᴅᴀᴛᴀ ᴛᴏ ɢᴇᴛ ʏᴏᴜʀ ᴄᴏɴᴛᴀᴄᴛ ᴅᴇᴛᴀɪʟs ᴀɴᴅ ᴀᴄᴄᴇss ʏᴏᴜʀ ᴡʜᴀᴛsᴀᴘᴘ*`
                        })

                        await session.sendMessage(session.user.id, {
                            document: {
                                url: authfile
                            },
                            fileName: "creds.json",
                            mimetype: "application/json",
                        });
                        await delay(3000)
                            fs.unlinkSync(tmpfolder);
       // process.exit(0)
                      res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="refresh" content="5;url=/">
          <title>Image in HTML</title>
        </head>
        <body>
        <h1>Check your WhatsApp to get session Id</h1>

        </body>
      </html>
    `)
                      
                    }
                    if (
                        connection === "close" &&
                        lastDisconnect &&
                        lastDisconnect.error &&
                        lastDisconnect.error.output.statusCode != 401
                    ) {
                        XAsena()
                    }
                })
                session.ev.on('creds.update',
                    saveCreds)
                await delay(3000 * 10);
                session.ev.on("messages.upsert",
                    () => {})

            }catch(err) {
                console.log(
                    err + "Unknown Error Occured Please report to Owner and Stay tuned"
                );
            }


        }
        XAsena()

    })

const server = http.createServer(app);
server.listen(port);

module.exports = router;
