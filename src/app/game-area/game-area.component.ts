import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss']
})
export class GameAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //User infos
  bitcoins = 0;
  heat = 0;
  bitcoinsPerSecond = 0;
  bitcoinsPerClick = 1;

  //PC Parts Level
  MBlevel = 123;
  CPUlevel = 456;
  HDlevel = 789;
  RAMlevel = 123;
  COOLERlevel = 456;
  GPUlevel = 789;

  //PC Parts Price
  MBprice = 150;
  CPUprice = 150;
  HDprice = 150;
  RAMprice = 150;
  COOLERprice = 150;
  GPUprice = 150;


  click(){
    this.bitcoins += this.bitcoinsPerClick;
  }

  
}
