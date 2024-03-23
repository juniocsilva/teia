import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';
import { Fotos } from '../../model/fotos.model'
import { dtLanguageDefinitionPt } from '../../model/datatables.model'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent  implements OnInit {
  public fotos: any = []
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>

  constructor(private fotosService:FotosService) { }
  
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: dtLanguageDefinitionPt,
      columnDefs: [
        {width: '1%', targets: [0,1,3]},
        {width: '2%', targets: [3]},
        {width: '20%', targets: [2]}
      ]
    
      
    };

    this.fotosService.getFotos().subscribe((retorno: Fotos) => {
      this.fotos = retorno
      this.dtTrigger.next(null)

    })
  }
}
