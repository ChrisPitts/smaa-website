// Time in miliseconds for each animation
var animationTime = 400;

// Intersection Observer Options
var options = {
    root: null, 
    threshold: 1.0 
};

// Intersection Observer Callback
function callback(entries, observer)
{
    entries.forEach(entry =>{
        if(entry.isIntersecting)
        {
            let element = entry.target;
            // console.log(element.dataset.index);
            
            if(element.dataset.index >= "1")
            {
                element.style.transform ="translate(350px, -250px)";
                if(element.dataset.index === "1")
                {
                    element.style.width = "300px";
                    element.style.height = "300px";
                    element.style.marginTop = "-150px";
                    element.style.marginLeft = "-150px";
                }

            }
            if(element.dataset.index >= "2")
            {
                setTimeout(()=>{
                    element.style.transform ="translate(550px, 0px)";
                    if(element.dataset.index === "2")
                    {
                        element.style.width = "300px";
                        element.style.height = "300px";
                        element.style.marginTop = "-150px";
                        element.style.marginLeft = "-150px";
                        

                    }
                }, animationTime);
                
            }
            if(element.dataset.index >= "3")
            {
                setTimeout(()=>{
                    element.style.transform ="translate(350px, 250px)";
                    if(element.dataset.index === "3")
                    {
                        element.style.width = "300px";
                        element.style.height = "300px";
                        element.style.marginTop = "-150px";
                        element.style.marginLeft = "-150px";
                    }
                }, animationTime * 2);
            }
        }
        observer.unobserve(entry.target);
    });
}

let observer = new IntersectionObserver(callback, options);

// Observe all circles
let targets = document.querySelectorAll('.circle');
targets.forEach(target => observer.observe(target));