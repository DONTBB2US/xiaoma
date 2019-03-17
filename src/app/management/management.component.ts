import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {
  sidenavPos = 'start';
  sidenavMode = 'side';
  
  constructor() { }

  ngOnInit() {
  }

}
