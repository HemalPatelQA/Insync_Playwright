//require('dotenv').config();
const env = require('../env.config');

class PLogin{
    #username;
    //private readonly username: string ---TS Change
    #password;
    #registeredEmail;
    #selectPractice;
    #selectUser;
    #signInButtonText;
    #selectFacilityText;

    constructor(){
        this.#username = env.APP_USERNAME;
        this.#password = env.APP_PASSWORD;
        this.#signInButtonText = 'SIGN IN';
        this.#registeredEmail = process.env.registeredEmail;
        this.#selectPractice = process.env.practice;
        this.#selectFacilityText = 'OK';
        this.#selectUser = process.env.user;
    }

    get app_username(){ return this.#username };
    get app_password(){ return this.#password };
    get signInButtonText() { return this.#signInButtonText }
    get registeredEmail(){ return this.#registeredEmail };
    get selectPractice(){ return this.#selectPractice };
    get selectFacilityButtonText() { return this.#selectFacilityText }
    get selectUser(){ return this.#selectUser };
}

module.exports = { PLogin };

