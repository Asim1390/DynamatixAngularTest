import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-q13',
  imports: [FormsModule, CommonModule,VoiceRecorderComponent],
  templateUrl: './q13.component.html',
  styleUrl: './q13.component.css',
  standalone: true,
})
export class Q13Component {
  formData = {
    planningJourney: '',
    planningDifficulties: '',
  };

  setPlanningJourney(value: string) {
    this.formData.planningJourney = value;
    
    if (value === 'No') {
      setTimeout(() => {
          const question12 = document.getElementById('question14');
          if (question12) {
              question12.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
    }
  }

  setPlanningDifficulties(value: string) {
    this.formData.planningDifficulties = value;
  }
}
