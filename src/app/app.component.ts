import { Component, OnInit } from '@angular/core';
import { FlowerService } from './services/flower.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'flowers';
  flowerData: any = [];
  totalFlower: number = 0;
  page = 1;
  buttonClicked: number = 0;
  constructor(private flowerService: FlowerService) {}
  
  ngOnInit(): void {
    const savedUserClick = Number(localStorage.getItem('btnClicked'))
    console.log(savedUserClick)
    if(savedUserClick !== 1 ) {
      this.fetchFlowersByColor(savedUserClick)
    } else {
      this.fetchAllFlowers();
    }
  }

  fetchAllFlowers() {
    this.buttonClicked = 1;
    return this.flowerService.fetchFlowers().subscribe((res)=> {
      this.flowerData = res.photos.photo
      this.totalFlower = res.photos.total;
      localStorage.setItem('btnClicked', this.buttonClicked.toString())
      console.log(res)
    })
  }

  fetchFlowersByColor(colorCode: number) {
    this.buttonClicked = colorCode;
    return this.flowerService.fetchFlowersByColor('flowers', colorCode).subscribe((res) => {
      this.flowerData = res.photos.photo
      this.totalFlower = res.photos.total;
      localStorage.setItem('btnClicked', this.buttonClicked.toString())
      console.log(res)
    })
  }
  
  fetchMoreFlowers() {
    this.page++;
    return this.flowerService.fetchMoreFlowers('flowers', this.page).subscribe((res) => {
      this.flowerData = res.photos.photo
      this.totalFlower = res.photos.total;
      console.log(res)
    })
  }

}
