
import { EstudianteController } from "../controller/estudiante.controller.js";

export class EstudianteRouter {
    estudianteController = new EstudianteController();

    routes(app) {
        
        app.get("/mostrar/estudiantes",this.estudianteController.getAllEstudiante);
        app.get("/mostrar/estudiante/:id",this.estudianteController.getOneEstudiante);
        app.post("/crear/estudiante",this.estudianteController.createEstudiante);
        app.patch("/update/estudiante/:id",this.estudianteController.updateEstudiante);
        app.patch("/delete/estudiante/:id",this.estudianteController.deleteEstudiante);

    }
}