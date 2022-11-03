const Pool = require("pg").Pool;

const model=require("./model")

const pool = new Pool({
 user:"postgres",
  host: "localhost",
  database: "users",
  password: "shri1234",
  port: 5432,
});

const createuser = (req, res) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO candidate (name,email) VALUES ($1,$2) RETURNING * ",
    [name, email],
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }

      res.status(200).json({
        msg: "data created succeffully",
        data: result.rows[0],
      });
    }
  );
};

const creatTopic = (req, res) => {
    const { topic } = req.body;
  
    pool.query(
      "INSERT INTO topics (topic) VALUES ($1) RETURNING * ",
      [topic],
      (err, result) => {
        if (err) {
          console.log(err);
          throw err;
        }
  
        res.status(200).json({
          msg: "data created succeffully",
          data: result.rows[0],
        });
      }
    );
  };

  const creatrank = (req, res) => {
    const { rank, id } = req.body;
  
    pool.query(
      "INSERT INTO rank (rank, id) VALUES ($1, $2) RETURNING * ",
      [rank, id],
      (err, result) => {
        if (err) {
          console.log(err);
          throw err;
        }
  
        res.status(200).json({
          msg: "data created succeffully",
          data: result.rows[0],
        });
      }
    );
  };


const getrank = (req,res) => {
    pool.query('SELECT * FROM rank', (err,result) =>{
        if(err){
            throw err
        }

        res.json({
            data : result.rows
        })
    })
}
const gettopic = (req,res) => {
    pool.query('SELECT * FROM topic', (err,result) =>{
        if(err){
            throw err
        }

        res.json({
            data : result.rows
        })
    })
}




module.exports = {
    createuser,creatTopic,creatrank, getrank,gettopic
}