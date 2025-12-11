import pool from './db.js';
import express from 'express';
const app = express();
app.use(express.json())
app.post('/movies', async(req, res)=>{
    const {id, name, imdb, language} = req.body;
    const result = await pool.query("insert into movies(id, name, imdb, language) values($1, $2, $3, $4) returning *", [id, name, imdb, language])
    console.log(result.rows);
});

app.listen(3000);