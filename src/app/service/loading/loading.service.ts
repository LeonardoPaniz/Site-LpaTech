import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'


@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private initialLoad = true; // Adicione uma propriedade para controlar o estado de carregamento inicial

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.initialLoad) {
          this.show(); // Mostra o loading durante o carregamento inicial
        }
      } else if (event instanceof NavigationEnd) {
        if (this.initialLoad) {
          this.hide(); // Oculta o loading após o carregamento inicial
          this.initialLoad = false; // Define o carregamento inicial como concluído
        }
      }
    });
  }

  show() {
    this.loadingSubject.next(true);
  }

  hide() {
    this.loadingSubject.next(false);
  }

  isLoading(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }
}
