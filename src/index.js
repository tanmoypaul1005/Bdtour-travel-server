const express = require('express')
const app = express();
require('dotenv').config();
const DataBaseConnect = require("./config/DataBase");
const passport = require("passport");
const bodyParser = require('body-parser');
require("./config/Passport")(passport);


const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize())
//app.use(passport.session())

//DataBase connected
DataBaseConnect()
app.get('/', (req, res) => {
  res.send('Hello World!')
})


// const AdminRoutes=require('./Route/Admin/AdminRoute');
// const UserRoutes=require('./Route/UserRoute');
const CategoryRoute=require('./Route/CategoryRouter');
const ProductRoute=require('./Route/ProductRoute');
const CartRoute=require('./Route/CartRoute');
const AddressRoute=require('./Route/AddressRoute');
const OrderRoute=require('./Route/OrderRoute');
const sslRoute=require('./Route/sslRoute');
const RelatedProductRoute=require('./Route/RelatedProductRoute');
const TourPackageRoute=require('./Route/TourPackageRoute');
const BookingRoute=require('./Route/BookingRoute');
const BlogRoute=require('./Route/BlogRoute');
const HotelRoute=require('./Route/HotelRoute');

// app.use('/api',AdminRoutes);
// app.use('/api',UserRoutes);
app.use('/api',CategoryRoute);
// app.use('/api',ProductRoute);
// app.use('/api',CartRoute);
// app.use('/api',AddressRoute);
// app.use('/api',OrderRoute);
app.use('/api',BookingRoute);
app.use('/api',BlogRoute);
app.use('/api',HotelRoute);
app.use('/api',TourPackageRoute);

app.listen(process.env.PORT, () => {
  console.log(`This app listening on port ${process.env.PORT}`)
})