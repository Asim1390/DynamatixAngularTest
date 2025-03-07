import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-q3',
  imports: [FormsModule , CommonModule,VoiceRecorderComponent],
  templateUrl: './q3.component.html',
  styleUrl: './q3.component.css',
  standalone: true,
})
export class Q3Component {
  formData = {
    dailyLiving: {
      needsHelp: '',
      difficulties: ''
    },
  }
  setNeedsHelp(value: string) {
    this.formData.dailyLiving.needsHelp = value;
  }
}
