import { Component, OnInit } from '@angular/core';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-sleepiness',
  templateUrl: './sleepiness.page.html',
  styleUrls: ['./sleepiness.page.scss'],
})
export class SleepinessPage implements OnInit {
  private static sleepiness:StanfordSleepinessData;

  constructor(public sleepService:SleepService) { }

  ngOnInit() {
  }

  // s1-s7 are functions that set the sleepiness variable to a StanfordSleepinessData object on a scale from 1-7
  s1() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(1);
  }
  s2() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(2);
  }
  s3() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(3);
  }
  s4() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(4);
  }
  s5() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(5);
  }
  s6() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(6);
  }
  s7() {
    SleepinessPage.sleepiness = new StanfordSleepinessData(7);
  }

  done() {
    this.sleepService.logSleepinessData(SleepinessPage.sleepiness);
  }
}
