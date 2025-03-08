import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q8',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q8.component.html',
  styleUrl: './q8.component.css',
  standalone: true,
})
export class Q8Component {
  formData = {
    dressingDifficulties: '',
    dressingCondition: '',
  }
  setdressingDifficulties(value: string) {
    this.formData.dressingDifficulties = value;
    if (value === 'No') {
      setTimeout(() => {
          const question9 = document.getElementById('question9');
          if (question9) {
              question9.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
  }
  }
  setDressingCondition(value: string) {
    this.formData.dressingCondition = value;
  }
}
