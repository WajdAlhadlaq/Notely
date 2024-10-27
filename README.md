<<<<<<< HEAD
# Notely
========
<h3>Documentation</h3>

<h4>File: <code>notes.ts</code> (Interface)</h4>
<ul>
  <li><strong>Create an Interface</strong></li>
  <ul>
    <li>Define an interface with the following properties:
      <ul>
        <li><code>id</code></li>
        <li><code>title</code></li>
        <li><code>text</code></li>
      </ul>
    </li>
  </ul>
</ul>

<h4>File: <code>note.service.ts</code> (Note Service)</h4>
<ul>
  <li><strong>Import the <code>Note</code> Interface</strong></li>
  <li><strong>Define an Array of Notes</strong>
    <ul>
      <li>Create an array of type <code>Note</code> to store notes data.</li>
    </ul>
  </li>
  <li><strong>Define Service Methods</strong>
    <ul>
      <li><code>getNotes</code>: A function to retrieve all notes.</li>
      <li><code>addNote(note: Note)</code>: A function to add a new note to the array.</li>
    </ul>
  </li>
</ul>

<h4>File: <code>add-note.component.ts</code> (Add Note Component)</h4>
<ul>
  <li><strong>Import Required Modules and Services</strong>
    <ul>
      <li>Import <code>NoteService</code>.</li>
      <li>Import Angular form modules: <code>FormsModule</code>, <code>ReactiveFormsModule</code>, <code>FormGroup</code>, <code>FormControl</code>, <code>Validators</code>, <code>FormBuilder</code>.</li>
    </ul>
  </li>
  <li><strong>Define the <code>noteForm</code></strong>
    <ul>
      <li>Create a form group (<code>noteForm: FormGroup</code>) to handle note inputs.</li>
    </ul>
  </li>
  <li><strong>Constructor Injection</strong>
    <ul>
      <li>Inject the following services into the component’s constructor:
        <ul>
          <li><code>Router</code> for navigation.</li>
          <li><code>FormBuilder</code> to manage the form.</li>
          <li><code>NoteService</code> to interact with the notes.</li>
        </ul>
      </li>
    </ul>
  </li>
  <li><strong>Initialize Form Group</strong>
    <ul>
      <li>Inside the constructor, define <code>noteForm</code> using <code>FormBuilder</code>:
        <pre><code>this.noteForm = this.fb.group({
  title: [''],
  text: ['']
});</code></pre>
      </li>
    </ul>
  </li>
  <li><strong>Define the <code>addNote()</code> Method</strong>
    <ul>
      <li>Handle form submission:
        <ul>
          <li>Create a constant <code>newNote</code> to store form values.</li>
          <li>Call <code>this.noteService.addNote(newNote);</code> to add the note through the service.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h4>File: <code>note-list.component.ts</code> (Note List Component)</h4>
<ul>
  <li><strong>Import Required Modules</strong>
    <ul>
      <li>Import <code>NoteService</code>.</li>
      <li>Import <code>Note</code> interface.</li>
    </ul>
  </li>
  <li><strong>Define Notes Array</strong>
    <ul>
      <li>Create a <code>notes</code> variable of type <code>Note</code> array to hold the list of notes.</li>
    </ul>
  </li>
  <li><strong>Constructor Injection</strong>
    <ul>
      <li>Inject the <code>NoteService</code> in the constructor.</li>
    </ul>
  </li>
  <li><strong>Assign Notes</strong>
    <ul>
      <li>Call the <code>getNotes</code> method from the service to retrieve and assign notes to the <code>notes</code> variable.</li>
    </ul>
  </li>
</ul>

=========
# MyNote

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
>>>>>>> e53da8e (initial commit)
