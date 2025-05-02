import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models/social-media.model';
import { MainContainerComponent } from '../../layout';
import { WobbleDirective } from '../../directives';






@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent, WobbleDirective],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: "Twitch",
      link: "https://www.tiwtch.tv/gentleman_programming",
      imgPath: "assets/images/social-media/juan-davidp.jpeg"
    },
    {
      name: "Youtube",
      link: "https://www.youtube.tv/@GentlemanProgramming",
      imgPath: "assets/images/social-media/juan-davidp.jpeg"
    },
    {
      name: "Discord",
      link: "https://www.discords.gg/KeavKkDc5Y",
      imgPath: "assets/images/social-media/juan-davidp.jpeg"
    },
  ]
}
