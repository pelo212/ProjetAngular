import { Component } from '@angular/core';
import { Task } from './components/tasks/tasks';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header,Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}