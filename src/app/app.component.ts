import {Component, OnInit} from '@angular/core';
import { APIService } from './API.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  todos: Array<any>;

  async ngOnInit() {
    this.apiService.ListTodos().then((evt) => {
      this.todos = evt.items;
    });

    this.apiService.OnCreateTodoListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateTodo;
      this.todos = [...this.todos, data];
    });
  }

  constructor(private apiService: APIService) {}

  createTodo() {
    this.apiService.CreateTodo({
      name: 'Angular',
      description: 'testing'
    });
  }
}
