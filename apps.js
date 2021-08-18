const button = document.querySelector("#btn")
const sector = document.querySelector("#sector")

button.addEventListener('click', ()=>{
    let color = '#'
    const random = Math.random().toString(18).slice(2,8);
    color += random;
    console.log(color)
    sector.style.backgroundColor = color;
})