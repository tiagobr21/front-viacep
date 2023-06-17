import { Component , OnInit} from '@angular/core';
import { AppService } from 'src/app/services/app.service';

import { FormBuilder,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-searchcep',
  templateUrl: './searchcep.component.html',
  styleUrls: ['./searchcep.component.css']
})
export class SearchcepComponent {


  userForm:FormGroup;
  response:any

  constructor(private service:AppService , private fb:FormBuilder) {
    this.userForm =  this.fb.group({
      uf:['',Validators.required],
      localidade:['',Validators.required],
      logradouro:['',Validators.required]
    });
   }

  

  ngOnInit(): void {

  }

  searchCep(){
    let form = this.userForm.value

    console.log(form)

    let uf = form.uf;
    let localidade = form.localidade;
    let logradouro = form.logradouro;


    let data ={
      uf : uf,
      localidade: localidade,
      logradouro: logradouro
    }

    this.service.searchcep(data).subscribe((res:any)=>{
      this.response = res 
      
      console.log(this.response);
    });   
  }

}
