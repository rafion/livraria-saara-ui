import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false, timeDurationSeconds = 5): void {
    timeDurationSeconds = timeDurationSeconds * 1000;
    this.snackBar.open(msg, 'X', {
      duration: timeDurationSeconds,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'] //classes permitidas, no casso a da msg de sucesso verde

    });

  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('erro ao obter os dados da API! ' + e, true);
    console.error('erro: ', e)
    return EMPTY; //retorna um observable do tipo empty
  }
}
