import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q10',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q10.component.html',
  styleUrl: './q10.component.css',
  standalone: true,
})
export class Q10Component {
  formData = {
    readingDifficulties: '',
    readingCondition: '',
  }
  setReadingCondition(value: string) {
    this.formData.readingCondition = value;
  }
}
