import { Component, Input } from '@angular/core';

interface pictureObj {
  title: string;
  link: string;
}

interface loopObj {
  active: boolean;
  time: number;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() pictureList: pictureObj[] = [];
  @Input() useConfig:boolean = false;
  @Input() loop:loopObj = {active: false, time: 10000};
  @Input() hoverIsStop:boolean = false;
  public circle:string = '1676358824466-537939934';
  public circleFull:string = '1676358824467-588667369';
  public currentIndex:number = 0;

  public ngOnChanges(): void {
    
  }
  
  public async ngOnInit() {
    // Set useConfig = true for use default config.
    if (this.useConfig == true) {
      const pictureList = [
        {
          title: 'ảnh 1',
          link: 'https://api.pokemoninmylife.com/uploads/picture/subject/1676348441881-452161779.png'
        },
        {
          title: 'ảnh 2',
          link: 'https://api.pokemoninmylife.com/uploads/picture/subject/1676348441896-586809455.jpg'
        },
        {
          title: 'ảnh 3',
          link: 'https://api.pokemoninmylife.com/uploads/picture/subject/1676348441896-402948440.jpg'
        },
        {
          title: 'ảnh 4',
          link: 'https://api.pokemoninmylife.com/uploads/picture/subject/1676348441897-822109120.jpg'
        }
      ]
      this.pictureList = pictureList;
    }

    //check time loop
    if (this.loop.active) {
      // time <= 1000ms (1s)
      if (this.loop.time <= 1000) {
        this.loop.time = 1000;
      }

      // time >= 5000ms (5s)
      if (this.loop.time >= 5000) {
        this.loop.time = 5000;
      }
    }

    while(true) {
      await this.sleep(this.loop.time);
      if (this.loop.active) {
        this.nextSlide();
      }
    }
  }

  public sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // next slide of carousel
  public nextSlide():void {
    // if index == length array set index = 0;
    if (this.currentIndex === this.pictureList.length - 1) {
      this.currentIndex = 0;
      return
    }
    // increment index 1
    this.currentIndex++;
  }

  // next slide of carousel
  public preSlide():void {
    // if index == 0, set index = max index
    if (this.currentIndex === 0) {
      this.currentIndex = this.pictureList.length - 1;
      return
    }
    // decrement index 1
    this.currentIndex--;
  }

  // get circle 
  public getCircle(index: number):string {
    if (index === this.currentIndex) {
      return this.circleFull
    }
    return this.circle
  }

  // click circle control change index
  public circleActive(index: number):void {
    this.currentIndex = index;
  }

  // control loop
  public controlLoop(value: boolean) {
    this.loop.active = value;
  }
}
