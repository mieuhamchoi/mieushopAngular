import { Component } from '@angular/core';

interface pictureObj {
  title: string;
  link: string;
}

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  public pictureList: pictureObj[] = [];

  public ngOnInit() {
    let pictureList = [
      {
        title: 'ảnh 1',
        link: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg'
      },
      {
        title: 'ảnh 2',
        link: 'https://didongvang.com/files/assets/banner01.jpg'
      },
      {
        title: 'ảnh 3',
        link: 'https://cdn.tgdd.vn/hoi-dap/1355217/banner-tgdd-800x300.jpg'
      }
    ]
    this.pictureList = pictureList;
  }
}
