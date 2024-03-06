/**
 * Calculates the Body Mass Index (BMI) based on weight and height in kilograms and meters, respectively.
 *
 * @param {number} weight The weight in kilograms.
 * @param {number} height The height in meters.
 * @throws {TypeError} If weight or height is not a number.
 * @returns {{bmi: number, status: string}} An object containing the calculated BMI and the corresponding WHO classification.
 */
export function getBMI(weight, height) {
    if (typeof weight !== "number" || typeof height !== "number") {
      return({error: "Weight and height must be numbers."});
    }
    if(weight <= 0 || height <= 0) {
      return({error: "Weight and height must be greater than 0."});
    }
   
    const bmi = (weight / (height * height)).toFixed(2);
    let status;
  
    if (bmi < 18.5) {
      status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      status = "Overweight";
    } else {
      status = "Obese";
    }
  
    return { bmi, status };
  }