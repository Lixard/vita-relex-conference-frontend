import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../../entities/user/models/user.model';
import {UserService} from '../../../../entities/user/service/user.service';


@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.scss']
})
export class UserListPageComponent implements OnInit {
  users: UserModel[];
  user: UserModel;
  linkImage: string = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.userService.getUsers().subscribe((result: UserModel[]) => {
      this.users = result;
      console.log(result);
    });
  }

  openImage(linkImage: string) {
    this.linkImage = linkImage;
  }

  closeImage() {
    this.linkImage = null;
  }
}
