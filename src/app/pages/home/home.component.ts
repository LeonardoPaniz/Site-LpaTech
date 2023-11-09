import { LoadingService } from './../../service/loading.service';
import { Component, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('contentChange', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', animate('300ms ease-out')),
      transition('out => in', animate('300ms ease-in')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  title = 'Site-LpaTech';
  selectedOption: string = '';
  currentIndex: number = 0;
  currentState: string = 'in'

  portfolioItems: any[]  = [
    {
      title: 'Site Friovel',
      description: 'Temos o orgulho de trabalhar em parceria com a Friovel para desenvolver um site que represente fielmente seus valores e compromisso com a qualidade. Nossa missão é traduzir a história e a excelência da Friovel em uma presença online que destaque sua dedicação aos clientes e a oferta de produtos de alta qualidade. Acompanhe nosso portfólio para conhecer os projetos em que colaboramos, e junte-se a nós nessa jornada de excelência e inovação.',
      url: 'https://friovel.netlify.app',
      screenshot: '../../../assets/mockups/friovel-mockup.svg',
    },
    {
      title: 'Marina Bertani',
      description: 'Este projeto foi desenvolvido em colaboração com a professora Marina Bertani, com o propósito de divulgar o excelente trabalho que ela realiza como professora de inglês. O site tem como objetivo direcionar o público para as redes sociais da professora, onde podem encontrar mais informações e recursos relacionados ao ensino e aprendizado da língua inglesa.',
      url: 'https://marinabertani.netlify.app/',
      screenshot: '../../../assets/mockups/marina-mockup.svg',
    },
    {
      title: 'Linktree Pessoal',
      description: 'Este projeto foi desenvolvido por mim e tem como objetivo centralizar e facilitar o acesso aos meus diversos conteúdos online. Através do meu Linktree, você encontrará uma seleção de links que o direcionarão para minhas redes sociais e outras plataformas onde compartilho informações valiosas e recursos relacionados a minha rotina e outros interesses',
      url: 'https://leonardopaniz.netlify.app/',
      screenshot: '../../../assets/mockups/linktree-mockup.svg',
    },
    // Adicione mais projetos conforme necessário
  ];

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

handleRadioSelection(index: number) {
  this.currentState = 'out'; // Inicia a animação de saída
  setTimeout(() => {
    this.currentIndex = index; // Atualiza o índice após a animação
    this.currentState = 'in'; // Inicia a animação de entrada
  }, 300); // Ajuste o tempo de acordo com a duração da animação
}

}
