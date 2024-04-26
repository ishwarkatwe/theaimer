import { Component, inject } from '@angular/core';
import { CategoriesService } from './categories.service';
import { SharedModule } from '../../../shared/shared.module';
import { Observable } from 'rxjs';
import { ICategories } from './categories';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  $categories = inject(CategoriesService).fetch();
}
