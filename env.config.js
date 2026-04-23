
const path = require('path');
const dotenv = require('dotenv');

const envName = process.env.ENV || 'uat';

dotenv.config({
  path: path.resolve(__dirname, `.env.${envName}`),
  override: true
});

module.exports = {
  BASE_URL: process.env.BASE_URL,
  DASHBOARD_URL : process.env.DASHBOARD_URL,
  APP_USERNAME: process.env.APP_USERNAME,
  APP_PASSWORD: process.env.APP_PASSWORD,
  FACILITY: process.env.FACILITY
};
