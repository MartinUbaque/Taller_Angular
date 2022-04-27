import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../serie.service';


@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> =[];
  promedio: number =0;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    var suma=0;
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;
      series.forEach(function (serie) { return suma = suma + serie.seasons; });
      this.promedio = suma / series.length;
    });
  }

  ngOnInit(): void {
    this.getSeries();
  }

}

