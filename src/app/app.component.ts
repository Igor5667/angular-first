import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Task } from './Types';
import { v4 as id } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  // templateUrl: './app.component.html',
  template: `
    <p *ngIf="isShown">Very first angular project</p>
    <h1 class="main-header">To do list:</h1>
    <input
      #addInput
      type="text"
      placeholder="add something..."
      (keydown.enter)="addTask(addInput)"
    />
    <button (click)="addTask(addInput)">+</button>
    <ul>
      <li
        *ngFor="let item of listOfTasks"
        (dblclick)="deleteItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <button (click)="hideParagraph()">
      {{ isShown ? 'Hide' : 'Show' }} first text
    </button>
  `,
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
    this.listOfTasks = this.listOfTasks.filter(
      (task) => task !== taskListItem
    );
  }

  addTask(input: HTMLInputElement) {
    this.listOfTasks.push({ id: id(), name: input.value, done: false });
    input.value = '';
  }

  hideParagraph() {
    this.isShown = !this.isShown;
  }
}
