const notes = [{
  title: 'My next trip',
  body: 'I would like to go hiking.'
},
{
  title: 'Habbits to work on',
  body: 'Eating better'
},
{
  title: 'Office modification',
  body: 'Get a new seat'
}]

const filters = {
  searchText: ''
}

//figures out which note matches the filter. 
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

document.querySelector('#notes').innerHTML = ''

filteredNotes.forEach(function (note) {
  const noteEl = document.createElement('p')
  noteEl.textContent = note.title
  document.querySelector('#notes').appendChild(noteEl)
})}

renderNotes(notes, filters)

document.querySelector('#create-btn').addEventListener('click', function(e) {
  e.target.textContent = 'Button clicked sucka!'
})

document.querySelector('#remove-btn').addEventListener('click', function (e) {
  document.querySelectorAll('.note').forEach(function (note) {
    note.remove()
  })
})

document.querySelector('#search-notes').addEventListener('input', function (e) {
filters.searchText = e.target.value
renderNotes(notes, filters)
})
