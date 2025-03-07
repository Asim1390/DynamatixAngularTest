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
  }
  setMixingCondition(value: string) {
    this.formData.mixingCondition = value;
  }
}
