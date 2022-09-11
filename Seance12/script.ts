const a: string = 'ahmed';

interface IAdress {
  rue: string;
  blocNumber: number;
}

interface IProfile {
  name?: string;
  age?: number;
  adress?: IAdress;
}

const oobj: IProfile = {};

oobj.adress.rue = 'ahmed';
