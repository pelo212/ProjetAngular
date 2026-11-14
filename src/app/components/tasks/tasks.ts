import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Task {

  tasks = [
    { id: 1, title: 'Apprendre Angular' },
    { id: 2, title: 'Créer un composant' },
    { id: 3, title: 'Faire les exercices' }
  ];

}