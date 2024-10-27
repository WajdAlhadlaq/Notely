import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './add-note/add-note.component';
import { NotesListComponent } from './notes-list/notes-list.component';

const routes: Routes = [// Home page showing job list

  { path: 'list', component   : NotesListComponent },
  {path: 'new', component: AddNoteComponent },
  {path: '', component: NotesListComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
