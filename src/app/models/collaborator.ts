import {Company} from "./company";

export class Collaborator {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public position: string,
    public positionType: string,
    public gender: string,
    public age: number,
    public warning: number,
    public comment: string | null,
    public dayOff: number,
    public phoneNumber: string,
    public email: string,
    public address: string,
    public city: string,
    public ceo: boolean,
    public country: string,
    public zip: string,
    public company: Company
  ) {
  }
}
