import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'
import { logger } from '../utils/Logger'

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getAllBurgers)
            .post('', this.createBurger)
    }


    async getAllBurgers(req, res, next) {
        try {
            logger.log('Burgers controller is getting')
            const burgers = await burgersService.getAllBurgers()
            return res.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(req, res, next) {
        try {
            logger.log('create burger')
            const burgerData = req.body
            const burger = await burgersService.createBurger(burgerData)
            return res.send({ message: 'Deliciousness Created', result: burger })
        } catch (error) {
            next(error)
        }
    }




}