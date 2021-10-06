import { articles } from '../../../data'

// API to send articles in data file.  Could come from anywhere, a database or other
export default function handler(req, res) {
    res.status(200).json(articles)
}