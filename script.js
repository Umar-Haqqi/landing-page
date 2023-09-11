const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from('#nav', {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to('.boundingElem', {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2
        })
        .from('#heroFooter', {
            y: -30,
            opacity: 0,
            duration: 0.5,
            delay: 0,
            ease: Expo.easeInOut
        })
}



// circle maximum skew on cursor move 
function circleMouseSkew() {
    // define default scale values
    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove", function (dets) {
        var xDiff = dets.clientX - xPrev;
        var yDiff = dets.clientY - yPrev;

        xPrev = dets.clientX;
        yPrevPrev = dets.clientY;

        xScale = gsap.utils.clamp(.8, 1.2, xDiff);
        yScale = gsap.utils.clamp(.8, 1.2, yDiff);
    });
}

// circle following cursor 
function circleMouseFollower() {
    window.addEventListener("mousemove", function (dets) {
        // console.log(dets.clientX, dets.clientY);
        var miniCircle = document.querySelector("#miniCircle");
        miniCircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

// creating image hover effect
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5
        });
    });

    elem.addEventListener("mousemove", function (dets) {
        // var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        // console.log(dets.clientY)
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            // top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot)
        });
    });


});



circleMouseSkew();
firstPageAnimation();
circleMouseFollower();
