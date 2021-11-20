import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  info: string = 'cybersoft';
  people: any = {
    username: 'Sang',
    age: 18,
  }
  array: any = ['a','b','c','d','e','f','g','h'];
  number: number = 0.259;

  inputValue: string = '';

  constructor() { 
    console.log('constructor')
  }

  
  ngOnChanges(changes: SimpleChange){
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
