import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uVal
  pVal
  user="";
  pass="";
  loginData;
  valid;
  data;

  constructor(private _routes: Router, private _service:ServicesService) { }

  ngOnInit() {
  }

  onSubmit(){
    // this.loginData={"user":this.user,"password":this.pass}
    this.loginData={
      "app": "muf-dashboard-login",
      "method": "login",
      "data": {
          "uid": this.user,
          "pwd": "sandi",
          "app": "MDSB"
      }
  };
    console.log(this.user)
    console.log(this.pass)
    console.log(this.loginData)
    this.getLog("post",this.loginData)
    // if(this.user=="1234" && this.pass=="1234"){
    //   this._routes.navigate(['/landing']);
    // }
  }

  getLog(types,loginData){
    this._service.postData(types,this.loginData).subscribe(result=>{
      this.data=result["result"];
      console.log(this.data['status']);
      if(this.data['status']==true){
        this._routes.navigate(['/landing']);
        this.valid="";
        localStorage.setItem('currentUser', JSON.stringify(this.data));
        console.log(localStorage.getItem('currentUser'));
      }
      else{
        this.valid="ok"
      }
    });

  }

}
