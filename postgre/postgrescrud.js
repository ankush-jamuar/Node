import pool from './db.js';

const createmovie = async(id, name, imdb, language)=>{
    await pool.query(
        "insert into movies(id, name, imdb, language) values($1, $2, $3, $4)", [id, name, imdb, language]
    );
    console.log("Data inserted")
};

const updatemovie = async(id, language)=>{
    const result = await pool.query(
        "update movies set language=$2 where id=$1 returning *", [id, language]
    )
    console.log(result.rows)
};

async function main(){
    // await createmovie(5, 'Welcome', 8.2, 'Hindi');    
    // await createmovie(1, 'Dilwale', 6.1, 'Hindi');
    await updatemovie(4, 'Hindi');
    pool.end();
};

main();