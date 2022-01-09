// Title: Assignment 1.4
// Author: Evan Durkin
// Date: January 8, 2022

import { IPerson } from "./person.interface";

class Person implements IPerson {

    firstName: string;
    lastName: string;

    constructor( firstName: string, lastName: string ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let myName = new Person("Evan", "Durkin")
console.log(`My name is ${myName.firstName} ${myName.lastName}`);