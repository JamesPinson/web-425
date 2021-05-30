/*
============================================
; Title:  Pinson-Assignment 1.4
; Author: James Pinson
; Date: May 30th 2021
; Description: We learn how to config and use Typescript. 
;===========================================
*/

//Here we import our IPerson Interface. 
import { IPerson } from "./person.interface";

//Here we create a person class implementing our IPerson Interface. 
class Person implements IPerson {
    
    firstName: string;
    lastName: string;

//Here we create a constructor that calls two parameters. 
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//Here we assign a new person variable to myName. 
let myName = new Person("James", "Pinson");

//This is where we call our myName variable to output the results. 
console.log(`My name is ${myName.firstName} ${myName.lastName}`);