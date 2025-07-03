import express from 'express'
import cors from 'cors'

function createHttpServer(viewCartUseCase) {
  const app = express()
  app.use(cors())
  app.use(express.json())

  app.get('/cart/:userId', async (req, res) => {
    const { userId } = req.params

    try {
      const items = await viewCartUseCase.execute(userId)
      res.json(items)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  })

  return app
}

export default createHttpServer