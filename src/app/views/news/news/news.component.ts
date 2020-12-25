import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  text = '';
  text1 = '';

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    //this.initForm();
    this.form = this.fb.group({
      field1: [''],
    });
  }

  ngOnInit(): void {}

  initForm() {
    this.form = this.fb.group({
      field1: [''],
    });
  }

  submit() {
    alert(this.form.value.field1);
  }

  btnClickEvent() {
    alert('You just clicked a click me button');
  }
}
