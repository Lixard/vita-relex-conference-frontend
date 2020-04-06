import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {UserService} from '../../../../core/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  users: UserModel[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
}
