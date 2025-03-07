import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q4',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q4.component.html',
  styleUrl: './q4.component.css',
  standalone: true,
})
export class Q4Component {
  formData = {
    difficulties: '',
    feedingTube: '',
    eatingCondition: '',
  }
  setFeedingTube(value: string) {
    this.formData.feedingTube = value;
  }
  setEatingCondition(value: string) {
    this.formData.eatingCondition = value;
  }
}
