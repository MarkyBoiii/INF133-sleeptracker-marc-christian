import { Component } from '@angular/core';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private static sleeptime:Date;
	private static waketime:Date;

	public sleepy:any;
	public wakey:any;

	constructor(public sleepService:SleepService, private actionSheetCtrl: ActionSheetController) {
	}

	ngOnInit() {
		console.log(this.allSleepData);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}

	async show() {
		console.log(this.allSleepData);
	}
	sleepDate(value:Date) {
		HomePage.sleeptime = new Date(value); // set sleep time
	}
	wakeDate(value:Date) {
		HomePage.waketime = new Date(value); // set wake time
	}
	done() {
		let sleepData = new OvernightSleepData(HomePage.sleeptime, HomePage.waketime);
		this.sleepService.logOvernightData(sleepData); // create sleep data and log to sleepService
	}
	
	async presentActionSheet() {
		const actionSheet = await this.actionSheetCtrl.create({
		  header: 'Example header',
		  subHeader: 'Example subheader',
		  buttons: [
			{
			  text: 'Delete',
			  role: 'destructive',
			  data: {
				action: 'delete',
			  },
			},
			{
			  text: 'Share',
			  data: {
				action: 'share',
			  },
			},
			{
			  text: 'Cancel',
			  role: 'cancel',
			  data: {
				action: 'cancel',
			  },
			},
		  ],
		});
	
		await actionSheet.present();
	  }


}
