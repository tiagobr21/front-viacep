import { Component , OnInit} from '@angular/core';
import { AppService } from 'src/app/services/app.service';

import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';


@Component({
  selector: 'app-getaddressbycep',
  templateUrl: './getaddressbycep.component.html',
  styleUrls: ['./getaddressbycep.component.css']
})
export class GetaddressbycepComponent implements OnInit {

  userForm:FormGroup;
  response:any

  constructor(private service:AppService , private fb:FormBuilder, private snackbar:SnackbarService) {
    this.userForm =  this.fb.group({
      nome:['',Validators.required],
      idade:['',Validators.required],
      cep:['',Validators.required],
      logradouro:['',Validators.required],
      bairro:['',Validators.required],
      complemento:['',Validators.required],
      localidade:['',Validators.required],
      uf:['',Validators.required]
    });
   }

  

  ngOnInit(): void {

  }

  getAddressByCep(){
    let form = this.userForm.value

    let cep = form.cep;

    let data ={
      cep: cep
    }

    this.service.getAddressByCep(data).subscribe((res:any)=>{
      this.response = res 
      console.log(this.response);
    });  
  }

  ngSubmit(){
  
     this.service.createUsers(this.userForm.value).subscribe((res:any)=>{
      console.log(res);
      this.response = res;
      this.snackbar.openSnackBar(this.response.message,"");
      this.userForm.reset();
     },(error)=>{
      this.response = GlobalConstants.genericError

      this.snackbar.openSnackBar(this.response,GlobalConstants.error)
     })
   
  }

}
