const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const tourRoute = require('./routes/Tour.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// database connection
const port = process.env.PORT || 8050;
const dbURI = process.env.MONGODB_CONNECTION_URI;
app.use('/api/tour', tourRoute);

mongoose.set('strictQuery', true);
mongoose
	.connect(dbURI)
	.then(() => app.listen(port, () => console.log(`Listening on port ${port}...`)))
	.catch((err) => console.log(err.message));
