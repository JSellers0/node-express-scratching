import express, {Router, Request, Response} from 'express'

import * as adjustController from '../controllers/adustController'
import {crsfProtection, parseForm} from '../middleware/config'

const adjustRoute:Router = express.Router()

adjustRoute.route('/')
    .get(adjustController.adjust_get)

adjustRoute.route('/:item_type')
    .get(adjustController.item_select_get)

adjustRoute.route('/:item_type/:item_id')
    .get(crsfProtection, adjustController.item_adjust_get)
    .put(parseForm, crsfProtection, adjustController.item_adjust_put)
    .delete(parseForm, crsfProtection, adjustController.item_adjust_delete)

export default adjustRoute