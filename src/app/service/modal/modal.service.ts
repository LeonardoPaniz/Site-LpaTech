// modal.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public modalVisible: boolean = false;
  public modalTitle: string = '';
  public modalContent: string = '';

  constructor() {}

  openModal(title: string, content: string) {
    this.modalTitle = title;
    this.modalContent = content;
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
    this.modalTitle = '';
    this.modalContent = '';
  }
}
