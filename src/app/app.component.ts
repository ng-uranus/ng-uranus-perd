import { Component } from '@angular/core';
import { NuColumn, NuData } from 'ng-uranus-perd/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  columns: NuColumn[] = [
    {
      name: 'c1',
      key: 'id',
      sortable: true,
      style: { color: 'red' },
      width: '50px'
    },
    {
      name: 'c2',
      key: 'name',
      hidden: () => {
        return false;
      }
    },
  ];

  data: NuData[] = [
    {
      id: 1,
      name: 'Xiao Ming'
    },
    {
      id: 2,
      name: 'Xiao Wang'
    }
  ];
}
