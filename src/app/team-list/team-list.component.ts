import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { Fan } from '../models/fan.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})

// Parent Component
export class TeamListComponent implements OnInit {

  fanName:string;
  fanAge:number;
  fanCountry:string;
  selectedTeam:string;

  madridFanList:Array<Fan>;
  barcelonaFanList:Array<Fan>;

  constructor() {
    this.fanName = '',
    this.fanAge = 0;
    this.fanCountry = '',
    this.selectedTeam = ''
    this.madridFanList = [new Fan("Adam", 20, "Spain")];
    this.barcelonaFanList = [new Fan("Ferguson", 50, "Italy")];
   }

  ngOnInit(): void {
  }

  addNewFan():void {
    const fan:Fan = new Fan(this.fanName, this.fanAge, this.fanCountry);

    if(this.selectedTeam === 'madrid'){
      this.madridFanList.push(fan);
    }else{
      this.barcelonaFanList.push(fan);
    }

      // Reset values
  this.fanName = '';
  this.fanAge = 0;
  this.fanCountry = '';
  this.selectedTeam = '';
  }

  removeFan($event:any, team:string):void {
    if (team === 'madrid'){
      this.madridFanList.splice($event, 1);
    }else{
      this.barcelonaFanList.splice($event, 1);
    }
  }

}
