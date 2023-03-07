import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = true;
	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	//Injected storage from @ionic/storage-angular
	constructor(private sleepDataStorage:Storage) {
		//Create the three different storages/databases.
		this.sleepDataStorage.create();
		//this.overnightDataStorage.create();
		//this.sleepinessDataStorage.create();

		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;


		//Everytime the service is started, load both storages.
		//this.loadOvernightDataStorage();
		//this.loadSleepinessDataStorage();

	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	private inArray(obj:any, array:any) {
		for (let i in array) {
			if (array[i] === obj) {
				return true;
			}
		};
		return false;
	}



	public logOvernightData(sleepData:OvernightSleepData) {

		//this.overnightDataStorage.set(SleepService.AllOvernightData.length.toString(), sleepData);

		if (!this.inArray(sleepData, SleepService.AllSleepData)) {
			SleepService.AllSleepData.push(sleepData);
		}

		if (!this.inArray(sleepData, SleepService.AllOvernightData)) {
			SleepService.AllOvernightData.push(sleepData);
		}

		//Adds the sleepData to the local storage of overnightDataStorage. Keys: the length of AllOvernightData (as we add to it, we get a different key)
		this.sleepDataStorage.set(sleepData.id, sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		
		//this.sleepinessDataStorage.set(SleepService.AllSleepinessData.length.toString(), sleepData);
		
		//SleepService.AllSleepData.push(sleepData);
		//SleepService.AllSleepinessData.push(sleepData);
		if (!this.inArray(sleepData, SleepService.AllSleepData)) {
			SleepService.AllSleepData.push(sleepData);
		}

		if (!this.inArray(sleepData, SleepService.AllOvernightData)) {
			SleepService.AllSleepinessData.push(sleepData);
		}

		//Adds the sleepData to the local storage of sleepinessDataStorage. Keys: the length of AllSleepinessData (as we add to it, we get a different key)
		this.sleepDataStorage.set(sleepData.id, sleepData);
	}
	

	//This helper function serves to reset all storages.
	public resetData()
	{
		this.sleepDataStorage.clear();
		//this.overnightDataStorage.clear();
		//this.sleepinessDataStorage.clear();
	}

	public loadOvernightDataStorage()
	{
		console.log("Calling loadOvernightDataStorage()");
		//console.log("testin");
		/*SleepService.AllOvernightData.forEach( (val, index) => {
			console.log("Loading Overnight Data Storage...");
			this.overnightDataStorage.get(index.toString()).then( (data) => {
				console.log(val);
			})
		})*/

		this.sleepDataStorage.forEach( (val) => {
			if (val.isOvernightSleepData)
			{
				console.log(val, "PRINTING FROM OVERNIGHT DATA");
				//console.log(val);
			}
			//console.log(val, "PRINTED FROM OVERNIGHT DATA");
		});
	}

	public loadSleepinessDataStorage()
	{
		console.log("Calling loadSleepinessDataStorage()");
		/*SleepService.AllSleepinessData.forEach( (val, index) => {
			console.log("Loading Sleepiness Data Storage...");
			this.sleepinessDataStorage.get(index.toString()).then( (data) => {
				console.log(val);
			})
		})*/

		this.sleepDataStorage.forEach( (val) => {
			//console.log(val, "PRINTED FROM SLEEPINESS DATA");
			if (!val.isOvernightSleepData)
			{
				console.log(val, "PRINTING FROM SLEEPINESS DATA")
			}
		});
	}


}
