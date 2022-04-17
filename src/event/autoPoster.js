const { AutoPoster } = require("topgg-autoposter");
const client = require("../index");

const ap = AutoPoster(`${process.env.AUTO_POSTER}`, client);

async function autoPoster() {
  ap.on("posted", () => {
    console.log(`Stats pushed to https://top.gg/bot/${client.user.id}`);
  });
}
module.exports = { autoPoster };