import pool from './db.js';
import express from 'express';
const app = express();
app.use(express.json())
app.post('/movies', async(req, res)=>{
    const {id, name, imdb, language} = req.body;
    const result = await pool.query("insert into movies(id, name, imdb, language) values($1, $2, $3, $4) returning *", [id, name, imdb, language])
    res.send(result.rows);
});

app.get('/movies', async(req, res)=>{
    const result = await pool.query("Select * from movies");
    res.send(result.rows);
});

app.put('/movies/:id', async(req, res)=>{
    const {id} = req.params;
    const {language} = req.body;
    const result = await pool.query("update movies set language=$1 where id=$2 returning *", [language, id]);
    res.send(result.rows);
});

app.delete('/movies/:id', async(req, res)=>{
    const {id} = req.params;
    const result = await pool.query("delete from movies where id=$1 returning *", [id]);
    res.send(result.rows);
})

app.listen(3000);