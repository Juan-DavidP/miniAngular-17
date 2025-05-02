import { Component } from '@angular/core';
import { IframeVideoComponent } from '../components';
import { MainContainerComponent } from '../layout';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [MainContainerComponent, IframeVideoComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss'
})
export class TrailerVideoComponent {
  videoSrc = "https://www.youtube.com/embed/62uDM9w6ajU?si=m_1Y0mwKHrhnsD20"

}
