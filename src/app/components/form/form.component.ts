import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/user-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit
{
	model: UserModel = new UserModel(
		'', '', '', null
	);

	get diagnostic()
	{
		return JSON.stringify(this.model);
	}

	constructor()
	{}
	ngOnInit(): void
	{}
}
