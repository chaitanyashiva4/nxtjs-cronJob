import { NextApiRequest, NextApiResponse } from 'next';
import cron from 'node-cron';

// Function to be executed every minute
const performTask = () => {
  console.log('Cron job running every minute');
  // Add your desired task here
};

// Define the cron job to run every minute
cron.schedule('* * * * *', () => {
  performTask();
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Cron job started' });
}