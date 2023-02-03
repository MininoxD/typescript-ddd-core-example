import assert from 'assert'
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber'
import * as request from 'supertest'
import { Test, TestingModule } from '@nestjs/testing'
import { AppModule } from '../../../../../../../src/apps/rest/app.module'
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface'
let _request: request.Test
let _response: request.Response
let application: INestApplication

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.getHttpServer()).get(route)
})

Given(
  'I send a PUT request to {string} with body:',
  (route: string, body: string) => {
    _request = request(application.getHttpServer())
      .put(route)
      .send(JSON.parse(body))
  }
)

Given(
  'I send a POST request to {string} with body:',
  (route: string, body: string) => {
    _request = request(application.getHttpServer())
      .post(route)
      .send(JSON.parse(body))
  }
)

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status)
})

Then('the response should be empty', () => {
  assert.deepEqual(_response.body, {})
})

Then('the response content should be:', (response) => {
  assert.deepEqual(_response.body, JSON.parse(response))
})

BeforeAll(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile()
  application = moduleFixture.createNestApplication()
  await application.init()
})

AfterAll(async () => {
  await application.close()
})
