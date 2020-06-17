const c = document.querySelector('.C')
const d = document.querySelector('.D')
const e = document.querySelector('.E')
const f = document.querySelector('.F')
const g = document.querySelector('.G')
const a = document.querySelector('.A')

document.body.onkeypress = event => {
  switch (event.keyCode) {
    case 97:
      console.log('A')
      break

    case 115:
      console.log('S')
      break

    case 100:
      console.log('D')
      break

    case 102:
      console.log('F')
      break

    case 103:
      console.log('G')
      break

    case 104:
      console.log('H')
      break

    case 106:
      console.log('J')
      break
  }
}

c.onclick = () => {
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
  console.log('A')
}
