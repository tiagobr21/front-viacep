import { Component, } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  
  response:any

  constructor(private service:AppService, private dialog:MatDialog,private snackbar:SnackbarService){
   
  }

  ngOnInit():void{
    this.service.listAllUsers().subscribe((res:any)=>{
      this.response = res;
      // console.log(this.response);
    })  
  }

  delete(id:any){

    this.service.deleteUsers(id).subscribe((res:any)=>{
      console.log(res);
      this.response = res
      this.snackbar.openSnackBar(this.response.message,"");

    },(error)=>{
      this.response = GlobalConstants.genericError;

      this.snackbar.openSnackBar(this.response,GlobalConstants.error)
    }); 
  } 

  openUpdate(idupdate:any){
    this.dialog.open(UpdateComponent, {
      height: '70%',
      width: '50%',
      data:{id:idupdate}
    });
  }


}
