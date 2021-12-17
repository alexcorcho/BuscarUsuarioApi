import { Component } from '@angular/core';
import { User } from './models/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clima';
  notFound = false;
  user!: User;

  constructor(
    private userService:UserService
  ){}


  getUser(userID:string){
    this.notFound = false;
    this.user;
    

    this.userService.getUser(userID).subscribe((userFromTheApi:User)=>{
      this.user = userFromTheApi;
    },(err:any)=>{
      console.error(err);
      this.notFound=true;
    });
  }
}
