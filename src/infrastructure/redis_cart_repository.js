import CartItem from '../domain/cart_item.js'

class RedisCartRepository {
  constructor(redisClient) {
    this.redisClient = redisClient
  }

  async getCartItems(userId) {
    const items = await this.redisClient.lrange(`cart:${userId}`, 0, -1)
    return items.map(itemStr => {
      const item = JSON.parse(itemStr)
      return new CartItem(item)
    })
  }
}

export default RedisCartRepository