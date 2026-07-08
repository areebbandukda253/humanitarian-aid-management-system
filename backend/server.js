import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import donorRoutes from './routes/donors.js';
import donationRoutes from './routes/donations.js';
import beneficiaryRoutes from './routes/beneficiaries.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'));

app.use('/api/donors', donorRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/beneficiaries', beneficiaryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));