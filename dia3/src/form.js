const input = document.querySelector('[data-js="user"]')

const dontChange = ['da', 'das', 'de', 'do', 'dos']

input.addEventListener('input', (e) => {
  const valueArray = e.target.value.split(' ')
  console.log('valueArray >', valueArray)

  e.target.value = valueArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
    ? word.toLowerCase() : fixCase(word)
  }).join(' ')
})

function fixCase (word) {
  if(word.length === 0) {
    return ''
  }
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}
