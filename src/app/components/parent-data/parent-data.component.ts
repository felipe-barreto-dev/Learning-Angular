import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {

  @Input() name: string = "";
  canShow: boolean = true;
  number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleDirective(): void {
    this.canShow = !this.canShow
  }

  onHandleChange(): void {
    this.number += 1;
  }

}
