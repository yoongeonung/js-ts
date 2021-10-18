enum Shoes {
  NIKE, // 0
  ADIDDAS, // 1
  PUMA, // 2
}

let shoes = Shoes.NIKE;
console.log(shoes); // 0

enum StringShoes {
  NIKE = 'NIKE',
  ADIDDAS = 'ADIDDAS',
  PUMA = 'PUMA',
}

let stringShoes = StringShoes.NIKE;
console.log(stringShoes); // "NIKE"

// example
enum QuestionAnswer {
  Y = 'YES',
  N = 'NO',
}

const askQuestion = (answer: QuestionAnswer) => {
  if (answer === QuestionAnswer.Y) {
    console.log('Good');
  } else {
    console.log('Bad');
  }
};

askQuestion(QuestionAnswer.N);
