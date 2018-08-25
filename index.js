let path = "posts/1";
let dataToSave = {
  title: "My first saved blog post",
  text: "Some hilarious content, which proves how awesome I am."
};
fb.ref("users.web1").set(dataToSave);

fb.ref("posts").once('value').then(data => {
    let savedPosts = data.val();
  });