var array = ['img1.png','img2.png','img3.png','img4.png','img6.png'];

var i = 0;

document.getElementById('img').style.
backgroundImage = "url(" +"image/" + array[4]+")";
function images(){
    if(i===array.length){
        i = 0
        document.getElementById('img').style.
        backgroundImage = "url(" + "image/" + array[i]+")";
    }
    else{
        document.getElementById('img').style.
        backgroundImage = "url(" + " image/" + array[i]+")";
    }
}
setInterval(()=> {
    i++;
    images()
},6000)

    