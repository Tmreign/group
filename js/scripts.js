 
//  var typeOfErand =[];

//  var customErand = document.getElementById("typeErrand").val();
// var customTime = document.getElementById("Time").val();
 
 function errand(book,data,proposal){
     this.book=book;
     this.data=data;
     this.proposal=proposal;
     this.price=0;

 }



 var time=['oneday','twoday','fiveday','onewk','twowk']

 errand.prototype.finalOutput =function(){
     if(this.book==[0] ||this.data==[0] || this.proposal==[0]){
         this.price+=300;
     }
     else if(this.book==[1]||this.data==[1] || this.proposal==[1]){
         this.price +=500;
     }
     else if(this.book==[2]||this.data==[2] || this.proposal==[2]){
        this.price +=800;
    }
    else if(this.book==[3]||this.data==[3] || this.proposal==[3]){
        this.price +=1000;
    }
    else if(this.book==[4]||this.data==[4] || this.proposal==[4]){
        this.price +=1200;
    }

    return this.price;
 }

 errand.prototype.cost= function(){

     var cost =0;
     this.errand.forEach(function(errand){
         
        cost+= errand.cost

     });
         
     this.cost =cost
     
 }

$(document).ready(function() {
    $("#submit").click(function() {
        event.preventDefault();
        var customErrand = $("#vary option:selected").val();
        var customTime= $("#duration option:selected").val();
        var newItem =new errand(customErrand,customTime);
        
        var newRow = '<tr><th scope="row">'  + '</th><td id="errand">' + $("#vary option:selected").text()  + '</td><td id="duration">' + $("#duration option:selected").text() + '</td></tr>'

      $("#result").append(newRow);

  });
});


 