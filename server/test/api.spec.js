const request = require('supertest');
const server = require('../app');

describe('API server', () => {
    let api;

    beforeAll(()=> {
        // start server and store in api variable
        api = server.listen(5000, () => {
            console.log('Test server running on port 5000');
        });
    });

    afterAll((done) => {
        console.log('Stopping the test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    })

    it('responds to get /artists with status 200', (done) => {
        request(api).get('/artists').expect(200, done);
    })

    it('responds to get /artists/Justin Bieber with status 200', (done) => {
        request(api).get('/artists/Justin Bieber').expect(200, done);
    })

    it('responds to get /artists/query/er with status 200', (done) => {
        request(api).get('/query/er').expect(200, done);
    })

    it('reposnds to get /artists/query/ewofjgwh with status 404', (done) => {
        request(api).get('/query/ewofjgwh').expect(404, done);
    })

    it('responds to get /artists/query/artists with status 200', (done) => {
        request(api).get('/query/artists').expect(200, done);
    })
})