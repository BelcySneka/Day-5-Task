
 //1st for loop

var mydetails1 = [{
    "Name":"A.Belcy sneka",
    "Age":22,
    "Degree":"B.sc(cs)",
    "Address":"Neasapakkam,Chennai",
    "Number":"918283989799"
   
    }]
    for(var i=0;i<mydetails1.length;i++){
        console.log(mydetails1[i]);
   
   }

   // 2nd for in loop

   var mydetails = {
    "Name":"A.Belcy sneka",
    "Age":22,
    "Degree":"B.SC(cs)",
    "Address":"Nesapakkam,Chennai",
    "Number":"918378323287",
    };
   
    for (var i in mydetails){
    console.log(i,mydetails[i]);
    }

    //3rd for of loop

    const result22 = [10,20,30,40,50]
 for(var newresult22 of result22){
     console.log(newresult22);
 }


 //4th for each loop

 var result1 = [200,201,202,203,204,205]
 result1.forEach(numbers=>{console.log(numbers)});
    
























//4th for each loop

var result = [200,201,202,203,204,205]
 result.forEach(numbers=>{console.log(numbers)});