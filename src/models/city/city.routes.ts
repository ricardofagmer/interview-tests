import express from 'express'
import { CityController } from '../../controllers/city.controller';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

class CityRouter {
    
    public router;
    
    constructor() {
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './public/');
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + "_" + file.originalname);
            }
        });

        const upload = multer({ storage: storage });

        this.router = express.Router({ mergeParams: true});

        this.router.route(`/`)
                   .get((req, res) => new CityController().index(req, res))
                   .post((req, res) => new CityController().create(req, res));

        this.router.route('/:id/item')    
                   .get((req, res) => new CityController().show(req, res))
                   .patch( (req, res) => new CityController().update(req, res))               
                   .delete((req, res) => new CityController().delete(req, res));

        this.router.get(`/personable`, (req, res, next) => new CityController().personable(req, res));
        this.router.get(`/count`, (req, res, next) => new CityController().count(res));
    
        this.router.post('/upload', upload.single('file'), (req, res, next) => {
            res.status(200).send();
        });

        this.router.get(`/file`, (req, res) => {
         // res.writeHead(200, {"Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"})
         // fs.createReadStream(path.join(__dirname, '..', '..', '..',`/public/${req.query.file}`)).pipe(res);
          res.status(200).sendfile(path.join(__dirname, '..', '..', '..', `/public/${req.query.file}`));
        });
    }
    
}
export default new CityRouter().router;