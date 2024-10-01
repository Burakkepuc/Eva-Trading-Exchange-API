# EvaExchange Trading API

## Project Description

EvaExchange is an arbitrage trading game developed by a startup named “Super Traders.” The primary goal of the application is to educate users on the terminology and concepts used in share trading. The project allows users to register shares, update their prices, and execute trading operations (BUY/SELL) using a RESTful API.

### Features:

- Users can register and log in to their accounts.
- Each user has a portfolio for trading shares.
- Shares are uniquely identified by a 3-character uppercase symbol.
- Users can buy and sell shares based on the latest prices in the database.

## Directory Structure

```
|—— .babelrc
|—— .env
|—— .env_sample
|—— .gitignore
|—— .sequelizerc
|—— api
|    |—— app.js
|    |—— controllers
|        |—— authController.js
|        |—— stockController.js
|        |—— transactionController.js
|        |—— userController.js
|    |—— helpers
|        |—— token.js
|    |—— middlewares
|        |—— notFound.js
|    |—— routes
|        |—— auth.js
|        |—— index.js
|        |—— stocks.js
|        |—— transactions.js
|        |—— users.js
|    |—— services
|        |—— authService.js
|        |—— stockService.js
|        |—— transactionService.js
|        |—— userService.js
|    |—— validations
|        |—— authValidation.js
|        |—— transactionValidation.js
|        |—— userValidation.js
|—— package-lock.json
|—— package.json
|—— postman_collection
|    |—— Eva-Trading-API.postman_collection.json
|—— src
|    |—— config
|        |—— config.js
|    |—— migrations
|        |—— 20240928124111-create-users.js
|        |—— 20240928124216-create-stocks.js
|        |—— 20240928124338-create-user-stocks.js
|        |—— 20240928124733-create-transactions.js
|    |—— models
|        |—— index.js
|        |—— stocks.js
|        |—— transactions.js
|        |—— users.js
|        |—— userstocks.js
|    |—— seeders
|        |—— 20241001182830-add-stocks.js
|        |—— 20241001191107-add-users.js
|        |—— 20241001191505-add-userstocks.js
|        |—— 20241001191641-add-transactions.js
|—— __test__
|    |—— auth.test.js
```

## Scripts

- **`npm install`**: Install node packages.
- **`npm run dev`**: Runs the application in development mode using `nodemon`.
- **`npm run migrate`**: Executes database migrations using `sequelize`.(Deletes everyting in db first be careful)
- **`npm run seed`**: Seeds the database using `sequelize`(Deletes everyting in db first be careful).
- **`npm run test`**: Runs the test suite using `jest`.

## API Endpoints

### Authentication

- **POST** `api/auth/register` - Registers a new user. (Handled by `AuthController.register`)
- **POST** `api/auth/login` - Logs in an existing user. (Handled by `AuthController.login`)

### Stocks

- **GET** `api/stocks/getAll` - Retrieves all registered stocks. (Handled by `StockController.getAll`)

### Transactions

- **POST** `api/transactions/buy/:stockId` - Executes a BUY transaction for a specified stock. (Handled by `TransactionController.buy`)
- **POST** `api/transactions/sell/:stockId` - Executes a SELL transaction for a specified stock. (Handled by `TransactionController.sell`)

### Users

- **GET** `api/users/getUserStocks` - Retrieves all stocks in the user's portfolio. (Handled by `UserController.getUserStocks`)
- **PUT** `api/users/updateBalance` - Updates the user's balance. (Handled by `UserController.updateBalance`)

## Testing

To test the API, a Postman collection is provided:

- **Postman Collection**: [Eva-Trading-API.postman_collection.json](./postman_collection/Eva-Trading-API.postman_collection.json)

## Database Initialization

This project uses Sequelize as the ORM and can be initialized with bulk insert/update operations. You can find the migration and seed files in the `src/migrations` and `src/seeders` directories, respectively.

## Technologies Used

- **Node.js**
- **Express**
- **Sequelize ORM**
- **PostgreSQL**

## Conclusion

This API serves as the backend for the EvaExchange trading application, enabling users to interact with shares effectively and securely.
