import { Controller, Get , Param, Query} from '@nestjs/common';
import { AppService } from './app.service';
import { Student } from './Entidades/estudents';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("identificacion/:id/:nombre")
  getIdentificacion(@Param("id") id:number,
                    @Param("nombre") name:string,
                    @Query("telefono") tel:number,
                    @Query("Edad") Age:number) :Student
  {
  return  new Student (id , name,tel,Age)
}
}