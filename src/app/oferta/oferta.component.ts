import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'passarourbano-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.ofertasService.getOfertaById(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      })
  }

}
