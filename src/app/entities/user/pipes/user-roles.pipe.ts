import {Pipe, PipeTransform} from '@angular/core';
import {RegisterRoles} from '../models/user.model';

@Pipe({
  name: 'userRoles'
})
export class UserRolesPipe implements PipeTransform {

  transform(value: RegisterRoles): string | undefined {
    if (value === null) {
      return undefined;
    }
    switch (value) {
      case RegisterRoles.USER:
        return 'Пользователь';
      case RegisterRoles.COMPANY_ACCOUNT:
        return 'Представитель компании';

    }
  }

}
