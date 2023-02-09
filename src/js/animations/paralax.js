addEventListener("scroll", event=>{
    
    let element = $("section.paralax");
    element.css({'background-position-y': `${element[0].getBoundingClientRect()['top']-element.height()}px`});
});