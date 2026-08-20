import {randomUUID}  from 'node:crypto'
type EmployeeType={

   name : string;
   eamil :string;
   password: string;

}
export default class Employee{
  private id: string;
  private name : string;
  private eamil :string;
  private password: string;

constructor(data: EmployeeType,id?: string){
  this.name = data.name
  this.eamil =data.eamil
  this.password = data.password
  this.id = id??randomUUID
}
}
