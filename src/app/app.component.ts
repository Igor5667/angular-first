//app.component.ts
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './Types';
import { v4 as id } from 'uuid';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, AddComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  listOfTasks: Task[] = [
    { id: id(), name: 'Zrobić to', done: false },
    { id: id(), name: 'Zrobić tamto', done: false },
    { id: id(), name: 'Zrobić i jeszcze tamto', done: false },
  ];

  isShown: boolean = true;

  deleteItem(taskListItem: Task) {
    this.listOfTasks = this.listOfTasks.filter((task) => task !== taskListItem);
  }

  addTask(input: HTMLInputElement) {
    if(input.value==""){return}
    this.listOfTasks.push({ id: id(), name: input.value, done: false });
    input.value = '';
  }

  hideParagraph() {
    this.isShown = !this.isShown;
  }
}
