//
// Get your solution of the fourth exercise from yesterday
// Create and include a scripts.js file just like before
// Create an array with your neighbours'
//  (at your table) names and yours
// Using forEach add each name to the <ul> list
// (Optional) Your name should be bold

let neighbours = ['Eszter', 'Laci', 'Tamas', 'Indi'];

neighbours.forEach((neighbour, index) => {
    console.log (neighbour) 
    let li = $("<li>").html(neighbour)

if (neighbour === 'Indi'){
    li.css("font-weight", "bold")
 }

 $("ul").append(li);
});


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using javascript's jQuery framework. How awesome!"
  };
  
   let title = $("<h1>").html(additionalBlock['title']);
   let text = $("<p>").html(additionalBlock['text']);
 
   $("body").append(title);
 

   $("body").append(text);
   ;
    