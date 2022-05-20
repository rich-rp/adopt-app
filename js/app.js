const galeria = document.getElementById('galeria')
const nombresArray = ['Rufo 2 meses', 'Hachi 4 meses', 'Peque 1 año', 'Salem 3 años', 'Mina 5 meses', 'Bicho 2 meses']

const galeriaImgs = () =>{
    for (let i = 1; i <= 6; i++) {
        const div = document.createElement('div')
        div.className = 'div--imgs'
        div.id='div--img'+i
        galeria.appendChild(div)
        div.innerHTML=`
            <img src=./css/img/`+i+`.png class='imgs' id=img`+i+` alt='Adoptame'></img>
            <span class="nombres" id="nombre`+i+`">`+nombresArray[i-1]+`</span>
        `
        const img = document.getElementById('img'+i)
        const verMas = document.getElementById('nombre'+i)
        img.onclick=(e)=>{
            e.preventDefault();
            if (verMas.className !== '') {
                console.log('dentro')
                verMas.classList.add('view')
                img.classList.add('efecto')
            }
        }
        img.onmouseout=(e)=>{
            e.preventDefault();
            verMas.classList.remove('view')
            img.classList.remove('efecto')
            img.style.transition = '.4s'
        }
    }
}
