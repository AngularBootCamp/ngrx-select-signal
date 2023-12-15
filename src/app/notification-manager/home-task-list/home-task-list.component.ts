import { AsyncPipe } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  selectDoneHome,
  selectTodoHome,
  homeTaskActions
} from '../../home-tasks.state';
import { TodoListComponent } from '../../todo-list/todo-list.component';

@Component({
  selector: 'app-home-task-list',
  templateUrl: './home-task-list.component.html',
  standalone: true,
  imports: [TodoListComponent, AsyncPipe]
})
export class HomeTaskListComponent {
  done: Signal<string[]>;
  todo: Signal<string[]>;

  checkbox = 'check_box';
  outline = 'check_box_outline_blank';

  constructor(private store: Store) {
    this.done = store.selectSignal(selectDoneHome);
    this.todo = store.selectSignal(selectTodoHome);
  }

  homeTask(task: string, complete: boolean) {
    this.store.dispatch(
      homeTaskActions.setHomeTask({ task, complete })
    );
  }
}
