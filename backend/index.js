import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

import commitRoutes from './routes/commitRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP address. Please try again after one minute.',
});

app.use(cors());
app.use(express.json());

app.use('/api', apiLimiter);

app.use('/api/commits', commitRoutes);

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Git-Genius Backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

