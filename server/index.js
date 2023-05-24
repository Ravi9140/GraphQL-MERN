const express = require("express");
const colors = require("colors");
require("dotenv").config();
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

//Connect to Database
connectDB();

//Cors for Cross origin requests i.e from localhost:3000 (frontend) to localhost:5000(backend)
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV == "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
