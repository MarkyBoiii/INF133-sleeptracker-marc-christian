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
	constructor(public sleepService:SleepService) {
	}

	ngOnInit() {
		//console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	async show() {
		console.log(this.allSleepData); // show the data

		//Show storages
		this.sleepService.loadOvernightDataStorage();
		this.sleepService.loadSleepinessDataStorage();
	}

	//Resets the storage
	public resetStorage()
	{
		console.log("Resetting the storage...");
		return this.sleepService.resetData();
	}
}
