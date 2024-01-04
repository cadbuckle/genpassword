# Generate Password

## Description

This page runs a JavaScript that provides the user with the ability to generate a password. The generated password can then be cut from the page and pasted as required.

## Table of Contents

* [Links](#links)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [License](#license)
* [Features](#features)

## Links

- [Repo](https://github.com/cadbuckle/genpassword)
- [Live](https://cadbuckle.github.io/genpassword/)

## Installation

N/A

## Usage 

After the page is displayed, clicking the "Generate Password" button will start the process.
A confirmation prompt will initially be given to ensure the user wants to generate a password.
If the user has confirmed they want a password, further individual prompts will be given to the user for:
- Enter the maximum number of characters for the password. This must be from 8 to 128 characters.<br>
The following 4 prompts will then be given to the user. At least one of them must be selected.
- To confirm if the user wants to use lowercase characters.
- To confirm if the user wants to use uppercase characters.
- To confirm if the user wants to use numbers.
- To confirm if the user wants to use special characters.<br>
The system will then generate the password and then display it to the user. 

## Screenshots
### Initial Screen
<img src="./images/Screen-01-InitialScreen.png" width=50% alt="password generator initial screen"></img>
### Confirm Password Required
<img alt="password generator confirmation" src="./images/Screen-02-ConfirmPasswordRequired.png" width=50%></img>
### How Many Characters?
<img alt="password generator how many characters prompt" src="./images/Screen-03-HowManyCharacters.png" width=50%></img>
### Invalid Number of Characters
<img alt="password generator invalid number of characters error" src="./images/Screen-03-InvalidNumberOfCharacters.png" width=50%></img>
### Lowercase Required?
<img alt="password generator lowercase required prompt" src="./images/Screen-04-LowercaseRequired.png" width=50%></img>
### Uppercase Required?
<img alt="password generator uppercase required prompt" src="./images/Screen-05-UppercaseRequired.png" width=50%></img>
### Numbers Required?
<img alt="password generator numbers required prompt" src="./images/Screen-06-NumbersRequired.png" width=50%></img>
### Special Characters Required?
<img alt="password generator special characters required prompt" src="./images/Screen-07-SpecialCharactersRequired.png" width=50%></img>
### Must Select An Option Error
<img alt="password generator no option selected error" src="./images/Screen-08-MustSelectAnOption.png" width=50%></img>
### Generated Password
<img alt="password generator generated password screen" src="./images/Screen-09-GeneratedPassword.png" width=50%></img>

## License

MIT License as per repository.

## Features

JavaScript, notably:
- User entry/selection validation.
- Arrays: reading and concatenation of.
- Math: for randomisation of character selection.


© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
