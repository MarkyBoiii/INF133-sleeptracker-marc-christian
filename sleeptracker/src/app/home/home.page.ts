import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private static sleeptime:Date;
	private static waketime:Date;

	constructor(public sleepService:SleepService) {
	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	async sleep() {
		console.log("bedge :3");
		HomePage.sleeptime = new Date(); // slept at current time+date
		console.log(HomePage.sleeptime);
	}
	async awaken() {
		console.log("wokege O_O");
		HomePage.waketime = new Date(); // woke up at current time+date
		let sleepData = new OvernightSleepData(HomePage.sleeptime, HomePage.waketime); // new sleepData object
		this.sleepService.logOvernightData(sleepData); // log the sleepData
	}


}
