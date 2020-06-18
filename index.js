const c = document.querySelector('.C')
const d = document.querySelector('.D')
const e = document.querySelector('.E')
const f = document.querySelector('.F')
const g = document.querySelector('.G')
const a = document.querySelector('.A')
const b = document.querySelector('.B')
const db = document.querySelector('.Db')
const eb = document.querySelector('.Eb')
const gb = document.querySelector('.Gb')
const ab = document.querySelector('.Ab')
const bb = document.querySelector('.Bb')

document.body.onkeypress = event => {
  switch (event.keyCode) {
    case 97:
      console.log('C')
      break

    case 115:
      console.log('D')
      break

    case 100:
      console.log('E')
      break

    case 102:
      console.log('F')
      break

    case 103:
      console.log('G')
      break

    case 104:
      console.log('A')
      break

    case 106:
      console.log('B')
      break
  }
}

c.onclick = () =>{
  console.log('C')
}

d.onclick = () => {
  console.log('D')
}

e.onclick = () => {
  console.log('E')
}

f.onclick = () => {
  console.log('F')
}

g.onclick = () => {
  console.log('G')
}

a.onclick = () => {
  console.log('Db')
}

a.onclick = () => {
  console.log('Eb')
}

a.onclick = () => {
  console.log('Gb')
}

a.onclick = () => {
  console.log('Ab')
}

a.onclick = () => {
  console.log('Bb')
}
