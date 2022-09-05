'use strict';

const supertest = require('supertest');
const server = require('../server');
const requst = supertest(server.app);

describe('Test Home Route', () => {
    it('Home Route Test', async () => {
        const response = await requst.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("Hello World");
    });
});


describe('Test person route', () => {
    it('person route test', async () => {

        const testData = {
            user: {
                name: "Malek",
                age: 25,
                gender: "male"
            }
        };

        const response = await requst.post('/person').send(testData);

        expect(response.status).toEqual(201);
        // expect(response.headers['content-type']).toEqual(expect.stringContaining('utf-8'));
        expect(response.body.name).toEqual("Malek");
        expect(response.body.age).toEqual(30);
        expect(response.body.gender).toEqual("male");
    })
})

