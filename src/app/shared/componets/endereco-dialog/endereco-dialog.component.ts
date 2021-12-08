import { Endereco } from './../../../models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Cep, ConsultaCepService } from './../../services/consulta-cep.service';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-endereco-dialog',
  templateUrl: './endereco-dialog.component.html',
  styleUrls: ['./endereco-dialog.component.scss']
})
export class EnderecoDialogComponent implements OnInit {

  private cepModel: Cep;
  constructor(
    public dialogRef: MatDialogRef<EnderecoDialogComponent>,
    private cepService: ConsultaCepService,
    @Inject(MAT_DIALOG_DATA) public endereco: Endereco

  ) { }

  ngOnInit(): void {

  }

  cancel(): void {
    this.dialogRef.close();
  }


  consultaCEP(cep) {

    if (cep != null && cep !== '') {

      this.cepService.consultaCEP(cep).subscribe(response => {
        this.cepModel = response;

        if (this.cepModel.localidade != null) {

          this.endereco.logradouro = this.cepModel.logradouro;
          this.endereco.municipio = this.cepModel.localidade;
          this.endereco.estado = this.cepModel.uf;
          this.endereco.bairro = this.cepModel.bairro;

        } else {
          alert('CEP não encontrado, informe um CEP valido')
        }
      },
        erro => alert('Cep não encontrado!')
      );


    } else {
      //cep sem valor, limpa formulário.
      // this.limpa_formulario_cep();
      // this.enderecoForm.get('endereco').reset();
    }

  }

}
