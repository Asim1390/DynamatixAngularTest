import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';

@Component({
  selector: 'app-q12',
  imports: [FormsModule, CommonModule,VoiceRecorderComponent], 
  templateUrl: './q12.component.html',
  styleUrls: ['./q12.component.css'], 
  standalone: true,
})
export class Q12Component {
  formData = {
    managingMoneyDifficulties: '',
    managingMoneyCondition: '',
  };
  setmanagingMoneyDifficulties(value: string){
    this.formData.managingMoneyDifficulties = value;
  
    if (value === 'No') {
      setTimeout(() => {
          const question12 = document.getElementById('question13');
          if (question12) {
              question12.scrollIntoView({ behavior: 'smooth' });
          }
      }, 100);
    }
  }
  setManagingMoneyCondition(value: string) {
    this.formData.managingMoneyCondition = value;
  }
}
