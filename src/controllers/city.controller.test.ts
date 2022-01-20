import  request from 'supertest';
import { App } from "../app";
import HttpStatus from 'http-status-codes';
import { Express } from 'express-serve-static-core';

jest.useFakeTimers();

let app: Express;

beforeAll(() => {
  app = new App(5000).express;
})

//afterAll(() => server.close());


test("it should get all cities", async () => {
 
    const response = await request(app).get('/city/');

    expect(response.status).toEqual(HttpStatus.OK);
  });