import express from 'express';
import * as admin from 'firebase-admin';
import serviceAccount from '../quickworkers-7a5c1-firebase-adminsdk-xnr7n-b7ad93801e.json'; // Replace with your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://quickworkers-7a5c1-default-rtdb.firebaseio.com/', // Replace with your Firebase database URL
});

const app = express();
app.use(express.json());

// Import your worker routes
import workerRoutes from './routes/admin.route';

// Use your worker routes
app.use('/workers', workerRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
