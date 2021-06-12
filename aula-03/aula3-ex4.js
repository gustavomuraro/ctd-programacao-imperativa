function calculateBMI (weight, height){
  //must be in meters -> convert 
  height=height/100;
  //calculate BMI, format result
  return (weight/Math.pow(height,2));
}

//print result
console.log('BMI= '+calculateBMI(78, 167));

