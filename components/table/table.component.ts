import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nu-table',
  exportAs: 'nuTable',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './table.component.html',
})
export class NuTableComponent implements OnInit {
  listOfData = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  }];
  constructor() { }

  ngOnInit() {
  }

}
