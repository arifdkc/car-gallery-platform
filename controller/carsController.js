const mongoose = require('mongoose');
const Car = require('../module/cars');

exports.getCarsPage = async (req, res) => {
    try {
        // Veritabanından arabaları al
        const cars = await Car.find();  // Asenkron işlemi beklemek için await kullandık

        // cars verisini cars.ejs dosyasına gönder
        res.render('cars', { cars: cars });
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu!');
    }
};
exports.getDetail = async (req, res) => {
    const id = req.params.id;
    
    try {
        // Araba detayını id ile al
        const getid = await Car.findById(id);  // Asenkron işlemi bekleyin
        const cars = await Car.find();  // Tüm arabaları da al

        if (!getid) {
            // Eğer araba bulunamazsa
            return res.status(404).render('404', { title: 'Ürün Bulunamadı' });
        }

        // Eğer ürün bulunursa, detaylarıyla birlikte göster
        res.render('detail', { car:getid , title: 'Ürün Detayı' });
    } catch (err) {
        // Hata durumunda 500 hatası göster
        console.error("Hata:", err);
        res.status(500).render('404', { title: 'Hata', message: 'Bir hata oluştu.' });
    }
};
exports.gönderi_delete = async (req, res) => {
    const id = req.params.id;

    // ID geçerli mi kontrol et
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Geçersiz ID' });
    }

    try {
        const result = await Car.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ error: 'Ürün bulunamadı' });
        }

        res.json({ success: true, message: 'Ürün başarıyla silindi' });
    } catch (err) {
        console.error("Silme işlemi sırasında hata oluştu:", err);
        res.status(500).json({ error: 'Silme işlemi başarısız' });
    }
}
