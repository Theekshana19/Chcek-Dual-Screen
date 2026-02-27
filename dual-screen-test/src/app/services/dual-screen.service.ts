import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DualScreenService {
  lastStatus = '';

  private customerWindow: Window | null = null;

  async openCustomerDisplay(): Promise<void> {
    const customerUrl = `${location.origin}/customer`;
    this.lastStatus = 'Opening customer display...';

    if (this.customerWindow && !this.customerWindow.closed) {
      try {
        this.customerWindow.location.href = customerUrl;
        this.customerWindow.focus();
        this.lastStatus = 'Customer display focused in existing window.';
        return;
      } catch {
        this.customerWindow = null;
      }
    }

    let targetScreen: any = null;
    let useMultiScreen = false;

    try {
      const anyWindow = window as any;
      if (typeof anyWindow.getScreenDetails === 'function') {
        const details = await anyWindow.getScreenDetails();
        const screens: any[] = details?.screens ?? [];
        const current = details?.currentScreen;

        if (screens.length > 1) {
          targetScreen = screens.find((s) => s !== current) ?? screens[1];
          if (targetScreen) {
            useMultiScreen = true;
          }
        } else {
          this.lastStatus = 'Only one display detected. Opening in a new window.';
        }
      } else {
        this.lastStatus =
          'Browser does not support multi-screen placement. Opening in a new window; you may need to move it.';
      }
    } catch {
      this.lastStatus =
        'Unable to use multi-screen placement. Opening in a new window; you may need to move it.';
    }

    let features = 'noopener,noreferrer';

    if (useMultiScreen && targetScreen) {
      const left = targetScreen.availLeft ?? targetScreen.left ?? 0;
      const top = targetScreen.availTop ?? targetScreen.top ?? 0;
      const width = targetScreen.availWidth ?? targetScreen.width;
      const height = targetScreen.availHeight ?? targetScreen.height;

      const parts: string[] = [];
      parts.push(`left=${left}`);
      parts.push(`top=${top}`);
      if (width) {
        parts.push(`width=${width}`);
      }
      if (height) {
        parts.push(`height=${height}`);
      }
      parts.push('noopener');
      parts.push('noreferrer');

      features = parts.join(',');
      this.lastStatus = 'Opening customer display on secondary monitor...';
    }

    const newWindow = window.open(customerUrl, 'customerDisplay', features);

    if (!newWindow) {
      this.lastStatus =
        'Popup blocked. Allow popups for this site to open the customer display.';
      return;
    }

    this.customerWindow = newWindow;

    try {
      this.customerWindow.focus();
    } catch {
      // ignore focus errors
    }
  }
}

