import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VoiceRecorderComponent } from '../voice-recorder/voice-recorder.component';
@Component({
  selector: 'app-what-happens-next',
  imports: [ FormsModule, CommonModule,VoiceRecorderComponent],
  standalone: true,
  templateUrl: './what-happens-next.component.html',
  styleUrl: './what-happens-next.component.css'
})
export class WhatHappensNextComponent {
  formData = {
     additionalInfo2: '',
     noCallTimes: '',
     contactNumber: '',

  }
  logData() {


    console.log(this.formData);
  }
}
