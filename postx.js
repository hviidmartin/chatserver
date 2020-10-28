// postx.js
const fetch = require('node-fetch');

let beskedUrl = 'http://localhost:8080/beskeder';

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.json();
}

async function main(url) {
    try {
        let respons = await post(url, { navn: 'Ida', rum: 'xxx', tekst: 'Hello world', nr: 1});
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    process.exit();
}
main(beskedUrl);