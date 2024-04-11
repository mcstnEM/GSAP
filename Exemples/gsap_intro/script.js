gsap.registerPlugin('ScrollTrigger');

const mm = gsap.matchMedia();


const box = document.querySelector('.box');

mm.add('(max-width: 800px)', () => {
    // gsap.to(box, {
    //     rotation: 360,
    //     ease: 'none',
    //     repeat: -1,
    //     duration: 2
    // });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.box',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    tl.to(box, {
        rotation: 360,
        duration: 2
    })
    .to(box, {
        scale: 2,
        duration: 1
    })
});