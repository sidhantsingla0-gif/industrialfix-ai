import express from 'express';

const app = express();

app.get('/api/v1/health', (req, res) => {
  res.json({ success: true, data: { status: 'working' } });
});


export default app;