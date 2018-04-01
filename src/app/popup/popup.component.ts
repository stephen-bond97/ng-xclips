import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

	@Input()
	public title: string = "";

	@Output()
	public close = new EventEmitter<void>();

	public constructor() { }

	public closePopup(): void {
		this.close.emit();
	}
}
