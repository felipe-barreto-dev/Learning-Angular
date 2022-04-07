import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children-data',
  templateUrl: './children-data.component.html',
  styleUrls: ['./children-data.component.css']
})
export class ChildrenDataComponent implements OnInit {

  @Output() handleChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(): void {
    this.handleChange.emit();
  }

}
