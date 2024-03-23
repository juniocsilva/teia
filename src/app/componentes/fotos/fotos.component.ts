import { 
  Component, 
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  ViewChild} from '@angular/core';
import { FotosService } from './fotos.service';
import { Fotos } from '../../model/fotos.model'
import { dtLanguageDefinitionPt } from '../../model/datatables.model'
import { Subject } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent  implements OnInit {
  public fotos: any = []
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject<any>
  public fotoUrl: string = ''


  @ViewChild("modal-foto", { static: true })

  buttonOpenModalCred!: ElementRef<HTMLButtonElement>;

  constructor(private fotosService:FotosService, private cdr: ChangeDetectorRef,) { }
 

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

  abrirModal(url:string) {
    this.fotoUrl = url
     $('#modal-foto').modal('show')
	  
  }
}
