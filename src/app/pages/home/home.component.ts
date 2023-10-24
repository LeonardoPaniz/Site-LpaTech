import { LoadingService } from './../../service/loading.service';
import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Site-LpaTech';

  constructor(private renderer: Renderer2, private el: ElementRef, private LoadingService: LoadingService) {}
  ngOnInit(): void {
    this.LoadingService.show();
    setTimeout(() => {
      this.LoadingService.hide();
    }, 2000);
  }

  @HostListener('window:scroll', ['$event'])
onScroll(event: Event): void {
  const header = this.el.nativeElement.querySelector('#header');
  if (window.scrollY > 100) {
    this.renderer.addClass(header, 'rolagem');
  } else {
    this.renderer.removeClass(header, 'rolagem');
  }
}

}
