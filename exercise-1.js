// ***For all the exercises, be sure to log the output of the function to the console.***

        /************************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        //your code...
        function tekCamp(num){
            for (i=1; i <= num; i++){
                if( x % 3 == 0 ){
                    write("TEK")
                }
                if( x % 5 == 0 ){
                    write("camp")
                }
                if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
                    write(TEKcamp)
                }
            }
            tekCamp(100)



        /************************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

        //your code...
        function farenheitCelsius(f) {
          var c = Math.round(f*5/9) - 32
          console.log("The temperature is " + c)
        }
        farenheitCelsius(13);

        /************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(c){
            var f = Math.round(c*9/5) + 32
            console.log("The temperature is " + f)
        }
        celsiusFarenheit(16)




        /************************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(num) {
            if (num < 18)
            return false;
            else (num >= 18)
            return true;
        }
        console.log(canVote(14))







        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
        function strToArr(string) {
            var res = string.split(" ");
            console.log(res)
            return res;
        }
        strToArr("Hello World");






        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            let phone = number.split("").reverse().join("");
            return phone;
        }
        console.log(reversePhone("9234542323"))





        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...
        function myCar(myMake, myModel, myYear, myColor) {
            let car = {
                model: myModel,
                make: myMake,
                year: myYear,
                color: myColor
            }
            console.log(car.model)
            console.log(car.make)
            console.log(car.year)
            console.log(car.color)
        }
        myCar("ford", "mustang", "2006", "red")





        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...
        let nums = [10, 8, 9, 2, 1, 12]
        function evenOrOdd(arr) {
            arr.forEach(x => {
                console.log({[x] : x % 2 == 0 ? 'even': 'odd'})
            })
        }
            evenOrOdd(nums);





        function evenOrOdd(number){
            if (number % 2 == 0){
                return "even";
            }
            else {
                return "odd";
            }
        }
        console.log(evenOrOdd())





        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...

        var i = 89;
        var list = [0,1,2,3,4,5,6,7,8,9,10];
        var n = list.length;
        for (var i=0; i<n; i+=3) {
            console.log(list[i]);
        }
        console.log(i);


        /************************************************************************************/
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        
        let school = foodArray[foodArray.length-1]
            console.log(school.program)

        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word 
        //"is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".
        for(let i=0; i < foodArray.length-1, i++;) {
            if (endInS(foodArray[i])){
                const sentence = (foodArray[i] + "are" + adjectiveArray[i].value + ".");
            console.log(sentence);
            }else {
                const sentence = (foodArray[i] + "is" + adjectiveArray[i] + ".");
                console.log(sentence);
            }
        }
        console.log("TEKcamp is " + adjectiveArray[adjectiveArray.lenght-1] + ".");

        function endInS(word) {
            let charArray = String(word).split('');
            if (charArray[charArray.length-1] == "s") {
                return true;
            } else {
                return false;
            }
        }
// console.log(" the value of i in the loop is : " + i);
        /************************************************************* */
        // Refactor the for() loop to be a while loop.
        let i=0;
        do {
            console.log(" the value of i in the loop is : " + i);
            i++;
        }while (i<10);





        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
        function equation (){
            let answer = (30+2)*20 /10**2
            console.log(answer);
        }
        equation();

        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        // 0
        // "zero";
        // const zero = 20;
        // null
        // "0"
        // !""
        // {}
        // () => {console.log("hello TEKcamp!");
        // 125
        // undefined
        // ""
        console.log(`${Boolean(20)} because it is a number that holds value.`)
        console.log(`${Boolean(0)} becasue 0 isn't a value.`)
        console.log(`${Boolean("zero")} because a string is a value`)
        console.log(`${Boolean(zero = 20)} because it is a variable with value.`)
        console.log(`${Boolean(null)} because null does not have value.`)
        console.log(`${Boolean("0")} because a string is not a number value`)
        console.log(`${Boolean(!"")} because it negates the value of the string.`)
        console.log(`${Boolean({})} because it holds value.`)
        console.log(`${Boolean[() => {console.log("hello TEKcamp!")}]} because it is a console log`)
        console.log(`${Boolean(125)} because it is a number that holds value.`)
        console.log(`${Boolean(undefined)} because it does not have a value.`)
        console.log(`${Boolean("")} because it has nothing in for a value.`)



        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "sunday";
        switch(day){
            case "monday":
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night... the mood is right");
                break;
            case "friday":
                console.log("TGIF.  Friday truly is the best day of the week!")
                break;
            default:
                console.log("It's a weekend!")
        }
        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        let legal = (age > 21) ? "adult" : "minor";
        console.log(legal);
        let teen = (age > 13 && age < 19) ? "teen" : "not a teenager"
        console.log(teen)
        let retired = (age > 65) ? "retired" : "still working..."
        console.log(retired)



        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  
        The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  
        Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        //your code...
        let me = {
            firstName: "Zane",
            lastName: "Nichols",
            gender: "Male",
            healthy: "Yes",
            hobbies: "Disc golf, body building, video games, anime",
            profession: "Soon to be TekSystems Global employee ;)",
            education: "Sterling High School, Fort Hays State University",
            fullName: function() {
                return this.firstName + " " + this.lastName;
            }
        };
        let learn = me.firstName + " is learning Javascript"
        console.log(learn);
        console.log(me.fullName)
        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            // if(year > 2000 && year < 2100) {
            //     console.log("welcome to the 21st century");
            // }
            const year = 2021;
            if (year > 2000 && year < 2100 ? console.log('welcome to the 21st century') : undefined);

            // 2.
            // for(let i=0; i<nums.length; i++) {
            //     sum += nums[i];
            // }
            // console.log(sum);
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            sum = nums.reduce(functions(acc, value),{return: acc + value})
            console.log(sum)
            
            // 3. USE MAP
            // while(i < nums.length) {
            //     doubled.push(nums[i]*2);
            //     i++;
            // }
            
            // console.log(doubled);


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        //your code...
        const squares = nums.map(x => x*x);
        console.log(squares)




        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        //your code...
        const belowFive = fivePlus.filter(num => num < 5); 
        console.log(belowFive)





        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...
        const arrayLength = 20;
        const nums = Array.from(Array(arrayLength)).map(x => Math.floor(Math.random()* (9) + 1));
        console.log(nums)
        



        
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.
        const showNums = [12,22,33,44,55,66,77,88,99,101];
        let division = showNums.forEach(math)
        function math(arg, x, showNums) {
            showNums[x] = arg / 2;
          }
        console.log(division)
      

        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */
        
        function chessCalc(pieces) {
            
        }




        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.

        const reverseOnes = ones.reverse();
        console.log(reverseOnes)

        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.
        let numbers = [1, 2, 4, 7, 3, 5, 6];
        const oddNumbers = numbers.filter(performer);

        function performer(cb) {
            return cb % 2;
        }
        console.log(oddNumbers);


        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];
    
        let bio = devs.forEach(console.log(devs.name + " specializes in " + devs["tech_stack"]))
        console.log(bio)

        
        

        

        

        

        
        /************************** */  
        // Find all devs older than 24

        //your code here...
        let olderDevs = devs.filter((a) => a.age > 24);
        console.log(olderDevs);

        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        //your code here...
        let nonDevs = devs.filter((t) => t["tech_stack"])
        console.log(nonDevs)

        /************************** */  
        // Calculate the total age of all the devs
        
        //your code here...
        function totalAge(){
            let total = 0
            devs.forEach(old => {total += old.age})
            return console.log(total)
        }
        totalAge()


        /************************** */  
        // Find all female devs

        //your code here...
        let femaleDevs = devs.filter((f) => f.gender === "f" || f.gender === "F")
        console.log(femaleDevs)


        /************************** */  
        // lowercase the genders of every dev

        //your code here...
        let lowercase = devs.map(g => g.gender.toLowerCase())
        console.log(lowercase)


        /************************** */  
        // Sort the developers by name

        //your code here
        let sortedName = devs.sort((n, l) => {
            if(n.name > l.name){
                return 1
            }
            if(l.name > n.name){
                return -1
            }
            return 0
        })
        console.log(sortedName)


        /************************** */  
        // Sort the devs by age in descending order

        //your code here
        let sortedAge = devs.sort((a, o) => {
            return o.age - a.age
        })
        console.log(sortedAge)


        /************************** */  
        // Sort the male coders by age

        //your code here
        let maleDevs = devs.filter((g) => g.gender === "m" || g.gender === "M")
        let maleAge = maleDevs.sort((m, a) => {
            return a.age - m.age
        })
        console.log(maleAge)
        
        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here
        

        /************************************************************* */
        // Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  
        //Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];
        let newArray = [];
        function maxNumber() {
            for (let i of numbersMixed){
            if (i === "one"){
                newArray.push(1)
            }else if (i === "two"){
                newArray.push(2)
            }else if (i === "three"){
                newArray.push(3)
            }else {
                newArray.push(parseInt(i))
            }
            
            }
        

        
        console.log(Math.max(...orgArray))
        }
        maxNumber();
        let orgArray = newArray.filter(i => !isNaN(i))
        let sortedNewArray = orgArray.sort((n, e) => n - e)
        console.log(sortedNewArray)
        


        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  
        //Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            
        };
        


        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

        //Arrow functions are extremely useful in the sense of readibility and cleaner code.
        let a = 4;
        let b = 2;
        (num) => a + b + 100;



        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  
        //An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        
        mapObj.set("object", {company : "TEKsystems"} );
        mapObj.set("array", [] );
        mapObj.set({"boolean" : "true" });
        mapObj.set("number" , 23 )
        mapObj.set("null", null )



        console.log(mapObj.has({company : "TEKsystems"}));
        console.log("Because .has looks at the key and not the value of the pair.")

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  
        //Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...


        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  
        //Example output : ['string',number','boolean',array','object']


        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical 
        //operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  
        //The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
        let x = Math.random()
        let y = Math.random()
        const operations = [x + y, x - y, x * y, x / y];
        function doMath(x,y) {
            return console.log(operations[Math.floor(Math.random()*operations.length)]);
        };
        console.log(doMath)

        //your code...



        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  
        //This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...


        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  
        //Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code


        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  
        //Run the function returned by the higher order function to display the future value of the stock.  

        //your code...



// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}} 