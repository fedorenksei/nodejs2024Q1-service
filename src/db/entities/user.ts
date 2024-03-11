import { Crud } from '../crud';

export interface User {
  id: string;
  login: string;
  password: string;
  version: number;
  createdAt: number;
  updatedAt: number;
}

interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}

export class UserCrud extends Crud<User> {
  create(createDto: { login: string; password: string }): User {
    const timestamp = Date.now();
    const userInfo = Object.assign(createDto, {
      version: 1,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    return super.create(userInfo);
  }

  updatePassword(id: string, { oldPassword, newPassword }: UpdatePasswordDto) {
    const user = this.map.get(id);
    if (!user) return 'not-found';
    if (user.password !== oldPassword) return 'wrong-password';
    user.password = newPassword;
    user.version++;
    user.updatedAt = Date.now();
    return user;
  }
}

export const userDb = new UserCrud();
