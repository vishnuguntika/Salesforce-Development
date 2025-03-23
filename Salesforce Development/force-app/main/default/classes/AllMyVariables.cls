public with sharing class AllMyVariables {
    public Boolean isThisCorrect = true;
    public Account myAccRecord = new Account();
    public  Date todaysDate = Date.today();

    public static String IntegercalculateAgeInYears(Date dateOfBirthInput){

        Date currentDate = new AllMyVariables().todaysDate;
        Integer ageInYears = (dateOfBirthInput.daysBetween(currentDate))/12;
        String returnedValue = 'Your age is ' + String.valueOf(ageInYears) + ' years';
        return returnedValue;

    }

    /**
     * we use this to execute in anonymous window
     * Integer ageInYears = AllMyVariables.ageofPerson(Date.new Instance(1999,10,13));
       System.debug(ageInYears);

     */


    
    public static Decimal calculateFinalDiscountForCustomer(Decimal sellingPrice, Integer discountPercent){

    Decimal finalPrice = sellingPrice - (sellingPrice * (discountPercent))/100;
    return finalPrice;


    }

    public static Decimal calculateFinalDiscountForCustomer(String customerType, Decimal sellingPrice, Integer discountPercent){
        
        if(customerType == 'Retail'){
        Decimal finalPrice = sellingPrice - (sellingPrice * (discountPercent))/100;
        return finalPrice;
    
        }else{
            Decimal finalPrice = sellingPrice - (sellingPrice * (discountPercent)/100 - (sellingPrice*0.15));
            return finalPrice;
        
        }
    }
}