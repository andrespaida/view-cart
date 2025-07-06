# 🛒 View-Cart Service

Microservice for viewing the contents of the shopping cart.

## 🚀 Run Locally

```bash
git clone https://github.com/andrespaida/view-cart.git
cd view-cart
npm start
```

## 🐳 Docker

```bash
docker build -t view-cart .
docker run -dp 8001:8001 view-cart
```

## 📘 Swagger (OpenAPI)

```yaml
paths:
  /cart/view/{userId}:
    get:
      summary: View the shopping cart for a specific user
      parameters:
        - in: path
          name: userId
          required: true
          schema:
            type: string
          description: The ID of the user
      responses:
        '200':
          description: Cart contents retrieved successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  userId:
                    type: string
                  items:
                    type: array
                    items:
                      type: object
                      properties:
                        productId:
                          type: string
                        name:
                          type: string
                        price:
                          type: number
                        quantity:
                          type: integer
        '404':
          description: Cart not found
        '500':
          description: Internal server error
```

## 🧪 Sample Request

```bash
curl http://localhost:8001/cart/view/user1
```