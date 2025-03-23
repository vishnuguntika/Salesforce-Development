import { LightningElement, track} from 'lwc';

export default class HelloWorld extends LightningElement {
  fullName = 'Naga Vishnu Prasad Guntika';
  title='aura';

  changeHandler(event){
    this.title = event.target.value; // so, here it changes the title base on value.

  }


 address = {
    city: 'Denton',
    postcode: 76201,
    country: 'USA'
  }

  trackHandler(event){
    // this.address.city = event.target.value; - this is not the good practice tracking only for 1 field. - bcoz we need to add the track too.
    // instead of adding the track operator we can do like this using spread operator
    this.address = {...this.address, "city": event.target.value}
  }

 // getter example
  users = ["john", "smith", "mike"]

  get firstUser(){
    return this.users[0].toUpperCase();
  }

  num1 = 10;
  num2 = 20;

  get multiply(){
     return this.num1 * this.num2;
  }


}