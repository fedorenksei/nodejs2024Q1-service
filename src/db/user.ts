import { Crud } from './crud';

export interface User {
  id: string;
  login: string;
  password: string;
}

interface UpdatePasswordDto {
  oldPassword: string;
  newPassword: string;
}

class UserCrud extends Crud<User> {
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
