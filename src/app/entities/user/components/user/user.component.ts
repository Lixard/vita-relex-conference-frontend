import {Component, Input, OnInit} from '@angular/core';
import {UserCreateModel, UserModel} from '../../models/user.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {PhotoService} from '../../../photo/services/photo.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;
  userId: number;
  linkImage: string = null;
  @Input()
  toggleChangeUser = false;
  toggle = false;
  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private location: Router, private userService: UserService, private photoService: PhotoService) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
      this.userId = params.id;
      this.userService.getUsersById( this.userId).subscribe((result: UserModel) => {
        this.user = result;
        console.log(result);
      });
    });
  }

  openImage(linkImage: string) {
    this.linkImage = linkImage;
  }

  closeImage() {
    this.linkImage = null;
  }
  openChangeUser() {
    this.toggleChangeUser = true;
  }
  hideChangeUser() {
    this.toggleChangeUser = false;
  }

  endCreating($event: UserCreateModel) {
    if ($event != null) {
      this.user.personalInfo = $event.personalInfo;
    }
    this.hideChangeUser();
  }

  openUploadImage() {
    this.toggle = true;
  }
  endChangeAvatar($event: string) {
    if ($event != null) {
      this.user.linkImage = $event;
    }
    this.toggle = false;
  }
}
