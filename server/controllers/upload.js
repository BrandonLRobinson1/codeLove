import multer from 'multer';

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
      // cant trust file extensions, every single file has a mimeType
      const isPhoto = file.mimetype.startsWith('image/');
      return isPhoto ? next(null, true) : next({ message: `that file type isnt allowed` }, false);
  }
};

export const upload = multer(multerOptions).single('photo');