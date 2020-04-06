import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../entities/user/model/user.model';
import {UserService} from '../../entities/user/service/user.service';


@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {

  users: UserModel[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.userService.getUsers().subscribe((result: UserModel[]) => {
      this.users = result;
      console.log(result);
    });
  }
}
