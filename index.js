

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
    numberOfPosts = savedPosts.length;
  });
 
  let numberOfPosts;

$('.Submit').on('click', (event) => {
  let path = "posts/" + numberOfPosts;
  let dataToSave = {
    title: $(".titletext").val(),
    text: $(".contenttext").val()
  };
  fb.ref(path).set(dataToSave);

  numberOfPosts = numberOfPosts + 1;
     
  let number  =  $(".addpostnumber").html();
  $(".addpostnumber").html(parseInt(number)+1);
  
    
  
  })
  
//  //let neighbours = ['Eszter', 'Laci', 'Tamas', 'Indi'];

// neighbours.forEach((neighbour, index) => {
//   console.log (neighbour) 
//   let li = $("<li>").html(neighbour)

// $("ul").append(li);




// if (neighbour === 'Indi'){
//   li.css("font-weight", "bold")
// }
// });