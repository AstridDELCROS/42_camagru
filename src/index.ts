import express from 'express';
import router from './router';
import 'dotenv/config';

const start = async () => {
    const app = express();
    const port = process.env.PORT ?? 5000;
	app.set('view engine', 'ejs');
    app.set('views', './src/views');
    app.use(express.static('./src/public'));
    app.use(express.urlencoded({extended: true}));
    app.use(router);
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
     });
}
start()