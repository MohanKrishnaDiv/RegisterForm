import { Component,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Output() labelDataToParent= new EventEmitter;

  valid:boolean=true;
  reference:string='';
  additionalDataValidation=new FormGroup({
    dropDownData : new FormControl(""),
    dropDownoptinalType : new FormControl("")
  })

labelDataToApp()
{
  let stringPattern = /^[A-Za-z]+$/;
  let numberPattern = /^[0-9]+$/;
  let booleanPattern = /^(?:tru|fals)e$/;
  let hexadecimalPattern = /^[#][0-9A-Fa-f]+$/;
  let binaryPattern = /^[0-1]+$/;
  let dropDownOption = this.additionalDataValidation.value.dropDownoptinalType;
  let labelData= this.additionalDataValidation.value.dropDownData;

    this.labelDataToParent.emit(labelData)
  
  if (booleanPattern.test(labelData as string))
  {
      console.log('The value is a string.') ;
      this.reference = "boolean";
  }
   else if (binaryPattern.test(labelData as string))
  {
      this.reference = "binary";
  } 
  else if (stringPattern.test(labelData as string)) 
  {
    this.reference = "string";
  } 
  else if (numberPattern.test(labelData as string))
  {
    this.reference = "number";
  } 
  else if (hexadecimalPattern.test(labelData as string))
  {
    this.reference = "hexa-decimal";
  } 
console.log("drop",dropDownOption,this.reference)
  if (this.reference==dropDownOption)
  {
    this.valid = true;
  }
  else
  {
      this.valid = false;
  }
  
}

}
