var prompt = require('prompt');

prompt.start();
 
prompt.get(['name', 'surname', 'specialty', 'group', 'marks'], function (err, result) {
  if (err) { return onErr(err); }
  
  const student = {
    properties: {
      name: { description: "Ім'я", required: true },
      surname: { description: "Прізвище", required: true },
      specialty: { description: "Спеціальність", required: true },
      group: { description: "Група", required: true },
      marks: { description: "Оцінки (через кому)", required: true },
    }
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

