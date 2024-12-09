document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

  let imageId = 3466 //Enter the id from the fetched image here

  const imageURL = `https://randopic.herokuapp.com/images/3466`

  const likeURL = `https://randopic.herokuapp.com/likes/3466`

  const commentsURL = `https://randopic.herokuapp.com/comments/3466`

  fetch(imageURL)
  .then(response => response.json())
  .then(data => {
    //  console.log(data) // Prints result from `response.json()` in getRequest
  console.log(data)
  


  image = document.createElement('img')
  image.setAttribute('src', data.url)
  document.body.prepend(image)

  const name = document.getElementById("name");
  name.innerText = data.name;

  const likes = document.getElementById("likes");
  likes.innerText = data.like_count;

  const likeButton = document.getElementById('like_button');
  likeButton.addEventListener('click', function(){
    likes.innerText++
    // fetch(likeURL),{
    //   method: 'PATCH',
    //   headers:{
    //     'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       likes: data.like_count
    //     })
    //   }
    })
    //likes.innerText = `${likes}Likes`
    //this is not going to work, because I don't have a database to fetch from, since I hardcoded in the value for likes.
  
  })
  })

  // fetch('https://randopic.herokuapp.com/images/3466')
  // return function(response){
  //   return response.json()
  // .then function{(console.log(response))}}
//})
  // fetch(imageURL)
  // .then function(response){
  // return response.json()
  // console.log(response)}

//   fetch(imageURL)
//   .then(response => response.json())
//   .then(images => console.log(response));
// })
// .then (function(pic){
//   const div = document.createElement('div')
//   div.setAttribute('src', 'json.url')
//   document.body.append(div)
// })