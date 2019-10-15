import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { testData } from './localData';
import { IgxColumnComponent } from 'igniteui-angular';
import { MySummary } from './MySummary';

@Component({
  selector: 'app-testreport',
  templateUrl: './testreport.component.html',
  styleUrls: ['./testreport.component.scss']
})
export class TestReportComponent implements OnInit {
  public localData: any[];
  public mySummary:MySummary;
  title = 'TestReport';
  constructor() { }

  ngOnInit() {
    //this.mySummary=new MySummary();
    this.localData = testData;
  }
}
