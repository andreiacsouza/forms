import { Http } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {

    // this.formulario = new FormGroup({
    //   nome: new FormControl(null), 
    //   email: new FormControl(null)
    // });

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  onSubmit(){
    console.log(this.formulario.value);

    this.http.post('https://httpbin.org/post', 
                    JSON.stringify(this.formulario.value))
    .map(res => res)
    .subscribe(dados => {
      console.log(dados);
      //reseta o form
      //this.formulario.reset();
      this.resetar();
    },
    (error: any) => alert('erro'));
  } 

  resetar(){
    this.formulario.reset();
  }
  

}
