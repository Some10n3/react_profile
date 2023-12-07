import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

app.use(express.json())

app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Some10n3",
  database: "profile_database"
})

app.listen(8080, () => 
  console.log('Server running on port 8080')
)

app.get('/', (req, res) => {
  const receivedData = req.body;
  res.json({ message: 'Data received successfully' });
})

app.get('/courses', (req, res) => {
  db.query("SELECT * FROM profile_database.courses", (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.send(result)
      // console.log(result)
    }
  })
})