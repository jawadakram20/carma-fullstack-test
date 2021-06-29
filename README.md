## Run Carma test app

1. Clone the project, change into the directory and install the dependencies.

1.1. Install Sequelize CLI globally.
1.2. Set postgress db user name and password in server/config/config.json to create and connect with database.

2. Start the server

   Start only backend Server using:

   ```bash
   npm run server
   ```

   Start React application with the command:

   ```bash
   npm start
   ```

   Start both front end and backend together with the command:

   ```bash
   npm run dev
   ```

   React application will run on port 3000 and the server port 3001.

## Notes.

Not all validations are written. 
1- Card number and cvv are validated to some extent.
2- Expiry date is not validated at all so for now the strict format should be used like `2023/02`. Where first entry denotes year and second one denotes month.