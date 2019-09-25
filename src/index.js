document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3743 //Enter the id from the fetched image here

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
    

    
  // var imageSmile = document.createElement(
  //  imageSmile.src = `https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg`
   document.getElementById("image").append(imageSmile);
  // document.body.append()
  var image = document.createElement('img')
  image.src =  `https://randopic.herokuapp.com/images/3743`
  document.getElementById('image_card').append(image)
})

document.getElementById("like_button").addEventListener("click", function(){
  console.log("button works")
  likes = document.getElementById("likes")
  likes++
})