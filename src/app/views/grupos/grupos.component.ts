import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit {

  public listaGrupos: Subject<any> = new Subject();
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.query();
  }

  private setGrupos (lista: any) {
    this.listaGrupos.next(lista);
  }

  public query() {
    this.apiService.get('grupos').subscribe((cur) => this.setGrupos(cur));
  }

}
