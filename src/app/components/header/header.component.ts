import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
@Component({
	selector: 'app-header', // Default selector name is app-[component name]. So "app-header" here.
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	// title = 'Task Tracker'; is valid. But it is advised you declare type.
	title: string = 'Task Tracker';
	showAddTask!: boolean;
	subscription!: Subscription;
	// Its a constructor? what more to say
	constructor(private uiService: UiService, private router: Router) {
		this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
	}

	// Gets called when the component loads.
	ngOnInit(): void {
	}

	toggleAddTask() {
		this.uiService.toggleAddTask();
	}

	hasRoute(route: string){
		return this.router.url === route;
	}
}
