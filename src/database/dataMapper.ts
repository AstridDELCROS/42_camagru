import { Pool } from 'pg'

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: Number(process.env.PGPORT),
})

const dataMapper = {
    getAllPictures: (callback: any) => {
        const queryObj = {
            text: `SELECT * FROM "picture";`
        };
        pool.query(queryObj, (error, result) => {
            if (error) {
                console.log(error);
            }
            let data = [];
            if (result) {
                data = result.rows;
            }
            callback(error, data);
        });
    },
    getOnePicture: (picture_id: number, callback: any) => {
        picture_id = Number(picture_id);
        const queryObj = {
            text: `SELECT * FROM "picture" WHERE id = ${picture_id};`,
            value: [picture_id],
        };
        pool.query(queryObj, (error, result) => {
            if (error) {
                console.log(error);
            }
            let data = [];
            if (result) {
                data = result.rows[0];
            }
            callback(error, data);
        })
    }
}
export default dataMapper;