import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
	selector: 'app-tasks',
	templateUrl: './tasks.component.html',
	styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
	tasks: Task[] = [];

	// Dependency Injection takes care if injecting the TaskService.
	constructor(private taskService: TaskService) { }

	ngOnInit(): void {
		// Subscribing to an observable. Requires an expression that takes in the output of the observable as a parameter. 
		// This then lets you have the value of the observable in this context so you can set your property.
		// TL;DR subscribe with an expression.
		// For some reason making a function, with tasks: Task[] which does the exact same thing, didnt work.
		this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
	}

	deleteTask(task: Task) {
		// Deletes task from the backend.
		// By subscribing to this Observable, 
		// we have the context to allow us to filter out the deleted element from our current list of tasks.
		this.taskService
			.deleteTask(task) 	
			.subscribe( 		
				() => (this.tasks = this.tasks.filter(t => t.id !== task.id))
			);
	}

	toggleReminder(task: Task){
		task.reminder = !task.reminder;
		// Note that for this observable to actually pop, we need to call subscribe.
		this.taskService.updateTaskReminder(task).subscribe();
	}

	addTask(task: Task){
		this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)))
	}
}