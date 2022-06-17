import { Model, DataTypes } from 'sequelize';
import { database } from '../config/connection.js';

export class Estudiante extends Model {
    id;
    nombre;
    codigo;
    direccion;
    activo;
}



Estudiante.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        codigo: {
            type: DataTypes.STRING,
            allowNull: false
        },
  
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },

        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
    },
    {
        tableName: "estudiantes",
        sequelize: database,
        timestamps: true
    }
)