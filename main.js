const menuToggle = document.querySelector('.toggle')
const pg1 = document.querySelector('.pg1')

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active')
  pg1.classList.toggle('active')
})