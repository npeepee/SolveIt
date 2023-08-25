xport interface User {
    user_id: number;
    username: string;
    role: RoleEnum;
  }
  
export enum RoleEnum {
    User = 1,
    Admin = 2,
}