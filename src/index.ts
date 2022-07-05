import express from 'express';
import router from './router';
import 'dotenv/config';

const start = async () => {
    const app = express();
    const port = process.env.HTTP_LISTENING_PORT ?? 5000;
    app.set('views', 'src/views');
	app.set('view engine', 'ejs');
    app.use(router);
    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
     });
}
start()