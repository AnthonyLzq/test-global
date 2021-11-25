import { Response, Request, Router } from 'express'
import { response } from '../utils'

const Home = Router()

Home.route('')
  .get((req: Request, res: Response) => {
    console.log(globalThis.customGlobalString)
    response(
      false,
      'Welcome to your Express Backend!',
      res,
      200
    )
  })

export { Home }
