import { BadRequest } from '../utils/Errors'

const FakeDB = {
  burgers: [
    {
      name: 'Basic, plain ol burger',
      id: '0'
    },
    {
      name: 'Cheeseburger',
      id: '1'
    },
    {
      name: 'Ten pounder',
      id: '2'
    }
  ]
}

class BurgersService {
  async getAllBurgers() {
    const burgers = await FakeDB.burgers
    return burgers
  }

  async createBurger(burgerData) {
    burgerData.id = FakeDB.burgers.length.toString()
    await FakeDB.burgers.push(burgerData)
    return burgerData
  }
}

export const burgersService = new BurgersService()