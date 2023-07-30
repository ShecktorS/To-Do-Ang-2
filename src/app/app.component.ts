import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newTask: string = '';
  taskEdited: string = '';
  list = [
    { title: 'pippo', edit: false, completed: false },
    { title: 'lino', edit: false, completed: false },
    { title: 'sdsd', edit: false, completed: false },
  ];

  ngOnInit(): void {}

  // Per aggiungere un elemento
  addTask = () => {
    if (this.list.some((todo) => todo.title === this.newTask)) {
      alert('La task che stai tentando di inserire esiste già!');
    } else {
      this.list.push({ title: this.newTask, edit: false, completed: false });
      this.newTask = '';
    }
  };

  // Per rimuovere un elemento
  deleteTask = (i: number) => {
    this.list.splice(i, 1);
  };

  changeEditStatus(i: number, edit: boolean) {
    this.list[i].edit = edit;
    this.taskEdited = this.list[i].title;
  }

  editTaskTitle(i: number) {
    this.list[i].title = this.taskEdited;
    this.list[i].edit = false;
  }
}
