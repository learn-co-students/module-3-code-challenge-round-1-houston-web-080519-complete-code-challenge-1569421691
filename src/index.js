document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

<<<<<<< HEAD
  let imageId = 3463 //Enter the id from the fetched image here
=======
  let imageId = 3743 //Enter the id from the fetched image here
>>>>>>> b8e4abd94dd14a476e1c4aa544857feb55ded8ed

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  var imageSmile = document.createElement(image_id)
  fetch(imageURL)
    .then(function(image_id){
      return image_id.json()
    })
    .then(function(image_id){
      imageSmile = image_id
    })
    

    
  // var imageSmile = document.createElement('img')
  //  imageSmile.src = `https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg`
   document.getElementById("image").append(imageSmile);
  // document.body.append()
  var image = document.createElement('img')
  image.src =  `https://randopic.herokuapp.com/images/3743`
  document.getElementById('image_card').append(image)
})

<<<<<<< HEAD
fetch('https://randopic.herokuapp.com/images/3463')
.then(function(response){
    return response.json()
}) // closes the first then
.then(function(personals){
  // debugger
  for (var key in personals){ // i dont know how to bring out the information
    console.log(key);} // i know forEach not for
   //continuing as if it work

       const imagePlacement = document.querySelector('#image_card')
       imagePlacement.append(personals.url)

        const imageNamePlacement = document.querySelector("#name")
        imageNamePlacement.append(personals.name)
        

        const likePlacement = document.querySelector("#likes")
        likePlacement.append(personals.like_count)
        

        const commentPlacement = document.querySelector("#comment_form")
        commentPlacement
        
 
    }) //closes the for each

    
   // closes the second then
=======
document.getElementById("like_button").addEventListener("click", function(){
  console.log("button works")
  likes = document.getElementById("likes")
  likes++
})
>>>>>>> b8e4abd94dd14a476e1c4aa544857feb55ded8ed
