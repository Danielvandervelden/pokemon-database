const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

/* Routes */
const routes = require('./routes/routes');

app.set('view engine', 'ejs')

const router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './public')));

app.use(routes);

sequelize.sync(
	// {force: true}
	)
.then(result => {
	app.listen(3000);
})
.catch(err => {
	console.log(error);
})