import ThirdSelector from '@salesforce/schema/EmailDomainKey.ThirdSelector';
import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

  selected={} // for storing answers
  correctAnswers = 0 // to show the number of correct answers..
  isSubmitted = false // use to show the result
  myQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a template loop",
      answers:{
        a: "for:each",
        b: "map loop",
        c: "iterator",
      },
      correctAnswer: "b"
    },
    {
      id: "Question2",
      question: "Which of the file is invalid in LWC component folder",
      answers:{
        a: ".svg",
        b: ".apex",
        c: ".js",
      },
      correctAnswer: "b"
    },
    {
      id: "Question3",
      question: "Which one of the following is not a directive",
      answers:{
        a: "for:each",
        b: "lwc:if",
        c: "@track",
      },
      correctAnswer: "c"
    }

  ];

  get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length) // here Object.keys() will return the keys of an object array.
  }
// for applying dynamic styling to our resut.
  get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success' : 'slds-text-color_error'}`
  }

  // changeHandler gets called on every click on the options
  changeHandler(event){
    console.log("name is: " + event.target.name)
    console.log("value is: " + event.target.value)
    const{name, value} = event.target // object destructuring
    // const name = event.target.name
    // const value = event.target.value -- instead of writing 2 lines we can write like above.
    this.selected ={...this.selected, [name]: value}
    // this.selected = {"Question1": "a"} - for above line of code  
  }

  // form submit handler
  submitHandler(event){
    event.preventDefault()
    // this.selected = {"Question1": "a", "Question2": "b", "Question3": "c"}
    // this.myQuestions.filter(item=>"a" === "c")
    let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
    this.correctAnswers = correct.length
    this.isSubmitted = true

  }

  // Reset button handler
  resetHandler(){
    this.selected = {}
    this.correctAnswers = 0
    this.isSubmitted = false

  }
}