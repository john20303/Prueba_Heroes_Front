import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  show_spinner: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle_spinner(): void {
    this.show_spinner = !this.show_spinner;
  }

}
