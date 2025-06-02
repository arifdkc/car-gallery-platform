const env = require('dotenv').config();
const jasonwebtoken = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60; // 3 gün
const createToken = (id) => {
  return jasonwebtoken.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

const login_get = (req, res) => {
  res.render('login', { title: 'Login' });
}   // login sayfasını render et

const login_post = async (req, res) => {
    const { username, password } = req.body; // gelen verileri al
    try {
       if (username ===process.env.username_admin && password === process.env.password_admin) { // admin kontrolü
            const token = createToken(username); // token oluştur
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }); // cookie'yi ayarla
            res.redirect('/admin');
      
        }
        else{
            res.status(401).json({ error: 'Invalid credentials' }); // hata varsa döndür
        }

    } catch (error) {
        res.status(400).json({ error: error.message }); // hata varsa döndür
    }
    }

const logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 }); // cookie'yi sil
  res.redirect('/'); // anasayfaya yönlendir
}



module.exports = {
  login_get,
  login_post,
  logout_get,

};