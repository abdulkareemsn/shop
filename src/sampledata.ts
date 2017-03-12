import {IFieldDescription} from './app/shop-form';
export const formatData:IFieldDescription[] = [
  {
    "caption": "Name",
    "type": "text",
    "mandatory": true,
    "defaultValue": "",
    "validationMessage": "Name is mandatory"
  },
  {
    "caption": "Description",
    "type": "text",
    "mandatory": true,
    "defaultValue": "Please enter something here....",
    "validationMessage": "Oops you cant have it empty"
  },
  {
    "caption": "Height",
    "type": "int",
    "mandatory": false,
    "defaultValue": "",
    "validationMessage": ""
  },
  {
    "caption": "Width",
    "type": "int",
    "mandatory": false,
    "defaultValue": "Yes",
    "validationMessage": ""
  },
  {
    "caption": "IsSmart",
    "type": "bool",
    "mandatory": true,
    "defaultValue": "False",
    "validationMessage": ""
  }
]