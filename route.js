const express = require('express')
const router = express.Router()
const { register, saveCropped } = require('./controller');
const multer = require('multer');

const storage  = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now()+'_'+file.originalname)
    }
})

const upload = multer({storage : storage})

router.route('/register').post(upload.single('profile'), register);
router.route('/saveCropped').post(saveCropped);


module.exports = router;