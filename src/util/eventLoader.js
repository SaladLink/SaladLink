const { glob } = require('glob')
const { promisify } = require('util');

const globPromise = promisify(glob);

module.exports = async () => {

    const eventfiles = await globPromise(`../events/*.js`);
    eventfiles.map((value) => require(value));
    console.log(`Loaded ${eventfiles.length} events`);
}