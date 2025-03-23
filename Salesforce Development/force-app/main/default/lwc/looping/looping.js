import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
  carList = ["Ford", "Audi", "Maruthi", "Hyundai", "Mercedes"]


  ceoList = [
    {
      id: 1,
      company:"Google",
      name: "Sundar Pichai"
    },
    {
      id: 2,
      company:"Amazon",
      name: "Paulo Coelho"
    },
    {
      id: 3,
      company:"Facebook",
      name: "Jack Dorsey"
    },
    {
      id: 4,
      company:"Microsoft",
      name: "Bill Gates"
    },
    {
      id: 5,
      company:"Apple",
      name: "Steve Jobs"
    }
  ]
}