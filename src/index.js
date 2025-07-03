import redisClient from './config/redis_client.js'
import RedisCartRepository from './infrastructure/redis_cart_repository.js'
import ViewCartUseCase from './application/view_cart_usecase.js'
import createHttpServer from './interfaces/http_server.js'

const repository = new RedisCartRepository(redisClient)
const useCase = new ViewCartUseCase(repository)
const app = createHttpServer(useCase)

const PORT = 8001
app.listen(PORT, () => {
  console.log(`🛒 View Cart service running on http://localhost:${PORT}`)
})