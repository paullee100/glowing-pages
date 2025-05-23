import React from "react";
import styles from "./birthdayList.module.css";
import Dialog from "@/components/dave/dialog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birthday List"
}

const DavidBirthdayPage = () => {
  return (
    <div>
      <h1>Gift List</h1>

      <s><div className={styles.item}>Cirkul Water Bottle and Flavor</div>
      <ul>
        <li>Available at Spanaway Walmart (Aisle H25)</li>
        <li>Bundle $20-$30</li>
        <li>
          Cirkul <a className={styles.website} href="https://drinkcirkul.com/" rel="noopener noreferrer" target="_blank">Website</a>
        </li>
      </ul></s>

      <div className={styles.item}>Cirkul Flavor Cartridge</div>
      <ul>
        <li>Any flavor</li>
      </ul>

      <div className={styles.item}>Samsung smartwatch</div>
      <ul>
        <li>Any smartwatch that can connect to an android Samsung smartphone</li>
      </ul>

      <div className={styles.item}>3d Printer Filaments</div>
      <ul>
        <li><div className={styles.rainbow}>Any color</div></li>
      </ul>

      <s><div className={styles.item}>Heat Gun</div>
      <ul>
        <li><a className={styles.website} href="https://www.amazon.com/Portable-Handheld-Crafts-Embossing-Wrapping/dp/B095NYKQ37" rel="noopener noreferrer" target="_blank">Amazon Link</a></li>
      </ul></s>

      <div className={styles.item}>Full Season DVDs</div>
      <ul>
        <li><a className={styles.website} href="https://en.wikipedia.org/wiki/Bocchi_the_Rock!" rel="noopener noreferrer" target="_blank">Bocchi the Rock</a></li>
        <li><a className={styles.website} href="https://en.wikipedia.org/wiki/Regular_Show" rel="noopener noreferrer" target="_blank">Regular Show</a></li>
      </ul>

      <s><div className={styles.item}>Galaxy Note9 Phone Case</div></s>
      <br />

      <div className={styles.item}>Sport Cards</div>
      <ul>
        <li>Baseball</li>
        <li>Football</li>
      </ul>

      <div className={styles.item}>Pokemon Cards</div>
      <ul>
        <li>Preferably Paldea Evolved</li>
        <li>Also Scarlet and Violet 151</li>
        <li>Also Surging Sparks</li>
        <li>Any</li>
      </ul>

      <div className={styles.item}>Gift Card</div>
      <ul>
        <li>Amazon</li>
        <li>eBay</li>
        <li>McDonald</li>
        <li>Steam</li>
        <li>Panera</li>
        <li>Starbucks</li>
        <li>Crunchyroll</li>
      </ul>

      <div className={styles.item}>In the end, fine with anything </div>
      <br />

      <div className={`${styles.item} ${styles.hide}`}>Dakimakura</div>
      <ul className={styles.hide}>
        <li>Kyaru</li>
        <li>Yor</li>
        <li>M����</li>
      </ul>

    </div>
  );

//   const [positions, updatePositions] = useState([0, 0, 0, 0]);
  // Introduction
  // Riddles
  // Trivia
  // Observation Game
  // Reward!!!
//   const [stages, updateStages] = useState(0);
//   const [currentIntroduction, updateIntroduction] = useState(0);
//   const [currentRiddle, updateRiddle] = useState(0);
//   const [currentTrivia, updateTrivia] = useState(0);

//   const introduction = [
//     {
//       speaker: "Hello David... Nice to see you again...",
//       responses: [
//         { dialog: "Who are you?", reaction: 1 },
//         { dialog: "Where am I?", reaction: 1 },
//         { dialog: '"Say Nothing"', reaction: 2 },
//       ],
//     },
//     {
//       speaker: "You don't need to worry about that",
//       responses: [{ dialog: "...", reaction: 3 }],
//     },
//     {
//       speaker: "Huh, you're not going to say anything?",
//       responses: [{ dialog: "...", reaction: 3 }],
//     },
//     {
//       speaker:
//         "If you want your present, you need to complete a series of tasks.",
//       responses: [
//         { dialog: "Why?", reaction: 4 },
//         { dialog: "Is it a gift card?", reaction: 4 },
//       ],
//     },
//     {
//       speaker:
//         "You'll complete riddles, each one tougher then the previous, trivia questions, and finally a simple observation game. Press the enter key to submit your guess.",
//       responses: [
//         { dialog: "Challenge Accepted!", reaction: -1 },
//         { dialog: "Okay", reaction: -1 },
//         { dialog: "Did you ignore what I said?", reaction: -1 },
//       ],
//     },
//   ];

//   const riddles = [
//     {
//       riddle:
//         "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?",
//       answer: "map",
//     },
//     {
//       riddle:
//         "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
//       answer: "echo",
//     },
//     {
//       riddle:
//         "Pronounced as one letter, And written with three, two letters there are, and two only in me. I'm double, I'm single, I'm black blue and gray, I'm read from both ends, and the same either way. What am I?",
//       answer: "eye",
//     },
//   ];

//   const trivia = [
//     { trivia: "What color shirt is Marko wearing right now?", answer: "white" },
//     {
//       trivia: "What shape is present in the back of the paper?",
//       answer: "hexagon",
//     },
//     {
//       trivia: "Which MLB team never made a World Series appearance?",
//       answer: "mariners",
//     },
//     {
//       trivia:
//         "Before the statehood of Washington, what was the territory called?",
//       answer: "columbia",
//     },
//   ];

//   const finalQuestion =
//     "Inside the paper you received, what is the max number listed?";

//   const rewardDialog =
//     "Congratulations! Now there are tapes next to the numbers inside the paper. Now tear them off to receive your prize inside!";

//   const dragMouseDown = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     event = event || window.Event;
//     event.preventDefault();

//     const pos3 = event.clientX;
//     positions[2] = pos3;
//     const pos4 = event.clientY;
//     positions[3] = pos4;
//     updatePositions(positions);
//     document.onmouseup = closeMouseDragElement;
//     document.onmousemove = elementMouseDrag;
//   };

//   const elementMouseDrag = (event: any) => {
//     event = event || window.Event;
//     event.preventDefault();
//     const pos1 = positions[2] - event.clientX;
//     const pos2 = positions[3] - event.clientY;
//     const pos3 = event.clientX;
//     positions[2] = pos3;
//     const pos4 = event.clientY;
//     positions[3] = pos4;
//     updatePositions(positions);

//     const element = document.querySelector(`.${styles.light}`) as HTMLElement;
//     element.style.top = element.offsetTop - pos2 + "px";
//     element.style.left = element.offsetLeft - pos1 + "px";
//   };

//   const closeMouseDragElement = (_: any) => {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   };

//   const dragTouchDown = (event: React.TouchEvent<HTMLDivElement>) => {
//     event = event || window.Event;

//     const touch = event.touches[0] || event.changedTouches[0];
//     const pos3 = touch.pageX;
//     positions[2] = pos3;
//     const pos4 = touch.pageY;
//     positions[3] = pos4;

//     updatePositions(positions);
//     document.ontouchend = closeTouchDragElement;
//     document.ontouchmove = elementTouchDrag;
//   };

//   const elementTouchDrag = (event: TouchEvent) => {
//     event = event || window.Event;

//     const touch = event.touches[0] || event.changedTouches[0];
//     const pos1 = positions[2] - touch.pageX;
//     const pos2 = positions[3] - touch.pageY;
//     const pos3 = touch.pageX;
//     positions[2] = pos3;
//     const pos4 = touch.pageY;
//     positions[3] = pos4;
//     updatePositions(positions);

//     const element = document.querySelector(`.${styles.light}`) as HTMLElement;
//     element.style.top = element.offsetTop - pos2 + "px";
//     element.style.left = element.offsetLeft - pos1 + "px";
//   };

//   const closeTouchDragElement = (_: any) => {
//     document.ontouchend = null;
//     document.ontouchmove = null;
//   };

//   const checkRiddleAnswer = (
//     event: React.KeyboardEvent<HTMLInputElement>,
//     answer: string
//   ) => {
//     const answerDiv = event.currentTarget.parentNode?.children[2];
//     if (event.key === "Enter") {
//       if (
//         event.currentTarget.value.toLowerCase().split(" ").indexOf(answer) >
//           -1 ||
//         event.currentTarget.value.toLowerCase() === "override"
//       ) {
//         const nextRiddle = currentRiddle + 1;
//         updateRiddle(nextRiddle);
//         event.currentTarget.value = "";
//         if (answerDiv!.classList.contains(`${styles.incorrect}`)) {
//           answerDiv!.classList.remove(`${styles.incorrect}`);
//         }
//         if (!answerDiv!.classList.contains(`${styles.correct}`)) {
//           answerDiv!.classList.add(`${styles.correct}`);
//         }
//         answerDiv!.textContent = "CORRECT! Here is the next riddle!";

//         if (currentRiddle === riddles.length - 1) {
//           const nextStage = stages + 1;
//           updateStages(nextStage);
//         }
//       } else {
//         answerDiv!.textContent = "INCORRECT!!";
//         if (answerDiv!.classList.contains(`${styles.correct}`)) {
//           answerDiv!.classList.remove(`${styles.correct}`);
//         }
//         if (!answerDiv!.classList.contains(`${styles.incorrect}`)) {
//           answerDiv!.classList.add(`${styles.incorrect}`);
//         }
//       }
//     }
//   };

//   const checkTriviaAnswer = (
//     event: React.KeyboardEvent<HTMLInputElement>,
//     answer: string
//   ) => {
//     const answerDiv = event.currentTarget.parentNode?.children[2];
//     if (event.key === "Enter") {
//       if (
//         event.currentTarget.value.toLowerCase().split(" ").indexOf(answer) >
//           -1 ||
//         event.currentTarget.value.toLowerCase() === "override"
//       ) {
//         const nextTrivia = currentTrivia + 1;
//         updateTrivia(nextTrivia);
//         event.currentTarget.value = "";
//         if (answerDiv!.classList.contains(`${styles.incorrect}`)) {
//           answerDiv!.classList.remove(`${styles.incorrect}`);
//         }
//         if (!answerDiv!.classList.contains(`${styles.correct}`)) {
//           answerDiv!.classList.add(`${styles.correct}`);
//         }
//         answerDiv!.textContent = "CORRECT! Here is the next trivia!";

//         if (currentTrivia === trivia.length - 1) {
//           const nextStage = stages + 1;
//           updateStages(nextStage);
//         }
//       } else {
//         answerDiv!.textContent = "INCORRECT!!";
//         if (answerDiv!.classList.contains(`${styles.correct}`)) {
//           answerDiv!.classList.remove(`${styles.correct}`);
//         }
//         if (!answerDiv!.classList.contains(`${styles.incorrect}`)) {
//           answerDiv!.classList.add(`${styles.incorrect}`);
//         }
//       }
//     }
//   };

//   const checkFinalAnswer = (event: React.KeyboardEvent<HTMLInputElement>) => {
//     const answerDiv = event.currentTarget.parentNode?.children[2];
//     if (event.key === "Enter") {
//       if (
//         event.currentTarget.value === "16" ||
//         event.currentTarget.value.toLowerCase() === "override"
//       ) {
//         const nextStage = stages + 1;
//         updateStages(nextStage);
//       } else {
//         answerDiv!.textContent = "INCORRECT!!";
//         if (answerDiv!.classList.contains(`${styles.correct}`)) {
//           answerDiv!.classList.remove(`${styles.correct}`);
//         }
//         if (!answerDiv!.classList.contains(`${styles.incorrect}`)) {
//           answerDiv!.classList.add(`${styles.incorrect}`);
//         }
//       }
//     }
//   };

//   const showReward = () => {
//     const stagesUpdate = stages + 1;
//     updateStages(stagesUpdate);
//   };

    // <div className={`${styles.container} ${stages > 0 && stages < 4 ? styles.blackBackground : styles.noBackground}`}>

    //     <div className={styles.cubeContainer}>
    //         <div className={styles.cube}>
    //             <div className={`${styles.face} ${styles.front}`}></div>
    //             <div className={`${styles.face} ${styles.back}`}></div>
    //             <div className={`${styles.face} ${styles.right}`}></div>
    //             <div className={`${styles.face} ${styles.left}`}></div>
    //             <div className={`${styles.face} ${styles.top}`}></div>
    //             <div className={`${styles.face} ${styles.bottom}`}></div>
    //         </div>
    //     </div>

    //     {stages === 0 ? <Dialog text={introduction[currentIntroduction].speaker}
    //                             responses={introduction[currentIntroduction].responses}
    //                             updateIntroduction={updateIntroduction}
    //                             updateStages={updateStages}
    //                             responsesExist={true} />
    //     : <div></div>}

    //     {stages >= 1 && stages < 4 ? <div className={styles.light} onMouseDown={e => dragMouseDown(e)} onTouchStart={e => dragTouchDown(e)}>
    //     </div>: <div></div>}

    //     {stages === 1 ? <div className={styles.riddles}>

    //         <div className={styles.section}>
    //             <div className={styles.riddleQuestion}>{riddles[currentRiddle].riddle}</div>
    //             <input className={styles.riddleInput} type="text" onKeyDown={e => checkRiddleAnswer(e, riddles[currentRiddle].answer)}/>
    //             <div className={styles.answer}>Here is the first riddle</div>
    //         </div>

    //     </div> :
    //     <div></div>}

    //     {stages === 2 ? <div className={styles.trivia}>
    //         <div className={styles.triviaQuestion}>{trivia[currentTrivia].trivia}</div>
    //         <input className={styles.triviaInput} type="text" onKeyDown={e => checkTriviaAnswer(e, trivia[currentTrivia].answer)}/>
    //         <div className={styles.answer}>Here is the first trivia</div>
    //     </div> : <div></div>}

    //     {stages === 3 ? <div>
    //         <div className={styles.finalQuestion}>{finalQuestion}</div>
    //         <input className={styles.finalQuestionInput} type="text" onKeyDown={e => checkFinalAnswer(e)} />
    //         <div className={styles.answer}>This is your final Question</div>
    //     </div>: <div></div>}

    //     {stages === 4 ? <button className={styles.btn} onClick={showReward}>Click Here For Your Final Reward!</button>: <div></div>}

    //     {stages === 5 ? <Dialog text={rewardDialog} responses={undefined} updateIntroduction={undefined} updateStages={undefined} responsesExist={false} /> : <div></div>}
    // </div>
};

export default DavidBirthdayPage;
