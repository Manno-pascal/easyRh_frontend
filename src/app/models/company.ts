export class Company {
  constructor(
    public id: number,
    public companyName: string,
    public city: string,
    public address: string,
    public phoneNumber: string,
    public email: string,
    public ceoFirstname: string,
    public ceoLastname: string,
    public contactFirstname: string,
    public contactLastname: string,
    public domain: string,
    public password: string | null,
    public rh: boolean,
    public rqth: boolean,
    public ceo: boolean
  ) {}
}
