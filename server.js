const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3001;
const sessionSecret = process.env.SESSION_SECRET;

// Set up Handlebars view engine
app.engine('handlebars', engine({
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views', 'partials')
}));

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000, // 1 hour
    secure: false,
    httpOnly: true,
  },
}));

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
// app.use('/logout', logoutRoutes);

app.get('/', (req, res) => res.redirect('/login'));
app.get('/login', (req, res) => res.render('login', { title: 'TechBlog | Login' }));
app.get('/signup', (req, res) => res.render('signup', { title: 'TechBlog | Sign' }));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Database connection and server start
sequelize.sync()
  .then(() => {
    console.log('Database synchronized successfully');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });
