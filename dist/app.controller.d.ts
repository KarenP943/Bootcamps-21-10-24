import { AppService } from './app.service';
import { Student } from './Entidades/estudents';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getIdentificacion(id: number, name: string, tel: number, Age: number): Student;
}
