import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-new-matter',
  templateUrl: './new-matter.component.html',
  styleUrls: ['./new-matter.component.sass'],
})
export class NewMatterComponent implements OnInit {
  show: boolean;
  hidden: boolean;
  matterForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]),
  });
  constructor(private store: Store<any>) {
    this.show = false;
    this.hidden = false;
  }
  ngOnInit(): void {}

  createMatter(){

  }
}
