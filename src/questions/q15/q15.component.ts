import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q15',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  standalone: true,
  templateUrl: './q15.component.html',
  styleUrl: './q15.component.css'
})
export class Q15Component {
  formData = {
    additionalInfo: '',
  }
 
  logData() {
 console.log(this.formData);
  }
}
