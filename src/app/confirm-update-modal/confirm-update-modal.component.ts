import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-update-modal',
  templateUrl: './confirm-update-modal.component.html',
  styleUrls: ['./confirm-update-modal.component.css']
})
export class ConfirmUpdateModalComponent implements OnInit {
  withAutofocus = `<button type="button" ngbAutofocus class="btn btn-danger"
  (click)="modal.close('Ok click')">Ok</button>`;

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
