const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const path = require('path');
const adminrouter = require('./router/adminRouter');
const carsRouter = require('./router/carsRouter');
const conn = require('./db.js');  // MongoDB bağlantısı
const cookieParser = require('cookie-parser');
const authrouter = require('./router/authRouter'); // auth router'ı ekle
app.use(cookieParser());




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
// MongoDB bağlantısı
conn();

// Görünüm ayarları
app.set('views', './views');
app.set('view engine', 'ejs');

// Statik dosyalar (public ve uploads için)
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware ayarları
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ana sayfa route
app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Router'lar
app.use(carsRouter);
app.use(adminrouter);
app.use(authrouter);

// Sunucu dinlemeye başlıyor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
