import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-footer-home',
  templateUrl: './footer-home.component.html',
  styleUrls: ['./footer-home.component.scss']
})
export class FooterHomeComponent implements OnInit {
  grandCourse: any;
  subGrandCourse: any;
  constructor(
    private data: DataService,
  ) { }

  ngOnInit(): void {
    this.getGrand()
  }

  getGrand(){
    this.subGrandCourse = this.data.get('QuanLyKhoaHoc/LayDanhMucKhoaHoc').subscribe((result) => {
    this.grandCourse = result;
    })
  }
}
