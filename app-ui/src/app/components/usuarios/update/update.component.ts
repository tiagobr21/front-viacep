import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'src/app/services/app.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  userForm:FormGroup;
  response:any;
  id:number = 0;
 
  constructor(private service:AppService,@Inject(MAT_DIALOG_DATA) public data: {id:number},
  private fb:FormBuilder, private snackbar:SnackbarService){
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
 
  ngOnInit():void{
    this.id = this.data.id;


    this.service.getSingleUsers(this.id).subscribe((res)=>{
      this.response = res
    });

  }

  ngSubmit(){

      this.service.updateUsers(this.userForm.value,this.id).subscribe((res:any)=>{
        console.log(res)
        this.response = res;
        this.snackbar.openSnackBar(this.response.message,"");

      },(error)=>{
        this.response = GlobalConstants.genericError
        this.snackbar.openSnackBar(this.response,GlobalConstants.error)
      }) 
  }

}
