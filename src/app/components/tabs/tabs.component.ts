import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { navigation_tabs } from '../../_nav';

@Component({
  selector: 'app-tabs-component',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabComponentComponent {
  tabs = navigation_tabs;
  constructor(private router: Router) {}

  redirectTo(url: string): void {
    this.router.navigate([url]);
  }
}
