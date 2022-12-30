
$(document).ready(()=>{

    $('.newgame').click(()=>{
        reset()
        document.getElementsByClassName("game")[0].classList.remove('ended')
        ended = false
    });
    $('.reset').click(()=>{
        reset();
        x_points.innerHTML = 0;
        o_points.innerHTML = 0;
    });
    

});

for(let cell of cells){
    cell.addEventListener('click', ()=>{
        mark(cell);
    })
}
