
import { Estudiante } from "../model/estudiante.model.js";

export class EstudianteController {

    async getAllEstudiante(req,res) {

        try {
            const estudiante = await Estudiante.findAll({
                where:{activo:true}
            });
            res.status(200).json({estudiante});
        } catch (error) {
            
        }
    }

    async getOneEstudiante( req,res) {
        const {id: idParam}= req.params;
        try {
            const estudiante = await Estudiante.findOne(
                {
                    where: {id: idParam, activo: true}
                }
            );
            res.status(200).json({estudiante});
        } catch (error) {
            res.status(500).json({msg:"Error internal"});
            
        }
    }

    async createEstudiante( req,res) {
        const {

            nombre,
            codigo,
            correo,
            activo
        } = req.body;

        try {
            let body = {
                
                nombre,
                codigo,
                correo,
                activo
            }
            const estudiante = await Estudiante.create({...body});
            res.status(200).json({
                ok: true,
                estudiante: {
                    id: estudiante.id,
                    nombre: estudiante.dataValues.nombre,
                    codigo: estudiante.dataValues.codigo,
                    correo: estudiante.dataValues.correo,
                    updatedAt: estudiante.dataValues.updatedAt,
                    createdAt: estudiante.dataValues.createdAt,
                    
                }
            });
        } catch (error){

        }
    }

    async updateEstudiante( req,res) {
        const {id:pk} = req.params;

        const {
            id,
            nombre,
            codigo,
            correo,
            activo
        } = req.body;

        try {
            let body = {
                
                nombre,
                codigo,
                correo,
                activo
            }

            const estudianteExist = await Estudiante.findByPk(pk);
            if(!estudianteExist) return res.status(400).json({mns:"Estudiante no existe"});
            await Estudiante.update(body,{where: {id:pk}});
        }catch (error){

        }

        const estudiante = await Estudiante.findByPk(pk);
        if(estudiante) return res.status(200).json({estudiante});
    }
    
    async deleteEstudiante( req,res) {
        const {id: pk} = req.params;

        // try {
        //     const estudianteExist: EstudianteI | null = await Estudiante.findByPk(pk);
        //     if(!estudianteExist) return res.status(400).json({mns:"Estudiante no existe"});
        //     await Estudiante.destroy({
        //         where: {id:pk}
        //     })

        //     res.status(200).json({msg:"Estudiante eliminado"});
        // } catch (error) {
            
        // }


        const {id} = req.body;

        try {

            const estudianteExist = await Estudiante.findByPk(pk);
            if(!estudianteExist) return res.status(400).json({mns:"Estudiante no existe"});
            await Estudiante.update({activo:false},{where: {id:pk}});

            return res.status(200).json({msg:"Estudiante Eliminado"})
        }catch (error){

        }

        const estudiante = await Estudiante.findByPk(pk);
        if(estudiante) return res.status(200).json({estudiante});
    }
}