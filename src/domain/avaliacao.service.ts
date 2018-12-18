import { AvaliacaoDTO } from './../model/avaliacao.dto';
import { API_CONFIG   } from './../config/api.config';
import { Injectable   } from "@angular/core";
import { HttpClient   } from "@angular/common/http";
import { Observable   } from "rxjs/Rx";

@Injectable()
export class AvalicaoService{
    constructor(public http: HttpClient){

    }
    findOpened() : Observable <AvaliacaoDTO[]>{
        return this.http.get  <AvaliacaoDTO[]>(`${API_CONFIG.baseUrl}/avaliacao`);
    }
    findscheduled() : Observable <AvaliacaoDTO[]>{
        return this.http.get  <AvaliacaoDTO[]>(`${API_CONFIG.baseUrl}/avaliacao`);
    }
}