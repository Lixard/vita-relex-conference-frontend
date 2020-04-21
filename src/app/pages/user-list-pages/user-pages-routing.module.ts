import {NgModule} from '@angular/core';
import {UserListPageComponent} from './pages/user-list-page/user-list-page.component';
import {UserComponent} from '../../entities/user/components/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {AvatarEditorComponent} from '../../entities/user/components/avatar-editor/avatar-editor.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserListPageComponent
  },
  {
    path: ':id',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPagesRoutingModule { }
