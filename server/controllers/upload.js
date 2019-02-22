import multer from 'multer';
import jimp from 'jimp';
import uuid from 'uuid';

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
      // cant trust file extensions, every single file has a mimeType
      const isPhoto = file.mimetype.startsWith('image/');
      return isPhoto ? next(null, true) : next({ message: `that file type isnt allowed` }, false);
  }
};

export const upload = multer(multerOptions).single('photo'); // calls next automatically

export const resize = async (req, res, next) => {
  console.log('resize hit!!!');
  // multer will pul file eon req IF it exist
  return !req.file ? next() : 'xx';
};