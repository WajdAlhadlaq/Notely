import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Note } from '../notes';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css'
})
export class NotesListComponent {
notes: Note[] = []; 
  constructor(private noteService: NoteService) {}

  ngOnInit() {
    // Get the notes from the service
    this.notes = this.noteService.getNotes();
  }
}
