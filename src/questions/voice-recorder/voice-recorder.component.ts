import { Component, EventEmitter, Output, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-voice-recorder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <button type="button" class="btn btn-danger btn-lg" (click)="toggleRecording()">
      🎤 {{ isRecording ? 'Stop Recording' : 'Record' }}
    </button>

    
  `,
  styleUrls: ['./voice-recorder.component.css']
})
export class VoiceRecorderComponent {
  @Output() textCaptured = new EventEmitter<string>();
  isRecording = false;
  recordedText = '';
  recognition: any;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private cdr: ChangeDetectorRef) {
    if (isPlatformBrowser(this.platformId)) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = true; 
        this.recognition.interimResults = true; 
        this.recognition.lang = 'en-US';

        this.recognition.onresult = (event: any) => {
          let interimTranscript = '';
          let finalTranscript = '';

          for (let i = 0; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript + ' ';
            } else {
              interimTranscript += transcript;
            }
          }

          this.recordedText = finalTranscript + interimTranscript; 
          this.textCaptured.emit(this.recordedText);
          this.cdr.detectChanges();
        };

        this.recognition.onend = () => {
          this.isRecording = false;
          this.cdr.detectChanges();
        };

        this.recognition.onerror = () => {
          this.isRecording = false;
          this.cdr.detectChanges();
        };
      }
    }
  }

  toggleRecording() {
    if (!this.recognition) {
      alert('Speech Recognition is not supported in this environment.');
      return;
    }

    if (this.isRecording) {
      this.recognition.stop();
    } else {
      this.recordedText = '';
      this.isRecording = true;
      this.recognition.start();
    }
  }
}
