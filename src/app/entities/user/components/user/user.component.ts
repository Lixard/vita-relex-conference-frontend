import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserModel;
  userId: number;
  constructor(private route: ActivatedRoute, private location: Router, private userService: UserService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.userId = params.id;
      this.userService.getUsersById( this.userId).subscribe((result: UserModel) => {
        this.user = result;
        console.log(result);
      });
    });
  }
}
