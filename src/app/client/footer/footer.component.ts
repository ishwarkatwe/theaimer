import { Component, inject } from '@angular/core';
import { MetaService } from '../../shared/meta.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  navItems = this.meta.getNavItems();
  $navSocial = this.meta.getNavSocial();

  constructor(private meta: MetaService) {}
}
