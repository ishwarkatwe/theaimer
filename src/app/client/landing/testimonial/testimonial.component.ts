import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { MetaService } from '../../../shared/meta.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent implements OnInit, AfterViewInit {
  active = 2;
  $testimonial = inject(MetaService).getTestimonial();
  arrTestimonial: any[] = [];
  isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit(): void {
    this.$testimonial.subscribe((res) => {
      this.arrTestimonial = res;
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser()) {
      setInterval(() => {
        this.next();
      }, 4000);
    }
  }

  next() {
    const f = this.arrTestimonial.shift();
    this.arrTestimonial.push(f);
  }
}
