// global class can view from all over the organization
// public class can view from only to my org
// private class only for me (inner class)

// we can not create a global class inside the public class.

// public with sharing class Accessmodifiers {
//     // this private class only view to Accessmodifiers class.
//     private class MyPrivateInfo{

//     }
    
// }


public with sharing class Accessmodifiers {
    static void checkAccessForVariables(){
        Integer myFinalCount = new VariablesandKeyWords().i;
        Boolean checkIfRecExists = new VariablesandKeyWords().checkIfRecordExists; // does not show, this was in private.
    }
}
