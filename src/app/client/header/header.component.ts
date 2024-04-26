import { Component, HostListener, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MetaService } from '../../shared/meta.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isNavbarFixed = false;
  navItems = inject(MetaService).getNavItems();

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 100) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
}
