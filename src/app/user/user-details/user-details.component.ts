import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/iuser';
import { UserServiceService } from 'src/app/user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public heading = "User Details";
  public users: IUser[] = [];

  constructor(private userService: UserServiceService) {}
  
  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }



}
