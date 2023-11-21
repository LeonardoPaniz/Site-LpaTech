import { ModalService } from '../../service/modal/modal.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public modalService: ModalService) {}

  openLicenseModal() {
    const licenseContent = `
      <p>Este site é propriedade da LPA-TECH e é fornecido pela mesma. Ao acessar este site, você concorda em cumprir os termos e condições a seguir:</p>
      1. Você está autorizado a visualizar e baixar o conteúdo deste site apenas para uso pessoal e não comercial.</p>
      2. Você não tem permissão para reproduzir, distribuir, modificar ou de outra forma usar qualquer conteúdo deste site para fins comerciais sem a permissão expressa por escrito da LPA-TECH.</p>
      3. A LPA-TECH se reserva o direito de modificar ou encerrar o acesso a este site a qualquer momento, sem aviso prévio.</p>
      4. Todas as marcas registradas, logotipos e conteúdo deste site são propriedade exclusiva da LPA-TECH e não podem ser usados sem autorização.</p>
      5. Este site pode conter links para sites de terceiros. A LPA-TECH não é responsável pelo conteúdo ou pelas práticas de privacidade desses sites.</p>
      Ao continuar a usar este site, você concorda com estes termos e condições. Se você não concorda com estes termos, por favor, não use este site.</p>`;

    this.modalService.openModal('Licença de Uso', licenseContent);
  }

  openTermsModal() {
    const termsContent = `
    <p><strong>Termos de Uso</strong></p>

    <p>Bem-vindo ao site da LPA-TECH, desenvolvido pela LPA TECH. Ao acessar e usar este site, você concorda em cumprir os seguintes termos e condições:</p>

    <ol>
      <li><strong>Uso Aceitável:</strong> Este site destina-se apenas a fins informativos e não pode ser usado para qualquer finalidade ilegal ou prejudicial.</li>
      <li><strong>Conteúdo:</strong> O conteúdo deste site é de propriedade da LPA-TECH e está protegido por direitos autorais. Qualquer uso não autorizado do conteúdo é estritamente proibido.</li>
      <li><strong>Links para Terceiros:</strong> Este site pode conter links para sites de terceiros. A LPA-TECH não é responsável pelo conteúdo ou pelas práticas de privacidade desses sites.</li>
      <li><strong>Privacidade:</strong> A LPA-TECH respeita a sua privacidade. Consulte nossa Política de Privacidade para obter informações sobre como coletamos e usamos seus dados pessoais.</li>
      <li><strong>Alterações nos Termos:</strong> A LPA-TECH se reserva o direito de modificar estes termos a qualquer momento, sem aviso prévio. Recomendamos que você revise regularmente os termos de uso deste site.</li>
    </ol>

    <p>Ao continuar a usar este site, você concorda com estes termos e condições. Se você não concorda com estes termos, por favor, não use este site.</p>
  `;

    this.modalService.openModal('Termos de Uso', termsContent);
  }

  openPrivacyModal() {
    const privacyContent = `
    <p><strong>Política de Privacidade</strong></p>

    <p>A LPA-TECH valoriza a sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você acessa nosso site, desenvolvido pela mesma.</p>

    <p><strong>Informações Coletadas:</strong></p>
    <ul>
      <li>Coletamos informações pessoais, como nome e endereço de e-mail, quando você nos fornece voluntariamente, por exemplo, ao preencher um formulário de contato.</li>
    </ul>

    <p><strong>Uso das Informações:</strong></p>
    <ul>
      <li>Utilizamos suas informações para responder às suas solicitações e fornecer informações sobre nossos produtos e serviços.</li>
    </ul>

    <p><strong>Compartilhamento de Informações:</strong></p>
    <ul>
      <li>Não compartilhamos suas informações pessoais com terceiros, a menos que você nos autorize a fazê-lo ou quando exigido por lei.</li>
    </ul>

    <p><strong>Cookies:</strong></p>
    <ul>
      <li>Usamos cookies para melhorar a experiência do usuário em nosso site. Você pode desativar os cookies em seu navegador, mas isso pode afetar a funcionalidade do site.</li>
    </ul>

    <p><strong>Segurança:</strong></p>
    <ul>
      <li>Tomamos medidas para proteger suas informações pessoais e manter sua confidencialidade.</li>
    </ul>

    <p><strong>Alterações na Política de Privacidade:</strong></p>
    <ul>
      <li>Reservamo-nos o direito de modificar esta Política de Privacidade a qualquer momento. As alterações serão publicadas neste site.</li>
    </ul>

    <p>Ao continuar a usar este site, você concorda com esta Política de Privacidade. Se você tiver alguma dúvida ou preocupação sobre nossas práticas de privacidade, entre em contato conosco.</p>
  `;

    this.modalService.openModal('Política de Privacidade', privacyContent);
  }

  sendEmailMessage() {
    window.location.href = 'mailto:suporte@lpatech.com.br'
  }
}
