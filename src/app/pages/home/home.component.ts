// import { LoadingService } from './../../service/loading.service';
// import { Component, HostListener, Renderer2, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';
// import { NgForm } from '@angular/forms';

// // import { Observable } from 'rxjs/internal/Observable';

// @Component({
//   selector: 'app-root',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   animations: [
//     trigger('contentChange', [
//       state('in', style({ opacity: 1 })),
//       state('out', style({ opacity: 0 })),
//       transition('in => out', animate('300ms ease-out')),
//       transition('out => in', animate('300ms ease-in')),
//     ]),
//   ],
// })
// export class HomeComponent implements OnInit {
//   title = 'Site-LpaTech';
//   selectedOption: string = '';
//   currentIndex: number = 0;
//   currentState: string = 'in'

//   @ViewChild('contactForm', { static: false }) contactForm: NgForm | undefined;
//   nome: string = '';
//   email: string = '';
//   telefone: string = '';
//   mensagemUsuario: string = '';

//   portfolioItems: any[]  = [
// {
//   title: 'Site Friovel',
//   description: 'Temos o orgulho de trabalhar em parceria com a Friovel para desenvolver um site que represente fielmente seus valores e compromisso com a qualidade. Nossa missão é traduzir a história e a excelência da Friovel em uma presença online que destaque sua dedicação aos clientes e a oferta de produtos de alta qualidade. Acompanhe nosso portfólio para conhecer os projetos em que colaboramos, e junte-se a nós nessa jornada de excelência e inovação.',
//   url: 'https://friovel.netlify.app',
//   screenshot: '../../../assets/mockups/friovel-mockup.svg',
// },
// {
//   title: 'Marina Bertani',
//   description: 'Este projeto foi desenvolvido em colaboração com a professora Marina Bertani, com o propósito de divulgar o excelente trabalho que ela realiza como professora de inglês. O site tem como objetivo direcionar o público para as redes sociais da professora, onde podem encontrar mais informações e recursos relacionados ao ensino e aprendizado da língua inglesa.',
//   url: 'https://marinabertani.netlify.app/',
//   screenshot: '../../../assets/mockups/marina-mockup.svg',
// },
// {
//   title: 'Linktree Pessoal',
//   description: 'Este projeto foi desenvolvido por mim e tem como objetivo centralizar e facilitar o acesso aos meus diversos conteúdos online. Através do meu Linktree, você encontrará uma seleção de links que o direcionarão para minhas redes sociais e outras plataformas onde compartilho informações valiosas e recursos relacionados a minha rotina e outros interesses',
//   url: 'https://leonardopaniz.netlify.app/',
//   screenshot: '../../../assets/mockups/linktree-mockup.svg',
// },
// Adicione mais projetos conforme necessário
//   ];

//   faqLpaTech: { pergunta: string, resposta: string, isClicked: boolean }[] = [
//     {
//       pergunta: 'Quais serviços a LPA Tech oferece?',
//       resposta: 'Oferecemos uma variedade de serviços como desenvolvimento web e mobile, consultoria em tecnologia da informação, design de interface e soluções personalizadas para atender as necessidades específicas de nossos clientes.', isClicked: false,
//     },
//     {
//       pergunta: 'A LPA Tech trabalha apenas com empresas grandes?',
//       resposta: 'Não, atendemos empresas de todos os tamanhos. Desde pequenos negócios até grandes corporações estamos comprometidos em fornecer soluções, de alta qualidade, que impulsionem o sucesso de nossos clientes.', isClicked: false,
//     },
//     {
//       pergunta: 'Quanto tempo leva para desenvolver um site ou aplicativo com a LPA Tech?',
//       resposta: 'O tempo de desenvolvimento pode variar dependendo da complexidade do projeto. Procuramos entender as necessidades de cada cliente para fornecer prazos realistas. Para obter uma estimativa mais precisa entre em contato conosco, para discutir os detalhes do seu projeto.', isClicked: false,
//     },
//     {
//       pergunta: 'A LPA Tech oferece suporte pós-lançamento?',
//       resposta: 'Sim, fornecemos suporte contínuo após o lançamento de projetos. Estamos comprometidos em garantir que nossos clientes tenham uma experiencia suave e livre de problemas, se surgirem problemas, nossa equipe estará sempre pronta para oferecer assistência rápida e eficiente.', isClicked: false,
//     },
//     {
//       pergunta: 'A LPA Tech oferece soluções personalizadas?',
//       resposta: 'Sim, entendemos que cada cliente é único. Trabalhamos de perto com nossos clientes, entendendo suas necessidades específicas e fornecendo soluções personalizadas para atingirem seus objetivos.', isClicked: false,
//     },
//     {
//       pergunta: 'A LPA Tech está envolvida em projetos de responsabilidade social?',
//       resposta: 'Sim, a LPA Tech acredita em contribuir à comunidade. Participamos ativamente de projetos de responsabilidade social, buscando fazer uma diferença positiva na sociedade através da tecnologia.', isClicked: false,
//     },
//   ];

//   constructor(private renderer: Renderer2, private el: ElementRef, private LoadingService: LoadingService) {}
//   ngOnInit(): void {
//     this.LoadingService.show();
//     setTimeout(() => {
//       this.LoadingService.hide();
//     }, 2000);

//     / Tentar obter os dados do sessionStorage
//     const storedPortfolioItems = sessionStorage.getItem('portfolioItems');

//     // Se existirem dados armazenados, usar esses dados
//     if (storedPortfolioItems) {
//       this.portfolioItems = JSON.parse(storedPortfolioItems);
//     } else {
//       // Caso contrário, usar os dados padrão
//       this.portfolioItems = [
//         // Seus itens de portfólio aqui...
//       ];

//       // Salvar os dados no sessionStorage
//       sessionStorage.setItem('portfolioItems', JSON.stringify(this.portfolioItems));
//     }

//     // Atualizar o índice atual
//     this.currentIndex = 0;
//   }

//   @HostListener('window:scroll', ['$event'])
// onScroll(event: Event): void {
//   const header = this.el.nativeElement.querySelector('#header');
//   if (window.scrollY > 100) {
//     this.renderer.addClass(header, 'rolagem');
//   } else {
//     this.renderer.removeClass(header, 'rolagem');
//   }
// }

// handleRadioSelection(index: number) {
//   this.currentState = 'out'; // Inicia a animação de saída
//   setTimeout(() => {
//     this.currentIndex = index; // Atualiza o índice após a animação
//     this.currentState = 'in'; // Inicia a animação de entrada
//   }, 300); // Ajuste o tempo de acordo com a duração da animação
// }

// onSubmit(){
//   this.clearForm()
// }

// sendEmailMessage(){

// }

// sendWhatsAppMessage() {
//   const mensagem = `Heey me chamo *${this.nome}*.\nE-mail para contato: *${this.email}*\nTelefone para contato: *${this.telefone}*.\n\n*Entro em contato para falar sobre:*\n${this.mensagemUsuario}`;
//   const numeroTelefone = '5546999831857';
//   const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(mensagem)}`;
//   window.open(linkWhatsapp);
//   this.clearForm()
// }

// clearForm() {
//   if (this.contactForm) {
//     this.contactForm.reset();
//   }
// }

// toggleAnswer(perguntaClicada: any) {
//   this.faqLpaTech.forEach((pergunta) => {
//     if (pergunta !== perguntaClicada) {
//       pergunta.isClicked = false;
//     }
//   });

//   perguntaClicada.isClicked = !perguntaClicada.isClicked;
// }
// }

import { LoadingService } from '../../service/loading/loading.service';
import {
  Component,
  HostListener,
  Renderer2,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NgForm } from '@angular/forms';
import { ScrollService } from 'src/app/service/scroll/scroll.service';

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
  currentState: string = 'in';

  @ViewChild('contactForm', { static: false }) contactForm: NgForm | undefined;
  nome: string = '';
  email: string = '';
  telefone: string = '';
  mensagemUsuario: string = '';
  isMenuOpen = false;

  portfolioItems: any[] = [
    {
      title: 'Site Friovel',
      description:
        'Temos o orgulho de trabalhar em parceria com a Friovel para desenvolver um site que represente fielmente seus valores e compromisso com a qualidade. Nossa missão é traduzir a história e a excelência da Friovel em uma presença online que destaque sua dedicação aos clientes e a oferta de produtos de alta qualidade. Acompanhe nosso portfólio para conhecer os projetos em que colaboramos, e junte-se a nós nessa jornada de excelência e inovação.',
      url: 'https://friovel.netlify.app',
      screenshot: '../../../assets/mockups/friovel-mockup.png',
    },
    {
      title: 'Marina Bertani',
      description:
        'Este projeto foi desenvolvido em colaboração com a professora Marina Bertani, com o propósito de divulgar o excelente trabalho que ela realiza como professora de inglês. O site tem como objetivo direcionar o público para as redes sociais da professora, onde podem encontrar mais informações e recursos relacionados ao ensino e aprendizado da língua inglesa.',
      url: 'https://marinabertani.netlify.app/',
      screenshot: '../../../assets/mockups/marina-mockup.png',
    },
    {
      title: 'Linktree Pessoal',
      description:
        'Este projeto foi desenvolvido por mim e tem como objetivo centralizar e facilitar o acesso aos meus diversos conteúdos online. Através do meu Linktree, você encontrará uma seleção de links que o direcionarão para minhas redes sociais e outras plataformas onde compartilho informações valiosas e recursos relacionados a minha rotina e outros interesses',
      url: 'https://leonardopaniz.netlify.app/',
      screenshot: '../../../assets/mockups/linktree-mockup.png',
    },
  ];

  faqLpaTech: { pergunta: string; resposta: string; isClicked: boolean }[] = [
    {
      pergunta: 'Quais serviços a LPA Tech oferece?',
      resposta:
        'Oferecemos uma variedade de serviços como desenvolvimento web e mobile, consultoria em tecnologia da informação, design de interface e soluções personalizadas para atender as necessidades específicas de nossos clientes.',
      isClicked: false,
    },
    {
      pergunta: 'A LPA Tech trabalha apenas com empresas grandes?',
      resposta:
        'Não, atendemos empresas de todos os tamanhos. Desde pequenos negócios até grandes corporações estamos comprometidos em fornecer soluções, de alta qualidade, que impulsionem o sucesso de nossos clientes.',
      isClicked: false,
    },
    {
      pergunta:
        'Quanto tempo leva para desenvolver um site ou aplicativo com a LPA Tech?',
      resposta:
        'O tempo de desenvolvimento pode variar dependendo da complexidade do projeto. Procuramos entender as necessidades de cada cliente para fornecer prazos realistas. Para obter uma estimativa mais precisa entre em contato conosco, para discutir os detalhes do seu projeto.',
      isClicked: false,
    },
    {
      pergunta: 'A LPA Tech oferece suporte pós-lançamento?',
      resposta:
        'Sim, fornecemos suporte contínuo após o lançamento de projetos. Estamos comprometidos em garantir que nossos clientes tenham uma experiencia suave e livre de problemas, se surgirem problemas, nossa equipe estará sempre pronta para oferecer assistência rápida e eficiente.',
      isClicked: false,
    },
    {
      pergunta: 'A LPA Tech oferece soluções personalizadas?',
      resposta:
        'Sim, entendemos que cada cliente é único. Trabalhamos de perto com nossos clientes, entendendo suas necessidades específicas e fornecendo soluções personalizadas para atingirem seus objetivos.',
      isClicked: false,
    },
    {
      pergunta:
        'A LPA Tech está envolvida em projetos de responsabilidade social?',
      resposta:
        'Sim, a LPA Tech acredita em contribuir à comunidade. Participamos ativamente de projetos de responsabilidade social, buscando fazer uma diferença positiva na sociedade através da tecnologia.',
      isClicked: false,
    },
  ];

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private loadingService: LoadingService,
    private scrollService: ScrollService,
  ) { }

  ngOnInit(): void {
    this.scrollService.addSmoothScrolling();
    window.onload = function () {
      var cor: string = "#E94B27";
      document.body.style.backgroundColor = cor;}
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
    }, 2000);
    const storedPortfolioItems = sessionStorage.getItem('portfolioItems');
    if (storedPortfolioItems) {
      const parsedPortfolioItems = JSON.parse(storedPortfolioItems);
      if (parsedPortfolioItems.length > 0) {
        this.portfolioItems = parsedPortfolioItems;
      } else {
        sessionStorage.setItem('portfolioItems',JSON.stringify(this.portfolioItems)
        );
        const storedPortfolioItems = sessionStorage.getItem('portfolioItems');
        if (storedPortfolioItems) {
          const parsedPortfolioItems = JSON.parse(storedPortfolioItems);
          if (parsedPortfolioItems.length > 0) {
            this.portfolioItems = parsedPortfolioItems;
          }
        }
      }
    }else {
      sessionStorage.setItem('portfolioItems',JSON.stringify(this.portfolioItems));
      const storedPortfolioItems = sessionStorage.getItem('portfolioItems');
      if (storedPortfolioItems) {
        const parsedPortfolioItems = JSON.parse(storedPortfolioItems);
        if (parsedPortfolioItems.length > 0) {
          this.portfolioItems = parsedPortfolioItems;
        }
      }
    }
    this.currentIndex = 0;
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

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToContact() {
    const targetElement = this.el.nativeElement.querySelector('#contact');

    if (targetElement) {
      this.scrollService.scrollTo(targetElement);
    }
  }

  handleRadioSelection(index: number) {
    this.currentState = 'out'; // Inicia a animação de saída
    setTimeout(() => {
      this.currentIndex = index; // Atualiza o índice após a animação
      this.currentState = 'in'; // Inicia a animação de entrada
    }, 600); // Ajuste o tempo de acordo com a duração da animação
  }

  onSubmit() {
    this.clearForm();
  }

  sendEmailMessage() {
    window.location.href = 'mailto:suporte@lpatech.com.br'
  }

  sendWhatsAppMessage() {
    const mensagem = `Heey me chamo *${this.nome}*.\nE-mail para contato: *${this.email}*\nTelefone para contato: *${this.telefone}*.\n\n*Entro em contato para falar sobre:*\n${this.mensagemUsuario}`;
    const numeroTelefone = '5546999831857';
    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(linkWhatsapp);
    this.clearForm();
  }

  clearForm() {
    if (this.contactForm) {
      this.contactForm.reset();
    }
  }

  toggleAnswer(perguntaClicada: any) {
    this.faqLpaTech.forEach((pergunta) => {
      if (pergunta !== perguntaClicada) {
        pergunta.isClicked = false;
      }
    });

    perguntaClicada.isClicked = !perguntaClicada.isClicked;
  }
}
