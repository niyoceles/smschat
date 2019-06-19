import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

// const baseUrl = 'users';

const { expect } = chai;
// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Create Task', () => {
  describe('POST / Create user successful', () => {
    const tasksData = {
      name: 'Adobe',
      price: '100',
    };
    it('Should return a 201 status', (done) => {
      chai.request(app)
        .post('/users/create')
        .send(tasksData)
        .end((err, res) => {
          // res.should.have.status(201);
          expect(res.status).to.equal(201);
          done();
        });
    });
  });
// view users
  describe('GET/ view users successful', () => {
    const tasksData = {
      name: 'Adobe',
      price: '100',
    };
    it('Should return a 201 status', (done) => {
      chai.request(app)
        .post('/users/create')
        .send(tasksData)
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
  });

  // Update 
  describe('PATCH / Update user successful', () => {
    const tasksData = {
      name: 'Adobe',
      price: '100',
    };
    it('Should return a 201 status', (done) => {
      chai.request(app)
        .post('/users/update')
        .send(usersData)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
