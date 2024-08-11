
const button=document.querySelector('#button')
const input =document.querySelector('#input')
button.addEventListener('click',fetchDATA)

async function fetchDATA(){
  pokeName=input.value.toLowerCase();
  try {
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    console.log(response)
    const data=await response.json()
    console.log(data)
const img =document.querySelector('[data-img]')    
img.src=data.sprites.front_default;
img.style.display='block'
} catch (error) {
    console.error(error)
  }
input.value=''
}

