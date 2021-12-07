import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-inform-dialog',
  templateUrl: './inform-dialog.component.html',
  styleUrls: ['./inform-dialog.component.scss']
})
export class InformDialogComponent implements OnInit {

  dialogData = <DialogData>{};
  message = 'Pagamento efetuado com Sucesso';

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private dialogRef: MatDialogRef<InformDialogComponent>) {
    if (data) {
      this.dialogData.message = data.message || this.message;
      this.dialogData.title = data.title || '';
    }
  }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
