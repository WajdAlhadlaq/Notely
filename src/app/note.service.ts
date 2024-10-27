import { Injectable } from '@angular/core';
//import interface
import { Note } from './notes';
@Injectable({
  providedIn: 'root'
})


export class NoteService {

  //create array of notes
  private notes: Note[] = [
    { id: 1, title: 'sara', text: 'Rrrr' },
    { id: 2, title: 'wajd', text: 'Rrrr' },
    { id: 3, title: 'rahaf', text: 'Rrrr' },
  ];

  //function get notes to display them
  getNotes(): Note[] {
    return this.notes;
  }

  //push notes to the array of type Note
  addNote(note: Note){
    this.notes.push(note);
  }
  constructor() { }
}
