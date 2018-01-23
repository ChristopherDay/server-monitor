import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-host-list',
	templateUrl: './host-list.component.html',
	styleUrls: ['./host-list.component.sass']
})
export class HostListComponent implements OnInit {

	hosts = [
		{ online: null, hostname: "192.168.0.1"},
		{ online: true, hostname: "192.168.0.1"},
		{ online: false, hostname: "192.168.0.22"}
	];

	constructor() { }

	ngOnInit() {
	}

}
