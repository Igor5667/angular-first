//add.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  template: `
    <div class="flex">
      <input
        #addInput
        type="text"
        placeholder="add something..."
        (keydown.enter)="submitText.emit(addInput)"
        class="rounded-lg p-2 me-3 border border-black hover:bg-slate-200 focus:bg-slate-200"
      />
      <button
        (click)="submitText.emit(addInput)"
        class="buttons h-10 w-10 flex justify-center items-center text-xl"
      >
        <content>+</content>
      </button>
    </div>
  `,
  styleUrl: './add.component.scss',
})
export class AddComponent {
  @Output()
  submitText = new EventEmitter<HTMLInputElement>()
}
