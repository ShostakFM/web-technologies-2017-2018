import express from 'express'
import { index } from '../controllers/index'

const router = express.Router()

router.get('/', index.all)
router.get('/search/:name', index.search)
router.get('/sort', index.sort)
router.get('/page', index.page)
router.get('/movies/:id', index.id)

export default router
