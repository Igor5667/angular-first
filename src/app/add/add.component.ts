//add.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  @Output()
  submitText = new EventEmitter<HTMLInputElement>()
}
