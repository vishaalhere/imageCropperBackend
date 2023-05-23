const fs = require('fs');

exports.register = (req, res, next) => {
    try {
        res.send({
            success: true, message: "Account Created Successfully"
        })
    } catch (error) {
        res.send({
            error,
            message: "Failed to Create Account"
        })
    }
}

exports.saveCropped = (req, res, next) => {
    try {
        const { image, name } = req.body;
        const destinationFolder = './cropped';

        const imagePath = `${destinationFolder}/${Date.now()}_${name}`;
        const imageData = image.replace(/^data:image\/\w+;base64,/, '');
        const imageBuffer = Buffer.from(imageData, 'base64');

        fs.writeFile(imagePath, imageBuffer, (err) => {
            if (err) {
                console.error('Error saving image:', err);
            } else {
                console.log('Image saved successfully.');
            }
        });
        res.send({
            success: true, message: "Image Cropped Successfully"
        })
    } catch (error) {
        res.send({
            error,
            message: "Failed to Save Croppd Image"
        })
    }
}