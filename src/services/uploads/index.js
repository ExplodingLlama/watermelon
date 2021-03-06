'use strict';

const hooks = require('./hooks');
const dauria = require('dauria');
const path = require('path');

const multer = require('multer');
const multipartMiddleware = multer();

// feathers-blob service
const blobService = require('feathers-blob');
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.

const fs = require('fs-blob-store');
const blobStorage = fs(path.join(__dirname,'../../../public/images'));

module.exports = function(){
    const app = this;

    // Initialize our service with any options it requires
    app.use('/uploads',
        // multer parses the file named 'uri'.
        // Without extra params the data is
        // temporarely kept in memory
        multipartMiddleware.single('uri'),

        // another middleware, this time to
        // transfer the received file to feathers
        function(req,res,next){
            req.feathers.file = req.file;
            next();
        },
        blobService({Model: blobStorage})
    );
    // Get our initialize service to that we can bind hooks
    const uploadsService = app.service('/uploads');

    // Set up our before hooks
    uploadsService.before(hooks.before);

    // Set up our after hooks
    uploadsService.after(hooks.after);
};
