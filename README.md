# BMI Calculator Package

This npm package provides a set of functions for health-related calculations BMI (Body Mass Index) The function are designed to work with metric units, specifically weight in kilograms and height in meters.

## Installation

You can install the package using npm:

`npm install calc-bmi` 

Save to grepper

## Usage

Here's an example of how to use the BMI calculation function from the package:

    import { getBMI } from 'health-utils';
    
    const result = getBMI(70, 1.75);
    console.log(result);

This will output an object containing the calculated BMI and its corresponding WHO classification:

`{ bmi: '22.86', status: 'Normal' }`

## Functions

### `getBMI(weight, height)`

Calculates the Body Mass Index (BMI) based on weight and height in kilograms and meters, respectively.

-   **Parameters:**
    
    -   `weight` (number): The weight in kilograms.
    -   `height` (number): The height in meters.
-   **Throws:**
    
    -   `TypeError` if weight or height is not a number.
-   **Returns:**
    
    -   An object containing the calculated BMI and the corresponding WHO classification.