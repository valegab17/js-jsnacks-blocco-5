const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

/* // Recupera i dati dello studente con id 2
const studentArray = students.filter(studente =>{
  if(studente.id === 2){
    return true
  } return false 
})
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }
console.log(studentArray);


 */
//versione corretta con find 

const studentArray= students.find(student => {
   return student.id === 2;
});

//risultato 
console.log(studentArray);
