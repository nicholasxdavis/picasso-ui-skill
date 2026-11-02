const box = document.querySelector('.box')

let iterations

let i = 0
const timeline = async () => {
  box.innerText = i
  if (i < 10) {
    await box.animate({
      rotate: ['0deg', '360deg']
    },{
      duration: 1000,
      easing: 'ease-out'
    }).finished
    i++
    timeline()
  } else {
    i = 0
  }
}
timeline()