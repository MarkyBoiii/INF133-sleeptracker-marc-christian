import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {

  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

  // s1-s7 are functions that log the sleepiness from a scale of 1-7 in the sleepService
  s1() {
    let sleepiness = new StanfordSleepinessData(1);
    this.sleepService.logSleepinessData(sleepiness);
  }
  s2() {
    let sleepiness = new StanfordSleepinessData(2);
    this.sleepService.logSleepinessData(sleepiness);
  }
  s3() {
    let sleepiness = new StanfordSleepinessData(3);
    this.sleepService.logSleepinessData(sleepiness);
  }
  s4() {
    let sleepiness = new StanfordSleepinessData(4);
    this.sleepService.logSleepinessData(sleepiness);
  }
  s5() {
    let sleepiness = new StanfordSleepinessData(5);
    this.sleepService.logSleepinessData(sleepiness);
  }
  s6() {
    let sleepiness = new StanfordSleepinessData(6);
    this.sleepService.logSleepinessData(sleepiness);
  }
  s7() {
    let sleepiness = new StanfordSleepinessData(7);
    this.sleepService.logSleepinessData(sleepiness);
  }
}
