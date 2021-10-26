import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Fan } from '../models/fan.model'

@Component({
  selector: 'app-fan-item',
  templateUrl: './fan-item.component.html',
  styleUrls: ['./fan-item.component.css']
})
export class FanItemComponent implements OnInit {

  @Input() fan!:Fan;

  @Output() fanRemoved:EventEmitter<number> = new EventEmitter();

  @Input() index!:number;

  constructor() { }

  ngOnInit(): void {
  }

  removeFan(index:number):void{
    this.fanRemoved.emit(index);
  }

}
