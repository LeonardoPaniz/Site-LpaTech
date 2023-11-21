// modal.component.ts
import { Component } from '@angular/core';
import { ModalService } from '../../service/modal/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  get modalTitle() {
    return this.modalService.modalTitle;
  }

  get modalContent() {
    return this.modalService.modalContent;
  }

  closeModal() {
    this.modalService.closeModal();
  }
}
