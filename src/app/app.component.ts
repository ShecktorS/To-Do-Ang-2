import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  newTask: string = '';
  // taskEdited: string = '';
  list = [
    { title: 'Prova', edit: false, completed: false, originalTitle: '' },
    {
      title: 'con LocalStorage',
      edit: false,
      completed: false,
      originalTitle: '',
    },
  ];
  storedList: [] = [];

  rewriteStorage = () => {
    localStorage.setItem('list', JSON.stringify(this.list));
  };

  constructor() {}

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('list') || '');
    this.storedList = data;
    this.list = this.storedList;
  }

  ngOnDestroy() {}

  // Per aggiungere un elemento
  addTask = () => {
    if (this.list.some((todo) => todo.title === this.newTask)) {
      alert('La task che stai tentando di inserire esiste già!');
    } else if (this.newTask.length < 1) {
      alert('Non Puoi Inserire una task vuota');
    } else {
      this.list.push({
        title: this.newTask,
        edit: false,
        completed: false,
        originalTitle: '',
      });
      this.newTask = '';
    }

    this.rewriteStorage();
  };

  // Per rimuovere un elemento
  deleteTask = (i: number) => {
    this.list.splice(i, 1);

    this.rewriteStorage();
  };

  changeEditStatus(i: number, edit: boolean) {
    this.list[i].edit = edit;
    this.list[i].originalTitle = this.list[i].title;
  }

  editTaskTitle(i: number) {
    let editedTitle = this.list[i].title;
    this.list[i].title = this.list[i].originalTitle;
    this.list[i].edit = false;
    this.list[i].title = editedTitle;

    this.rewriteStorage();
  }

  changeStatus(i: number) {
    this.list[i].completed = !this.list[i].completed;

    this.rewriteStorage();
  }
}
