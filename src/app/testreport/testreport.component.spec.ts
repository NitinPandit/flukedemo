import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TestReportComponent } from './testreport.component';
import { IgxGridModule } from 'igniteui-angular';

describe('TestReportComponent', () => {
  let component: TestReportComponent;
  let fixture: ComponentFixture<TestReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReportComponent ],
      imports: [ NoopAnimationsModule, IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
