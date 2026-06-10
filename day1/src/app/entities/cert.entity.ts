export class Cert {
  id: number;
  name: string;
  description: string;
  type: string;

  constructor(id: number, name: string, description: string, type: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
  }
}
