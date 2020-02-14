import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() id: string;

  public badgeClass: string;
  public nombre: string;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.updateApiData(this.id);
  }

  private updateApiData(id: string) {
    if (!id) {
      this.nombre = '';
      this.badgeClass = '';
      return;
    }
    this.apiService.get(`estilos/${this.id}`).subscribe((cur: any) => {
      this.nombre = cur.nombre;
      this.badgeClass = cur.class;
    });

  }

}
