let notes = getSavedNotes()

const filters = {
    searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue) 
    renderNotes(notes, filters)
  }
})

//Unix Epoch - Jan 1st 1970 00:00:00

const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()})`)
// console.log(`Month: ${now.getMonth()})`)
// console.log(`Day: ${now.getDate()})`)
// console.log(`Hours: ${now.getHours()})`)
// console.log(`Minutes: ${now.getMinutes()})`)
// console.log(`Seconds: ${now.getSeconds()})`)

//CHALLEGE
//1. Create two dates in the past (use string for date)
const challenge = new Date('June 06 2016 05:55:00')
const challenge2 = new Date('November 08 2012 05:25:00')
console.log(challenge)
console.log(challenge2)
//2. Get timestamps for both
const timeStamp1 = challenge.getTime()
const timeStamp2 = challenge2.getTime()
console.log(timeStamp1)
console.log(timeStamp2)
//3. Figure out which is first and print its time (use toString)
if (timeStamp1 > timeStamp2) {
  console.log(challenge2.toString())
} else if (timeStamp2 > timeStamp1) {
  console.log(challenge1.toString())
}
