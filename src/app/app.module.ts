import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';  // Import your component
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteService } from './note.service';
const routes: Routes = [
  
  { path: 'list', component   : NotesListComponent },
  {path: 'new', component: AddNoteComponent },
  {path: '', component: NotesListComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    NotesListComponent // Other components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,  // Make sure ReactiveFormsModule is imported
    RouterModule.forRoot(routes),
    CommonModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
