var crsr=document.querySelector("#cursor")
var crsrblr=document.querySelector("#cursor_blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+20+"px" 
   crsr.style.top=dets.y+"px" 
   crsrblr.style.left=dets.x-180+"px" 
    crsrblr.style.top=dets.y-180+"px"  /* minus is wjh se kiya because wo starting me mere cursor ke saath ek top wale part se move kr rha tha ab mera cursor blur ke centre me aa gya hai*/
})
var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2.5
        crsr.style.border="0.7px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95c11f"
        crsr.style.backgroundColor="#95c11f"
    })
})
gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1, 
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -30%",
        end:"top -70%",
        scrub:1, /* ye kya krega ki color jo change ho rha hia wo dheere dheere dheere cahnge na ki ek hi saath */
    }
})
gsap.from("#about_us img,#about_us_in",{
    y:90, /* iska matlb ye y ais se aaye neeche se upar jab ham scroll krenge to*/
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about_us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})
gsap.from(".card",{
    scale:0.8, /* isme boom prakat ho jayega turant*/
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:5

    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:5

    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 90%",
        scrub:3

    }
})