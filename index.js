const express = require("express");
const app = express();
const mongoose = require("mongoose");

const port = process.env.PORT ||4000;
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
mongoose.connect('mongodb+srv://avenger:12345abc@athercluster.awdnqyl.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser:true,
      useUnifiedTopology:true
    }
  ).then(() => {
  
    console.warn("connection successful");
  });

// mongoose.connect("mongodb://127.0.0.1:27017/ECOM");

//user routes
const user_routes = require("./routes/userRoute");

app.use("/api", user_routes);

//store routes
const store_routes = require("./routes/storeRoute");
app.use("/api", store_routes);

//category routes
const category_routes = require("./routes/categoryRoute");
app.use("/api", category_routes);

//subcategory routes
const subcategory_route = require("./routes/subCategoryRoute");
app.use("/api", subcategory_route);

//product routes
const product_routes = require("./routes/productRoute");
app.use("/api", product_routes);

//common route
const common_route = require("./routes/commonRoute");
app.use("/api", common_route);



//cart route
const cart_route = require("./routes/cartRoute");
app.use("/api", cart_route);

//address route
const address_route = require("./routes/addressRoute");
app.use("/api", address_route);

//buy product routes
const buy_product_route = require("./routes/buyProductRoute");
app.use("/api", buy_product_route);

app.listen(4000, function() {
  console.log("Server is ready");
});

// sadshds ac