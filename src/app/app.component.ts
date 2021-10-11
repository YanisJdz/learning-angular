import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularOpenClassRooms';
  isAuth = false;

  lastUpdate: Promise<Date> = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      )
    }
  )

  appareils = [
    {
      name: "iPhone",
      statut: "Off"
    },
    {
      name: "Machine à laver",
      statut: "On"
    },
    {
      name: "Téléphone",
      statut: "Off"
    }
]
  constructor(){
    setTimeout(
      ()=> {
        this.isAuth = true
      }, 4000
    )
  }
  onAllumer(){
    
  }
}
