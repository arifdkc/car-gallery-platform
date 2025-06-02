const mongoose = require('mongoose');
const Car = require('../module/cars');

// Admin paneli sayfasını render etme
exports.getAdminPage =async (req, res) => {
 try {
        // Veritabanından arabaları al
        const cars = await Car.find();  // Asenkron işlemi beklemek için await kullandık

        // cars verisini cars.ejs dosyasına gönder
        res.render('admin', { cars: cars });
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu!');
    } // admin.ejs sayfasını render et
};

// Araba ekleme işlemi
exports.addCar = async (req, res) => {
    try{
    const { title, brand, model, year, fuelType, price, gear, km, description, packet, color, horsePower, engine, caseType, plate, damage, adverdNumber } = req.body;

    // Görsel yükleme işlemi
    const imagePaths = req.files.map(file => `/uploads/${file.filename}`);

    const newCar = new Car({
        title,
        brand,
        model,
        year,
        fuelType,
        price,
        gear,
        km,
        image: imagePaths, // Görseller dizisi olarak kaydediliyor
        description,
        packet,
        color,
        horsePower,
        engine,
        caseType,
        plate,
        damage,
        adverdNumber
    });

        await newCar.save();
        const cars = await Car.find()
        res.redirect('/admin'); // Başarılıysa admin sayfasına yönlendir
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu!');
    }
};
