import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ActionSheetController } from '@ionic/angular';

import { RouterModule, Routes, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	public dataStorage:any[] = [];
	public currentDate:String = new Date().toDateString();
	public showDate:boolean = true;

	constructor(public sleepService:SleepService) {
	}

	ngOnInit() {
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	async show() {
		console.log(this.allSleepData); // show the data

		this.showDate = false; // turns off date, shows data instead

		this.dataStorage = this.sleepService.getSleepStorage();

		//Show storages
		this.sleepService.loadOvernightDataStorage();
		this.sleepService.loadSleepinessDataStorage();
	}

	//Resets the storage
	public resetStorage()
	{
		this.showDate = true; // shows the date again
		console.log("Resetting the storage...");
		return this.sleepService.resetData();
	}
}
