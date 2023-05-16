import { useState } from "react";
import Game from "./Game";
import Result from "./Result";
import "./style.scss";

const questions = [
  {
    title: "Quyidagilardan qaysi biri HTML5'dagi semantik element?",
    variants: ["div", "header", "span", "br"],
    correct: 1,
  },
  {
    title:
      "Quyidagilardan qaysi birida HTML sahifaga audio ulash sintaksisi to'g'ri ko'rsatilgan? ",
    variants: [
      `<audio src="audio.mp3" type="audio/mp3">`,
      `<audio source="audio.mp3" type="audio/mp3">`,
      `<audio src="audio.mp3">`,
      `<audio file="audio.mp3">`,
    ],
    correct: 0,
  },
  {
    title:
      "Quyidagilardan qaysi biri HTML5'da kontent tilini ifodalovchi attribut?",
    variants: [`lang`, `language`, `type`, `charset`],
    correct: 0,
  },
  {
    title:
      "Quyidagilardan qaysi birida HTML sahifaga YouTube video ulash sintaksisi to'g'ri ko'rsatilgan?",
    variants: [
      `<object data="https://www.youtube.com/watch?v=VIDEO_ID"></object>`,
      `<iframe src="https://www.youtube.com/watch?v=VIDEO_ID"></iframe>`,
      `<video src="https://www.youtube.com/watch?v=VIDEO_ID"></video>`,
      `<embed src="https://www.youtube.com/watch?v=VIDEO_ID"></embed>`,
    ],
    correct: 1,
  },
  {
    title:
      "Quyidagi teglardan qaysi biri veb-sahifada gorizontal chiziq yaratish uchun ishlatiladi?",
    variants: [`hline`, `ruler`, `line`, `hr`],
    correct: 3,
  },
  {
    title:
      "Quyidagilardan qaysi birida HTML'da progress bar yaratishning to'g'ri sintaksisi ko'rsatilgan?",
    variants: [
      `<meter value="50" max="100"></meter>`,
      `<bar value="50" max="100"></bar>`,
      `<progress value="50" max="100"></progress>`,
      `<loading value="50" max="100"></loading>`,
    ],
    correct: 2,
  },
  {
    title: "Quyidagi xossalardan qaysi biri CSS3'da qo'shilmagan?",
    variants: [`transition`, `transform`, `animation`, `shadow`],
    correct: 2,
  },
  {
    title:
      "overflow xossasining qaysi qiymati kontentning konteynerdan chiqib turgan qismini ko'rinmaydigan qiladi?",
    variants: [`hidden`, `auto`, `scroll`, `visible`],
    correct: 0,
  },
  {
    title:
      "Quyidagi xossalardan qaysi biri gradientli background yaratishda ishlatiladi?",
    variants: [
      `background-color`,
      `background-gradient`,
      `background-style`,
      `background-image`,
    ],
    correct: 3,
  },
  {
    title: `<section > p > paragraph 1</p > </section > <p > paragraph 2</p > section p {
    color: red;
  }
  section + p {
    color: blue;
  }
Yuqoridagi kod natijasida paragraflar rangi qanday bo'ladi?`,
    variants: [
      `1-paragraf qizil, 2-paragraf ko'k`,
      `1-paragraf ko'k, 2-paragraf qizil`,
      `Ikkala paragraf ham qizil`,
      `Ikkala paragraf ham ko'k`,
    ],
    correct: 0,
  },
  {
    title: `Doira shaklidagi elementlarni yasash uchun quyidagi xossalardan qaysi bir ishlatiladi?`,
    variants: [`shape`, `circle`, `border-radius`, `border-shape`],
    correct: 2,
  },
  {
    title: `Farzand selektordan foydalanish uchun qaysi belgi ishlatiladi?`,
    variants: [`>`, `+`, `~`, `*`],
    correct: 0,
  },
  {
    title: `Agar konteyner kengligi 500px bo'lsa, quyidagi stildan keyin ustunlar kengligi qanday bo'ladi?
.grid { display: grid; grid-template-columns: 50px 1fr 2fr; }`,
    variants: [
      `50px, 200px, 300px`,
      `50px, 150px, 300px`,
      `50px, 100px, 200px`,
      `50px, 50px, 100px`,
    ],
    correct: 1,
  },
  {
    title: `.example {
  color: yellow;
}
ul li a {
  color: blue;
}
ul a {
  color: green;
}
a {
  color: red;
}
<ul>
  <li><a href="#" class="example">link</a></li>
  <li>list item</li>
  <li>list item</li>
</ul>
Yuqoridagi kod natijasida linkning rangi qanday bo'ladi?
`,
    variants: [`yashil`, `ko'k`, `qizil`, `sariq`],
    correct: 3,
  },
  {
    title: `Quyidagi buyruqlardan qaysi biri Git repository'ni yaratish uchun ishlatiladi? `,
    variants: [`git commit`, `git add`, `git push`, `git init`],
    correct: 3,
  },

  {
    title: `Quyidagi buyruqlardan qaysi biri Git repository'dan faylni o'chirish uchun ishlatiladi? `,
    variants: [`git rm`, `git remove`, `git delete`, `git reset`],
    correct: 0,
  },
  {
    title: `git pull buyug'idan qanday maqsadda foydalaniladi?`,
    variants: [
      `Remote serverga o'zgarishlarni qo'shish`,
      `Remote serverdan o'zgarishlarni olish`,
      `Branchlarni birlashtirish`,
      `Yangi branch yaratish`,
    ],
    correct: 1,
  },
  {
    title: `Lokal va global repository'larni bir-biriga ulashda qanday buyruqdan foydalaniladi?`,
    variants: [
      `git remote add origin`,
      `git remote new origin`,
      `git remote origin`,
      `git add remote origin`,
    ],
    correct: 0,
  },
  {
    title: `Quyidagi operatorlardan qaysi biri taqqoslanayotgan operandlar teng bo'lmasa true qiymat qaytaradi?`,
    variants: [`<>`, `~`, `==!`, `!==`],
    correct: 3,
  },
  {
    title: `let roadTypes = ['street', 'road', 'avenue', 'circle'];
Yuqoridagi array'dan avenue qiymatini tanlash uchun qanday kod yozilishi kerak?`,
    variants: [`roadTypes.2`, `roadTypes[2]`, `roadTypes.3`, `roadTypes[3]`],
    correct: 1,
  },
  {
    title: `let a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);
Yuqoridagi kod natijasida console'ga nima chiqadi?
`,
    variants: [`101`, `3`, `4`, `100`],
    correct: 0,
  },
  {
    title: `Quyidagi variantlardan qaysi biri false qiymatni ifodalamaydi?`,
    variants: [`0`, `""`, `Nan`, `"False"`],
    correct: 3,
  },
  {
    title: `const x = 6 % 2;
const y = x ? 'One' : 'Two';
console.log(y);
Yuqoridagi kod natijasida console'ga nima chiqadi?`,
    variants: [`One`, `undefined`, `Two`, `true`],
    correct: 2,
  },
  {
    title: `Quyidagi variantlardan qaysi biridan o'zgaruvchi nomi sifatida foydalanishimiz mumkin?`,
    variants: [`5htItem`, `first_name`, `grand total`, `function`],
    correct: 1,
  },
  {
    title: `let rainForestAcres = 10;
         let animals = 0;
        while (rainForestAcres < 13 || animals <= 2) {
        rainForestAcres++;
       animals += 2;
           }
        console.log(animals);
       Yuqoridagi kod natijasida console'ga nima chiqadi?`,
    variants: [`2`, `4`, `8`, `6`],
    correct: 3,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onclickVariant = (index) => {
    setStep((prev) => prev + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game
          step={step}
          question={question}
          onclickVariant={onclickVariant}
          questions={questions}
        />
      ) : (
        <Result correct={correct} questions={questions} />
      )}
    </div>
  );
}

export default App;
