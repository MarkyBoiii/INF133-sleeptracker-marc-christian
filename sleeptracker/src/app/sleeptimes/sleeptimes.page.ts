import { Component, OnInit } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { OvernightSleepData } from '../data/overnight-sleep-data';

@Component({
  selector: 'app-sleeptimes',
  templateUrl: './sleeptimes.page.html',
  styleUrls: ['./sleeptimes.page.scss'],
})
export class SleeptimesPage implements OnInit {
	private static sleeptime:Date;
	private static waketime:Date;

	public sleepy:any;
	public wakey:any;
  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

  sleepDate(value:Date) {
		SleeptimesPage.sleeptime = new Date(value); // set sleep time
	}
	wakeDate(value:Date) {
		SleeptimesPage.waketime = new Date(value); // set wake time
	}
	done() {
		let sleepData = new OvernightSleepData(SleeptimesPage.sleeptime, SleeptimesPage.waketime);
		this.sleepService.logOvernightData(sleepData); // create sleep data and log to sleepService
	}
}
