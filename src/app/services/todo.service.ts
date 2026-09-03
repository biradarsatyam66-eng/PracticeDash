import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _snackBar: MatSnackBar) { }

  onSnackBarShow(message: string) {
    this._snackBar.open(message, 'close', {
      duration: 2000,
      panelClass:'style',
      horizontalPosition: 'left',
      verticalPosition: 'top'
    });
  }


}
