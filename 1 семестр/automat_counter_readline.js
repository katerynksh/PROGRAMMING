const readline = require('readline');
const studentInput = readline.createInterface({
  input: process.stdin, //створює інтерфейс для читання з консолі (стандартний поток вводу)
  output: process.stdout
});

const student = {
  name: ' ',
  surname: ' ',
  specialty: ' ',
  group: ' ',
  marks: [ ],
};

studentInput.question("Ім'я студента: ", (nameAnswer) => {
    student.name = nameAnswer;
  studentInput.question("Прізвище студента: ", (surnameAnswer) => {
      student.surname = surnameAnswer;
    studentInput.question("Спеціальність: ", (specialtyAnswer) => {
        student.specialty = specialtyAnswer;
      studentInput.question("Група: ", (groupAnswer) => {
          student.group = groupAnswer; 
        studentInput.question("Оцінки студента (через кому!): ", (marksAnswer) => {
            student.marks = marksAnswer.split(',')   //розбиває рядок на масив
            .map(mark => Number(mark.trim()))//перетворює кожен елемент в число
            .filter(mark => !isNaN(mark)); //перевіряє на число

            const average = student.marks.reduce((sum, marks) => sum + marks, 0) / student.marks.length; //обчислення середньої оцінки
            const fixedAverage = average.toFixed(2); //округлення середньої оцінки до двох знаків після коми
            const markAutomat = Math.round(fixedAverage); //округлення середньої оцінки до найближчого цілого числа 

            console.log(`_____________________________________`);
            console.log(`Ім'я: ${student.name}`)
            console.log(`Прізвище: ${student.surname}`);
            console.log(`Спеціальність: ${student.specialty}`);
            console.log(`Група: ${student.group}`);
            console.log(`Оцінки: ${student.marks.join(', ')}`);// вивід оцінок через кому
            console.log(`Середня оцінка: ${fixedAverage}`);// 
            console.log('Автомат: ' + markAutomat);// вивід округленої середньої оцінки
          
           
          studentInput.close();
        });
      }); 
    });
  });
});
