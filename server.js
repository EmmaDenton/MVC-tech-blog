const express = require('express');
const routes = require('./routes');
const exphbs = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const userRoutes = require('./routes/api/userRoutes');
const loginRoutes = require('./routes/api/loginRoutes')
const eventRoutes = require('./routes/api/eventRoutes');
const userEventRoutes = require('./routes/api/userEventRoutes');
const logoutRoutes = require('./routes/logoutRoutes')


const sessionSecret = process.env.SESSION_SECRET

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, // Session expiration time in milliseconds (1 hour)
    secure: false,
    httpOnly: true,
  },
}));


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully');
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });
