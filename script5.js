//Counter
//0
//Increase
//Decrease
// Create this basic HTML (2 different headings and a button) Counter
// Create an EventListener for clicking on the button, increase the value of the second heading (currently 0)
//(Optional) Create a working decreasing button as well

$('.Increase').on('click', (event) => {

     
let h2 =  $('h2').html();
$('h2').html(parseInt(h2, 10)+1);

  

})

$('.Decrease').on('click', (event) => {

     
    
      
    let h2=  $('h2').html();
    $('h2').html(parseInt(h2, 10)-1);
    })

{
    
  };