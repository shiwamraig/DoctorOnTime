import multer from 'multer' //imports the multer library — a Node.js middleware used for handling multipart/form-data, which is mainly used for file uploads.

const storage = multer.diskStorage({
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const upload = multer ({storage})

export default upload
