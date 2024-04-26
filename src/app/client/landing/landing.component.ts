import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { PopularComponent } from './popular/popular.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { TestimonialComponent } from "./testimonial/testimonial.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
    imports: [HeroComponent, PopularComponent, NewsletterComponent, TestimonialComponent]
})
export class LandingComponent {}
