import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/Model/Article';

@Component({
  selector: 'app-addarticle',
  templateUrl: './addarticle.component.html',
  styleUrls: ['./addarticle.component.css']
})
export class AddarticleComponent implements OnInit {
  //article: Article = new Article('','','','','','');

  constructor() { }

  ngOnInit(): void {
  }

}
