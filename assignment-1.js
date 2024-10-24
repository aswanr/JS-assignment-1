// 1) Create variables with different data types available in JS and print their data types along with each variable name in the console

// String
    var a="string";
    console.log(typeof(a));
// Number
    var b=10;
    console.log(typeof(b));

// Boolen
    var c=true;
    console.log(typeof(c));

// dictonry
    var d={name:"sugu"};
    console.log(typeof(d));

// Undefined
    var e;
    console.log(typeof(e));

// Null
    var f=null;
    console.log(typeof(f));

// symbol
    var sym=Symbol("fire")
    console.log(typeof(sym));

// Bigint
    var g=123456789125404258525n;
    console.log(typeof(g));



// 2)Write a JS program to show an alert message on the loading of the website.
    alert("alerted")


// 3) ["1", "2", "3", "4", "5", "6", "7"] 

// a. Remove number "6" from the array and console the length of the array.
    var array1= ["1", "2", "3", "4", "5", "6", "7"] ;
    array1.splice(5,1);

    console.log(array1.length)

// b. Convert all the items of the array to data type number and console each items data type, use any of the array iteration methods provided by JS for iteration.
    var newarry=new Array()
    for (var x=0;x<array1.length;x++){
        newarry[x]=parseInt(array1[x]);
    }
    console.log(newarry);

//c. Remove last three items of the array, use JS provided array method, then console the array and then add "one" and "two" (strings) to the beginning of the array and console the array.
    console.log(array1);
    array1.pop();
    array1.pop();
    array1.unshift("one","two");
    console.log(`${array1}`);
 
// d. Using any one of the array iteration methods console the string concatenation of all items of the array and also console the sum of all the items ( convert to integer before calculating)
    var sum=0;
    var array2= ["1", "2", "3", "4", "5", "6", "7"] ;
    for(var z=0;z<array2.length;z++){
        sum=sum+parseInt(array2[z]);
    }
    console.log(`${sum}`);

// e. Filter out item "3" from the array and console the array (use array method)
    var fil=array2.indexOf("3");
    array2.splice(fil,1);
    console.log(`${array2}`);

// f. Iterate the array and console the item, when item is either "3", "6" or "7"
for(var xy = 0; xy<array2.length; xy++){
    if(array2[xy] === "3" || array2[xy] === "6" || array2[xy] === "7" ){
        console.log(array2[xy]);
    }
}

// g. [1, 2, "3", 4, 5, 6,"7"]  Compare this array with the above given array and console only if both items of the array have same data type. (Compare each item of this array with each item of the other array)
    a11=[1, 2, "3", 4, 5, 6,"7"]
    a22=[1,2,"4",5,"6",7]
    for (var i=0;i<a11.length;i++){
       for(var j=0;j<a22.length;j++){
        if(a11[i]===a22[j]){
            console.log(typeof a11[i],`${a11[i]}`);
        }
       }
    }

// h. [0,2,3,7,5,6,8] iterate the array and multiply each item by its index value and console the result only if result is greater than 40.
    var arrayh=[0,2,3,7,5,6,8];
    for (var i=-1;i<arrayh.length;i++){
        var mulvalue=arrayh[i]*i;
        if(mulvalue>40){
            console.log("sum is greater is",`${mulvalue}`);
        }
    }

// i. Create two arrays with five items each and merge the array into a single array and then console it.
    var one=["appu","ammu","anu","sree","anuoop"];
    var two=["jhon","reo","phil","carter","mia"];
    one=one.concat(two);
    console.log(`${one}`);
