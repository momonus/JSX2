export default class Bmi{
  bmiCalculate(weight,height)
  {
      return weight/height**2;
  }
  bmiRegion(weight,height,region)
  {
    var ty='';
    var bmi=weight/height**2;
    if(region == "asia")
      {
        if(bmi <=18.5){ty="Under weight";}
        else if( bmi >18.5 && bmi<=24.9){ty= "Normal weight";}
        else if( bmi >24.9 && bmi<=29.9){ty= "Overweight";}
        else{ty= "obesity";}
      }
  else 
    {
       if(bmi <=28.5){ty="Under weight";}
       else if( bmi >28.5 && bmi<=34.9){ty= "Normal weight";}
       else if( bmi >34.9 && bmi<39.9){ty= "Overweight";}
       else{ty= "obesity";}
    }
    return ty;
  }
}