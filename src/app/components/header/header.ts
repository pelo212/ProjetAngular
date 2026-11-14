import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  title = 'Ma liste de tâches';

  renommer() {
    this.title = 'Mon nouveau titre';
  }

  supprimer() {
    this.title = '';
  }

}