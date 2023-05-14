// Components come in 4 files. css, html, spec.ts and ts
// css & html explain themselves. Component structure & styling
// spec.ts is a test of sorts.
// .ts is the code for the given component

import { Component } from '@angular/core'; // Importing base angular component stuff

// Decloration of the component
@Component({
	selector: 'app-root', // Refers to the <app-root/> in index.html
	// templateUrl refers to what html this component uses. 
	templateUrl: './app.component.html',
	// refers to what styling the component should use.
	styleUrls: ['./app.component.css']
	// By default these are component specific.
})
// the class or the component. Properties and methods for the component go here.
export class AppComponent { }
