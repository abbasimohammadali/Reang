const rangeinput = document.querySelector('#input-range')
const backgroundImagcontainer = document.querySelector('.cantainer')

rangeinput.addEventListener('change' , function(event) {
    const numberrange = event.target.value
    backgroundImagcontainer.style.filter ='brightness('+ numberrange +'%)'
})
