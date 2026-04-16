import { NextApiRequest, NextApiResponse } from 'next';

// API endpoint for handling form submissions from the opt-in form
export default async function subscribe(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email } = req.body;

        // Validate email
        if (!email || !email.includes('@')) {
            return res.status(400).json({ message: 'Invalid email address' });
        }

        // Here you can add logic to save the email or handle the subscription
        // For demonstration, we'll just return a success response

        return res.status(200).json({ message: 'Subscription successful!' });
    }

    return res.status(405).json({ message: 'Method not allowed' });
}