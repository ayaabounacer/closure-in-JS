//A:attributes
//PP : premiers partie
//DP : deuxiem parties
//o : order
var i,j,k,n,tmp;
var PP=[];
var DP=[];
var A=[];
var C =[] ;


alert("***THIS PROGRAM COMPUTES THE CLOSURE OF A SET OF ATTRIBUTES***\n");


n=window.prompt("how many fonctionnal dependencies you want?\n");


for (i=0;i<n;i++)
    {
       alert("enter your " + (i+1) +" fonctionnal dependency ");
      alert("**1st part --> 2nd part**");
      PP[i]=window.prompt("enter the 1nd part of your FD: \n");
       DP[i]=window.prompt("enter the 2st part of your FD: ");
       
    }


   alert("YOUR INPUT IS : ");
    for (i=0;i<n;i++)
   alert(PP[i]+"-->"+DP[i]);


  A=A.concat(PP);
  A=A.concat(DP);


  function removeDuplicates(data) {
    return data.filter((value,index) => data.indexOf(value)==index);
}


  alert("the set of attributes of this relation is {"+removeDuplicates(A)+"}");
 


  C=window.prompt("Enter an attribute whose closure is to be found :");

alert("you want to calculate the closure of "+C);



for(i=0;i<C.length;i++)
    for(j=0;j<PP.length;j++){
        if(C[i]==PP[j]){
            C=C+DP[j];
          
        }
    }
   

alert("THE CLOSURE IS:");

    alert(C);
