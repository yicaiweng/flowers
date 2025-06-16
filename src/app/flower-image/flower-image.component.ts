import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-flower-image',
  templateUrl: './flower-image.component.html',
  styleUrls: ['./flower-image.component.css']
})
export class FlowerImageComponent {
  @Input() photos: any[] = [];

    getPhotoUrl(photo: any): string {
      return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    }
}
