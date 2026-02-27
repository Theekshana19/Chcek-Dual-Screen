import { AfterViewInit, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DualScreenService } from '../../services/dual-screen.service';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './staff.component.html'
})
export class StaffComponent implements AfterViewInit {
  statusMessage = '';

  constructor(private readonly dualScreenService: DualScreenService) {}

  async ngAfterViewInit(): Promise<void> {
    const storageKey = 'customerDisplayOpened';

    if (sessionStorage.getItem(storageKey)) {
      return;
    }

    sessionStorage.setItem(storageKey, 'true');
    this.statusMessage = 'Opening customer display...';

    await this.dualScreenService.openCustomerDisplay();
    this.statusMessage = this.dualScreenService.lastStatus;
  }
}
