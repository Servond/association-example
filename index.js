const express = require("express");
const port = 3000;

const app = express();
app.use(express.json());

//db
const db = require("./models");
db.sequelize.sync({ alter: true });

//routes
const { userRoutes, cartRoutes, productRoutes } = require("./routes");

//middleware
// app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
// app.use("/product", productRoutes);

app.listen(port, function () {
    console.log(`server is running on localhost ${port}`)
})

