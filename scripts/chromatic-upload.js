
const path = require("path");
const dotenv = require("dotenv");
const env = dotenv.config({path: path.join(__dirname, "../.env") }).parsed;
const exec = require("child_process").exec;

const res = exec(`npx chromatic --project-token ${env.CHROMATIC_TOKEN}`);
console.log(res);


