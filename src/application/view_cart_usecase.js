class ViewCartUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository
  }

  async execute(userId) {
    if (!userId) {
      throw new Error('User ID is required')
    }

    const items = await this.cartRepository.getCartItems(userId)
    return items
  }
}

export default ViewCartUseCase