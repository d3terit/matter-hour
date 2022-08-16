import { Component, Input, OnInit } from '@angular/core';
import { Matter } from '@core/models/matter.model';

@Component({
  selector: 'app-matter-card',
  templateUrl: './matterCard.component.html',
  styleUrls: ['./matterCard.component.sass']
})
export class MatterCardComponent implements OnInit {
  @Input()
  matter!: Matter;
  constructor() { }

  ngOnInit(): void {
  }

  copyLink(){
    navigator.clipboard.writeText(`http://localhost:4200/${this.matter.id}`)
  }

}
