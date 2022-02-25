import {articles} from '../../../data'


export function handler(req, res) {
    res.status(200).json(articles)
}