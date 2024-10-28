export class Student{
    Numero_id:number; 
    nombre: string;
    telefono: number;
    Edad: number;

    constructor(num: number,
        nom:string,
        tel:number,
        age:number){
        this.nombre =nom;
        this.Edad=age;
        this.telefono =tel;
        this.Numero_id =num
    }
}