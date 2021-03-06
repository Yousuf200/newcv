// alert("HELLLLLLOOOO")

var n = document.querySelectorAll(".drum").length;

for(var i = 0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}


function handleClick() 
{
    var btninnhtml = this.innerHTML;    
    makesound(btninnhtml);
    addAnimation(btninnhtml);
}
document.addEventListener("keydown",test);

function test(event) 
{
    makesound(event.key);    
    addAnimation(event.key);
}

function makesound(key)
{

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
            
        default:
            console.log(this);
            break;
    }
}

function addAnimation(currKey)
{
    var actbtn = document.querySelector("."+currKey);

    actbtn.classList.add("pressed");

    setTimeout(function()
    {
        actbtn.classList.remove("pressed");
    }, 100);
}
