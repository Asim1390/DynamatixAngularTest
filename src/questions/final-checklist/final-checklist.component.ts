import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-final-checklist',
  imports: [FormsModule , CommonModule],
  templateUrl: './final-checklist.component.html',
  styleUrl: './final-checklist.component.css'
})
export class FinalChecklistComponent {
  checklist = [
    { label: 'Step 1 - Signed your Declaration', checked: false },
    { label: 'Step 2 - Read and understood all the notes', checked: false },
    { label: 'Step 3 - Answered all the questions', checked: false },
    { label: 'Step 4 - Remembered to tear off the letter and notes on the front of the form and keep them safe', checked: false },
    { label: 'Step 5 - Included photocopies of supporting evidence with this form', checked: false },
    { label: 'Step 6 - If you want to, make a copy of your completed form and supporting evidence for you to keep', checked: false }
  ];
  logChecklist() {
    console.log('Checklist:', this.checklist);
  }
}
