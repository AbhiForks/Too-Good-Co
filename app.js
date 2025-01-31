//This function is responsible for setting up the animations for the entire page
function locomotiveAnimations() {
    //Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    //Create a new instance of LocomotiveScroll
    const locoScroll = new LocomotiveScroll({
      //The element that will be scrolled
      el: document.querySelector("#main"),
      //Smooth scrolling
      smooth: true
    });

    //When the user scrolls, update the ScrollTrigger
    locoScroll.on("scroll", ScrollTrigger.update);

    //Set up the ScrollTrigger to use the LocomotiveScroll instance
    ScrollTrigger.scrollerProxy("#main", {
      //Get the current scroll position
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      },
      //Get the bounding rectangle of the scroller
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      //The type of pinning to use
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    //When the user resizes the window, update the ScrollTrigger
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    //Initialize the ScrollTrigger
    ScrollTrigger.refresh();
}
//Call the function to set up the animations
locomotiveAnimations();

//This function is responsible for setting up the animations for the navbar
function navbarAnimation() {
    //Animate the navbar
    gsap.to("#nav-part1 svg", {
        //Animate the y position of the navbar
        transform: "translateY(-100%)",
        //Set up the ScrollTrigger
        scrollTrigger: {
            //The element that will trigger the animation
            trigger: "#page1",
            //The scroller that will be used
            scroller: "#main",
            //The start position of the animation
            start: "top 0%",
            //The end position of the animation
            end: "top -5%",
            //Enable scrubbing
            scrub: true
        }
    })
    //Animate the links in the navbar
    gsap.to("#nav-part2 #links", {
        //Animate the y position of the links
        transform: "translateY(-100%)",
        //Animate the opacity of the links
        opacity: 0,
        //Set up the ScrollTrigger
        scrollTrigger: {
            //The element that will trigger the animation
            trigger: "#page1",
            //The scroller that will be used
            scroller: "#main",
            //The start position of the animation
            start: "top 0",
            //The end position of the animation
            end: "top -5%",
            //Enable scrubbing
            scrub: true
        }
    })
}
//Call the function to set up the animations
navbarAnimation();

//This function is responsible for setting up the animations for the video container
function videoconAnimation() {
    //Get the video container element
    let videocon = document.querySelector("#video-container");
    //Get the play button element
    let playbtn = document.querySelector("#play");

    //When the user hovers over the video container, animate the play button
    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            //Animate the scale of the play button
            scale: 1,
            //Animate the opacity of the play button
            opacity: 1
        })
    })

    //When the user leaves the video container, animate the play button
    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            //Animate the scale of the play button
            scale: 0,
            //Animate the opacity of the play button
            opacity: 0
        })
    })

    //When the user moves the mouse over the video container, animate the play button
    videocon.addEventListener("mousemove", function (dets) {
        //Animate the x and y positions of the play button
        gsap.to(playbtn, {
            left: dets.x-85,
            top: dets.y-80,
        })
    })
}
//Call the function to set up the animations
videoconAnimation();

//This function is responsible for setting up the loading animations
function loadingAnimation() {
    //Animate the h1 elements
    gsap.from("#page1 h1", {
        //Animate the y position of the h1 elements
        y: 100,
        //Animate the opacity of the h1 elements
        opacity: 0,
        //Delay the animation
        delay:0.5,
        //Set the duration of the animation
        duration: 0.9,
        //Stagger the animation
        stagger: 0.3
    })
    //Animate the video container
    gsap.from("#page1 #video-container", {
        //Animate the scale of the video container
        scale: 0.9,
        //Animate the opacity of the video container
        opacity: 0,
        //Delay the animation
        delay:1.3,
        //Set the duration of the animation
        duration: 0.5,
    })
}
//Call the function to set up the animations
loadingAnimation();

//This function is responsible for setting up the cursor animations
function cursorAnimation() {
    //Get the cursor element
    document.addEventListener("mousemove", function(dets){
        //Animate the cursor
        gsap.to("#cursor", {
            //Animate the x and y positions of the cursor
            left: dets.x,
            top: dets.y,
        })
    })
    
    //Loop through all the elements with the class "child"
    document.querySelectorAll(".child").forEach(function(elem) {
        //When the user hovers over an element, animate the cursor
        elem.addEventListener("mouseenter", function() {
            //Get the cursor element
            const cursor = document.querySelector("#cursor");
            //Get the background color of the element
            const bgColor = elem.getAttribute("data-color");
            
            //Animate the cursor
            gsap.to(cursor, {
                //Animate the background color of the cursor
                backgroundColor: bgColor,
                //Animate the scale of the cursor
                transform: 'translate(-50%,-50%) scale(1)'
            });
        });
        //When the user leaves an element, animate the cursor
        elem.addEventListener("mouseleave", function() {
            //Get the cursor element
            const cursor = document.querySelector("#cursor");
            
            //Animate the cursor
            gsap.to(cursor, {
                //Animate the background color of the cursor
                backgroundColor: 'transparent',
                //Animate the scale of the cursor
                transform: 'translate(-50%,-50%) scale(0)'
            });
        });
    })
}
//Call the function to set up the animations
cursorAnimation();

