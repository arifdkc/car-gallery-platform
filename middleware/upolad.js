const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Dosyaların kaydedileceği klasör
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Dosya adını benzersiz yap
    }
});

const upload = multer({ storage: storage });

module.exports = upload;