/*eslint no-unused-expressions: 0*/
/*global describe, it*/

/**
 * Module dependencies
 */

var app = require('../server/index/index');
var request = require('supertest').agent(app.listen());

/**
 * Test
 */

describe('render', function () {
  describe('when GET /', function () {
    it('should return html', function (done) {
      request
        .get('/')
        .set('Host', 'site.dev')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });
  });
  describe('when GET /search', function () {
    it('should return html', function (done) {
      request
        .get('/search')
        .set('Host', 'site.dev')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });
  });
  describe('when GET /settings', function () {
    it('should return html', function (done) {
      request
        .get('/settings')
        .set('Host', 'site.dev')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });
  });    
  describe('when GET /404', function () {
    it('should return html', function (done) {
      request
        .get('/')
        .set('Host', 'site.dev')
        .expect('Content-Type', 'text/html; charset=utf-8')
        .expect(200, done);
    });
  });
});
