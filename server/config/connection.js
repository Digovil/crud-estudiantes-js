import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// ============================
//  Base de datos
// ============================

// Nombre base de datos
const DB_NAME = process.env.DB_NAME || "uniguajira";

// Nombre de usuario
const DB_USER = process.env.DB_USER || "root";

// Contraseña
const DB_PASS = process.env.DB_PASS || "";

const DB_HOST = process.env.DB_HOST || "localhost";

const DB_PORT = process.env.DB_PORT || 3306;


export const database = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
    host: DB_HOST,
    dialect: "mysql",
    port: DB_PORT
});

database.sync({force:true})
    .then(function () {
        console.log("Base de datos creada correctamente... !!!");
    });
