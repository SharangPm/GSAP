var scene = document.getElementById('scene'); 
var parallax = new Parallax(scene);

    TweenMax.from(".logo", 1, {
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.staggerFrom(".menu-links ul li", 1, {
      opacity: 0,
      x: -20,
      ease: Power3.easeInOut
    }, 0.08)

    TweenMax.from(".search", 1, {
      delay: .5,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".account", 1, {
      delay: .6,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".cart", 1, {
      delay: .7,
      opacity: 0,
      x: -20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".juice", 1, {
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(1)", 2, {
      delay: 2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(2)", 2, {
      delay: 2.1,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(3)", 2, {
      delay: 2.2,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(4)", 2, {
      delay: 2.3,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".leaves .layer:nth-child(5)", 2, {
      delay: 2.5,
      opacity: 0,
      y: -800,
      ease: Expo.easeInOut
    })

    TweenMax.from(".title", 1, {
      delay: 1,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".tagline", 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".pages", 1, {
      delay: 1.3,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".more", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".desc", 1, {
      delay: 1.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".arrows", 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut
    })
    
   // Register and use ScrollTrigger for animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".body1 h1", {
    scrollTrigger: {
        trigger: ".body1",
        start: "top 75%", 
        toggleActions: "play none none none"
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power4.out"
});

gsap.from(".image-gallery img", {
    scrollTrigger: {
        trigger: ".body1",
        start: "top 75%",
        toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
});
gsap.from("h2", {
    scrollTrigger: {
      trigger: "h2",
      start: "top 75%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    scale: 0.8,
    duration: 1.2,
    ease: "power4.out"
  });