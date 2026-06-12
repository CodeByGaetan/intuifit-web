import { Component } from '@angular/core';
import { StoreBadge } from '../../shared/store-badge/store-badge';

@Component({
  selector: 'app-home',
  imports: [StoreBadge],
  templateUrl: './home.html',
})
export class Home {}
