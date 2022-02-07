import { LightningElement, track } from 'lwc';

export default class simpleDynamicMessage extends LightningElement {
  @track message;
  // initialize component
  connectedCallback() {
    console.log("I am in connectedCallback");
    var myUrl = "testing 123";

    this.message = myUrl;
  }
}