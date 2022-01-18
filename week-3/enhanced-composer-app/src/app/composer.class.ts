import { IComposer } from "./composer.interface";

export class Composer {
  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Frédéric Chopin", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Ludwig Van Beethoven", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Ryuichi Sakamoto", genre: "Electronic"
      },
      {
        composerId: 103, fullName: "Stephen Sondheim", genre: "Vocal"
      },
      {
        composerId: 104, fullName: "Thelonious Monk", genre: "Jazz"
      }
    ]
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }
}
