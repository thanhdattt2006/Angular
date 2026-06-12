import { Injectable } from "@angular/core";
import { Role } from "../entities/role.entity";

@Injectable({
  providedIn: "root"
})
export class RoleService {
  private roles: Role[];

  constructor() {
    this.roles = [
      new Role(1, 'Admin'),
      new Role(2, 'Manager'),
      new Role(3, 'User'),
    ];
  }

  findAll() {
    return this.roles;
  }

  findById(id: number) {
    return this.roles.find(r => r.id == id);
  }
}
