console.log(`_____________________________________`);

var prompt = require('prompt');

prompt.start();
 
prompt.get(['name', 'surname', 'specialty', 'group', 'marks'], function (err, result) {
  if (err) { return onErr(err); }
  
  const student = {
    name: result.name,
    surname: result.surname,
    specialty: result.specialty,
    group: result.group,
    marks: result.marks.split(',').map (mark => Number(mark.trim())).filter(mark => !isNaN(mark)),
  };
  

  const average = student.marks.reduce((sum, marks) => sum + marks, 0) / student.marks.length;
  const fixedAverage = average.toFixed(2);
  const markAutomat = Math.round(fixedAverage);
  const marks = student.marks.join(', ')

  console.log("Ім'я:" + student.name);
  console.log("Прізвище: " + student.surname);
  console.log("Спеціальність: " + student.specialty);
  console.log("Група: " + student.group);
  console.table("Оцінки: " + marks);
  console.log("Середня оцінка: " + fixedAverage);
  console.log("Автомат: " + markAutomat);
});

