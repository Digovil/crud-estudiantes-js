import { Model, DataTypes } from 'sequelize';
import { database } from '../config/connection.js';

export class Estudiante extends Model {
    id;
    nombre;
    codigo;
    correo;
    activo;
}



Estudiante.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        
        codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
  
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },

        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
    },
    {
        tableName: "estudiantes",
        sequelize: database,
        timestamps: true
    }
)