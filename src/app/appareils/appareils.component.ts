import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareils',
  templateUrl: './appareils.component.html',
  styleUrls: ['./appareils.component.scss']
})
export class AppareilsComponent implements OnInit {

  @Input() appareilName: string | undefined;
  @Input() appareilStatut: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  getStatut(){
    return this.appareilStatut;
  }

  getColor(){
    if(this.appareilStatut === 'On'){
      return 'green'
    } else if (this.appareilStatut === 'Off') {
      return 'red'
    }
    else {
      return 'purple'
    }
  }
}
