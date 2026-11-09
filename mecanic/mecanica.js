let express = require("express");
let cors = require("cors");
let mysql = require("mysql2");
const app = express();
const PORT = 1000;

app.use(express.json());
app.use(cors());

// Conexión a base de datos explicada por la profe :3
let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Almendra",
    database: "mecanica",
    port: 3306
});

//codigo para saber estado de la conexion 
conectar.connect((error) => {
    if (error) {
        console.log("no se a conectado adecuadamente");
    } else {
        console.log("la conexion ha sido exitosa");
    }
});

// prueba y registro de herramientas 
app.get("/prueba", (req, res) => {
    res.json({ "mensaje": "esto es la prueba para el proyecto de mecanica" });
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});

app.post("/herramientas",(req,res)=>{
    const {nombre,repisa,codigo,area,instructor_encargado}=req.body
    conectar.query("INSERT INTO herramientas (nombre,repisa,codigo,area,instructor_encargado) VALUES(?,?,?,?,?)",
         [nombre, repisa,codigo,area,instructor_encargado],(error,resultado)=>{
            if(error){
                return res.json({"mensaje":"error al pedir prestamo de herramienta"})
            }
            else{
                return res.json({"mensaje":"su herramienta ha sido solicitada correctamente"})
            }
        })
})

app.get("/herramientas",(req,res)=>{
    conectar.query("SELECT * FROM herramientas",(error,resultados)=>{
        if(error){
            return res.json({mensaje:"error al traer datos de las herramientas"})
        }
        else{
            return res.json(resultados)
        }
    })
})

app.listen(PORT, () => {
    console.log("servidor en ejecucion" + PORT)
})