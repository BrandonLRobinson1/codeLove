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
  // buffer is a representation of that file in memory
  console.log('resize hit!!!', req.file);
  if (!req.file) return next();
  const fileExt = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${fileExt}`;
  // resize
  // pass below eith a file path or a buffer, promise based
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`../savedPhotoz/${req.body.photo}`);
  // once photo is written to file sysem, continue
  return next();
};