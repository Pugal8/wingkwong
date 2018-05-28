# react-quiz
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwingkwong%2Freact-quiz-component.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwingkwong%2Freact-quiz-component?ref=badge_shield)

:orange_book: React Quiz Component

react-quiz is a ReactJS component allowing users to attempt a quiz. 

## Init Your Quiz
The quiz source is a JSON object. You can use [react-quiz-form](https://github.com/wingkwong/react-quiz-form/) to generate it.
```javascript
export const quiz =  {
  "quizTitle": "React Quiz Demo - https://github.com/wingkwong/react-quiz",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3"
    },
    {
      "question": "ReactJS is developed by _____?",
      "questionType": "text",
      "answers": [
        "Google Engineers",
        "Facebook Engineers"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "questionType": "text",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2"
    },
    {
      "question": "Which of the following concepts is/are key to ReactJS?",
      "questionType": "text",
      "answers": [
        "Component-oriented design",
        "Event delegation model",
        "Both of the above",
      ],
      "correctAnswer": "3"
    },
    {
      "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      "questionType": "photo",
      "answers": [
        "https://dummyimage.com/600x400/000/fff&text=A",
        "https://dummyimage.com/600x400/000/fff&text=B",
        "https://dummyimage.com/600x400/000/fff&text=C",
        "https://dummyimage.com/600x400/000/fff&text=D"
      ],
      "correctAnswer": "1"
    }
  ]
} 
```

Then pass the object to Quiz Container
```javascript
 <Quiz quiz={quiz}/>
```

## Development
- Clone the project
- run `npm install`
- run `npm run start`
- run `npm run lint`

## Demo
The demo is available at https://wingkwong.github.io/react-quiz/

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwingkwong%2Freact-quiz-component.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwingkwong%2Freact-quiz-component?ref=badge_large)