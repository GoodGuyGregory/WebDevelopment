using System;

namespace Treehouse.FitnessFrog
{
  class Program
  {
      static void Main()
      {
        // Accumulator
        var runningTotal = 0.0;
     
        //loop to allow the app to continue 
        while(true)
        {
          // Prompt user for minutes exercised 
          //using the "\" lets you escape the quotes. 
          Console.Write("Enter how many minutes you exercied or type \'quit\' to exit: ");
          //var is a place holder for actual time
          var entry = Console.ReadLine();
          
          //try to catch users who may type quit in a strange way by accident to prevent an error
          if(entry.ToLower() == "quit")
          {
            break;
        
          }//if
            
            //lets try and catch ;) an error before we run the app to allow 
            //users who put other entries that might break the app
            
            try
            { 
               var minutes = double.Parse(entry);
              
                if(minutes <= 0)
              {
                Console.WriteLine(minutes +" is not an acceptable value. ");
                //continue is used to allow the program to continue running while but will start over the program 
                //allowing the user to enter the correct time. 
                //this technique is called input validation
                continue;
              }//if
              if(minutes <= 10)
              {
                Console.WriteLine("Better than nothing, am I right?");
              }//if
              else if(minutes <= 30)
              {
                Console.WriteLine("Way to go hot stuff!");
              }//else
              
              else if(minutes <= 60)
              { 
                Console.WriteLine("You must be a ninja warrior in training!");
              }//else
              else
              {
                Console.WriteLine("Okay, now you're just showing off!");
              }//else
              
              // Add minutes exercised to total 
              //+= is often refered to as syntactic sugar
              runningTotal += minutes;
             }//try
            catch(FormatException)
            {
              Console.WriteLine("Dude. That is not an Expression of time...");  
              continue;
            }//catch
            
            // Display total minutes exercised to the screen 
            Console.WriteLine("You've Entered "+ runningTotal + " minutes");
            // Repeat until user quits  
        
   }//while
            Console.WriteLine("Keep up the Goodwork and Goodbye!");  
  }//main 
 }//class
}//name space
