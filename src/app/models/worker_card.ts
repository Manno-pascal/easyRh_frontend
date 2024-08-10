export class WorkerCard {
  unevaleuraleatoire?: string;
  constructor(
    public firstname: string,
    public lastname: string,
    public position: string,
    public positionType: string,
    public imageUrl: string,
    public warning: number,
    public warned: boolean,

  )
  {
  }

  setUnevaleuraleatoire(value: string) {
    this.unevaleuraleatoire = value;
  }

  addWarning(){
    this.warning++;
    this.warned = true;
  }
  removeWarning(){
    this.warning--;
    this.warned = false;
  }
}
