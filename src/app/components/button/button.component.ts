// Input lets you input properties through the html component decleration
// Output
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
	@Input() text!: string;
	@Input() color!: string;
	// This is in effect a delegate of sorts. 
	// This lets us subscribe to this event when using this component
	@Output() btnClick = new EventEmitter();

	constructor() { }

	ngOnInit(): void { }

	// Function that i can bind to e.g a button event. 
	onClick() {
		this.btnClick.emit();
	}
}
