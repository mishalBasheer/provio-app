export class User {
  constructor(
    private name: string,
    private token: string,
    private userid: string,
    private expirationDate: string,
  ) {}
  getExpirationTime(): string {
    return this.expirationDate;
  }
}