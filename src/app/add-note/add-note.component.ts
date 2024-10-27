import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router for navigation
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']  // Corrected styleUrls
})
export class AddNoteComponent {
  //create form group for reactive forms
  noteForm: FormGroup;


  // Inject the Router service, Form builder and Note service in the constructor
  constructor(private router: Router, private fb: FormBuilder,    private noteService: NoteService, ) {
      this.noteForm = this.fb.group({
        title: [''],
        text: ['']
      });
    }
  

  // Method to handle form submission create note and bind it with form input
    addNote() {
      const newNote = {
        id: Date.now(), // Automatically set the new id
        title: this.noteForm.get('title')?.value,
        text: this.noteForm.get('text')?.value
      };
  
      // Add the new note to the array
      this.noteService.addNote(newNote);
    // Perform your form submission logic here

    // Navigate to the 'header' component
    this.router.navigate(['/list']);
  }
}
