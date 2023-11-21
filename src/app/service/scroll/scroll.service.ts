import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollTo(target: HTMLElement): void {
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
  addSmoothScrolling(): void {
    document.addEventListener('click', (event: Event) => {
      if (event.target instanceof HTMLAnchorElement) {
        const href = event.target.getAttribute('href');
        if (href && href.startsWith('#')) {
          event.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  }
}
