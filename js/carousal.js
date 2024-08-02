const reviews=[
    {
        name:"Rusdiansyah",
        reviews:"Hi, it's Rusdiansyah from Jakarta! I just received my new room fragrance, and it is exactly what I've been looking for!!!! I totally love it!!!! The scent is amazing and creates such a pleasant atmosphere!!!!! Thanks so much and thanks to Sandarma Official."
    },
    {
        name:"Rusandi",
        reviews:"I recently purchased a room fragrance from Sandarma Official, and I am very satisfied with the quality and service. The scent, longevity, and overall design are all truly exceptional. You guys totally rock!"
    }, {
        name:"Tuti",
        reviews:"I received my room fragrance today. Thank you! I was pleasantly surprised by the fast service and thrilled to start using it this weekend. The scent is perfect and fills the room beautifully. Thank you once again. I’m very particular about my home fragrances, and I must say that I have never been as pleased as I am with the fragrances I’ve purchased from you. They are just perfect."
    }
];
const Name=document.querySelector(".test_box h4");
const Review=document.querySelector(".test_box p");
const btn=document.getElementsByClassName("next-circle");

let i=0;
setInterval(myTimer, 2000);
const reviewName=document.querySelector(".test_box");
function myTimer() {
    Name.textContent=reviews[i%3].name;
    Review.textContent=reviews[i%3].reviews;
    btn[i%3].style.backgroundColor="black";
    btn[(i+1)%3].style.backgroundColor="#ff8aa5";
    btn[(i+2)%3].style.backgroundColor="#ff8aa5";


    i++;

}
