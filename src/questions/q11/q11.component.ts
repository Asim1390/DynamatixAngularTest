import { VoiceRecorderComponent } from './../voice-recorder/voice-recorder.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-q11',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q11.component.html',
  standalone: true,
  styleUrl: './q11.component.css'
})
export class Q11Component {
  formData = {
    mixingCondition: '',  
    mixingDifficulties: '',  
  }
  setMixingDifficulties(value: string) {
    this.formData.mixingDifficulties = value;
  
    if (value === 'No') {
      setTimeout(() => {
          const question12 = document.getElementById('question12');
          if (question12) {
              question12.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
    }

  }
  setMixingCondition(value: string) {
    this.formData.mixingCondition = value;
  }
}
