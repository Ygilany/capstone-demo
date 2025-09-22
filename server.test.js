const request = require('supertest');
const app = require('./server');

describe('API Endpoints', () => {
  describe('GET /api/health', () => {
    it('should return health status', async () => {
      const res = await request(app)
        .get('/api/health')
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'OK');
      expect(res.body).toHaveProperty('message', 'Server is running');
    });
  });

  describe('GET /api/tasks', () => {
    it('should return list of tasks', async () => {
      const res = await request(app)
        .get('/api/tasks')
        .expect(200);
      
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /api/tasks', () => {
    it('should create a new task', async () => {
      const newTask = {
        title: 'Test task',
        priority: 'high'
      };
      
      const res = await request(app)
        .post('/api/tasks')
        .send(newTask)
        .expect(201);
      
      expect(res.body).toHaveProperty('id');
      expect(res.body).toHaveProperty('title', 'Test task');
      expect(res.body).toHaveProperty('priority', 'high');
      expect(res.body).toHaveProperty('status', 'todo');
    });

    it('should return 400 if title is missing', async () => {
      const res = await request(app)
        .post('/api/tasks')
        .send({ priority: 'high' })
        .expect(400);
      
      expect(res.body).toHaveProperty('error', 'Title is required');
    });
  });

  describe('PUT /api/tasks/:id', () => {
    it('should update task status', async () => {
      const res = await request(app)
        .put('/api/tasks/1')
        .send({ status: 'completed' })
        .expect(200);
      
      expect(res.body).toHaveProperty('status', 'completed');
    });

    it('should return 404 for non-existent task', async () => {
      const res = await request(app)
        .put('/api/tasks/999')
        .send({ status: 'completed' })
        .expect(404);
      
      expect(res.body).toHaveProperty('error', 'Task not found');
    });
  });
});