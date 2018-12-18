import { UserDTO } from './../model/user.dto';
import { Injectable   } from "@angular/core";

@Injectable()
export class UserService{
  
    constructor(){

}
    static getUserLogged() : string {
        return "Vanilson"
    }
   
}