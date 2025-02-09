"use client"

import React, { useState } from 'react'
import styles from './superbowl.module.css'

const SuperbowlPage = () => {

  const [choices, setChoices] = useState(['', '', '','','','','','','','','','','','','','','','','',])

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(choices)
    const url = 'https://script.google.com/macros/s/AKfycbyxSVV8aGC69UsZ1UFreCGYgCEyi4i6pAMJt4hOSKIq-oDApv7vgJQTUoYgTt8J8cwW/exec'
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: (
        `Name=test1&One=1&Two=2&Three=3&Four=4&Five=5&Six=6&Seven=7&Eight=8&Nine=9&Ten=10&Elevn=11&Twelve=12&Thirteen=13&Fourteen=14&Fifteen=15&Sixteen=16&Seventeen=17&Eighteen=18`
      )
    }).then(res => res.text()).then(data => {
      alert("Complete")
    }).catch(error => {
      console.log(error)
    })

  }

  const handleNameChange = (e: any, index: number) => {
    const newItem = [...choices]
    newItem[index] = e.target.value
    setChoices(newItem)
  }

  const handleChoices = (e: any, ans: string, val: number) => {
    const newItem = [...choices]
    newItem[val] = ans
    setChoices(newItem)
  }

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div>
          <div>Name:</div>
          <input type="text" value={choices[0]} onChange={e => handleNameChange(e, 0)} />
        </div>

        <h2>1. Will the opening kickoff result in a touchback?</h2>
        <div className={styles.choices}>
          <input type="radio" id="1a" name="1" onChange={e => handleChoices(e, "Yes", 1)}/>
          <label htmlFor="1a">Yes</label>

          <input type="radio" id="1b" name="1" onChange={e => handleChoices(e, "No", 1)}/>
          <label htmlFor="1b">No</label>
        </div>

        <h2>2. What will be the result of the opening drive?</h2>
        <div className={styles.choices}>
          <input type="radio" id="2a" name="2" onChange={e => handleChoices(e, "Touchdown", 2)}/>
          <label htmlFor="2a">Touchdown</label>

          <input type="radio" id="2b" name="2" onChange={e => handleChoices(e, "Field goal", 2)}/>
          <label htmlFor="2b">Field goal</label>

          <input type="radio" id="2c" name="2" onChange={e => handleChoices(e, "Punt", 2)}/>
          <label htmlFor="2c">Punt</label>

          <input type="radio" id="2d" name="2"/>
          <label htmlFor="2d">Other: <input type="text" onChange={e => handleNameChange(e, 2)}/></label>
        </div>

        <h2>3. What will be the first turnover of the game?</h2>
        <div>
          <input type="radio" id="3a" name="3" onChange={e => handleChoices(e, "Fumble", 3)}/>
          <label htmlFor="3a">Fumble</label>

          <input type="radio" id="3b" name="3" onChange={e => handleChoices(e, "Interception", 3)}/>
          <label htmlFor="3b">Interception</label>

          <input type="radio" id="3c" name="3" onChange={e => handleChoices(e, "Turnover on downs", 3)}/>
          <label htmlFor="3c">Turnover on downs - 4th down conversion fails</label>
        </div>

        <h2>4. Which team will score first?</h2>
        <div>
          <input type="radio" id="4a" name="4" onChange={e => handleChoices(e, "Chiefs", 4)}/>
          <label htmlFor="4a">Chiefs</label>

          <input type="radio" id="4b" name="4" onChange={e => handleChoices(e, "Eagles", 4)}/>
          <label htmlFor="4b">Eagles</label>
        </div>

        <h2>5. Which team will reach 10 points first?</h2>
        <div>
          <input type="radio" id="5a" name="5" onChange={e => handleChoices(e, "Chiefs", 5)}/>
          <label htmlFor="5a">Chiefs</label>

          <input type="radio" id="5b" name="5" onChange={e => handleChoices(e, "Eagles", 5)}/>
          <label htmlFor="5b">Eagles</label>
        </div>

        <h2>6. Which quarterback will throw the first passing TD?</h2>
        <div>
          <input type="radio" id="6a" name="6" onChange={e => handleChoices(e, "Jalen Hurts", 6)}/>
          <label htmlFor="6a">Jalen Hurts</label>

          <input type="radio" id="6b" name="6" onChange={e => handleChoices(e, "Patrick Mahomes", 6)}/>
          <label htmlFor="6b">Patrick Mahomes</label>
        </div>

        <h2>7. Will either team score in the first two minutes of the first half?</h2>
        <div>
          <input type="radio" id="7a" name="7" onChange={e => handleChoices(e, "Yes", 7)}/>
          <label htmlFor="7a">Yes</label>

          <input type="radio" name="7" id="7b" onChange={e => handleChoices(e, "No", 7)}/>
          <label htmlFor="7b">No</label>
        </div>

        <h2>8. Which team will be leading at halftime?</h2>
        <div>
          <input type="radio" name="8" id="8a" onChange={e => handleChoices(e, "Chiefs", 8)}/>
          <label htmlFor="8a">Chiefs</label>

          <input type="radio" name="8" id="8b" onChange={e => handleChoices(e, "Eagles", 8)}/>
          <label htmlFor="8b">Eagles</label>
        </div>

        <h2>9. How many players will attempt a pass in the game?</h2>
        <div>
          <input type="radio" name="9" id="9a" onChange={e => handleChoices(e, "o2.5", 9)}/>
          <label htmlFor="9a">o2.5</label>

          <input type="radio" name="9" id="9b" onChange={e => handleChoices(e, "u2.5", 9)}/>
          <label htmlFor="9b">u2.5</label>
        </div>

        <h2>10. Will there be a missed field goal?</h2>
        <div>
          <input type="radio" name="10" id="10a" onChange={e => handleChoices(e, "Yes", 10)}/>
          <label htmlFor="10a">Yes</label>

          <input type="radio" name="10" id="10b" onChange={e => handleChoices(e, "No", 10)}/>
          <label htmlFor="10b">No</label>
        </div>

        <h2>11. Which team will lead after the third quarter?</h2>
        <div>
          <input type="radio" name="11" id="11a" onChange={e => handleChoices(e, "Chiefs", 11)}/>
          <label htmlFor="11a">Chiefs</label>

          <input type="radio" name="11" id="11b" onChange={e => handleChoices(e, "Eagles", 11)}/>
          <label htmlFor="11b">Eagles</label>
        </div>

        <h2>12. Who will finish with more passing yards?</h2>
        <div>
          <input type="radio" name="12" id="12a" onChange={e => handleChoices(e, "Patrick Mahomes", 12)}/>
          <label htmlFor="12a">Patrick Mahomes</label>

          <input type="radio" name="12" id="12b" onChange={e => handleChoices(e, "Jalen Hurts", 12)}/>
          <label htmlFor="12b">Jalen Hurts</label>
        </div>

        <h2>13. Who will finish with more rushing yards?</h2>
        <div>
          <input type="radio" name="13" id="13a" onChange={e => handleChoices(e, "Saquon Barkley", 13)}/>
          <label htmlFor="13a">Saquon Barkley</label>

          <input type="radio" name="13" id="13b" onChange={e => handleChoices(e, "Isiah Pacheco", 13)}/>
          <label htmlFor="13b">Isiah Pacheco</label>
          
          <input type="radio" name="13" id="13c" />
          <label htmlFor="13c">Other: <input type="text" onChange={e => handleNameChange(e, 13)}/></label>
        </div>

        <h2>14. Who will finish with more receiving yards?</h2>
        <div>
          <input type="radio" name="14" id="14a" onChange={e => handleChoices(e, "A.J. Brown", 14)}/>
          <label htmlFor="14a">A.J. Brown</label>

          <input type="radio" name="14" id="14b" onChange={e => handleChoices(e, "Travis Kelce", 14)}/>
          <label htmlFor="14b">Travis Kelce</label>

          <input type="radio" name="14" id="14c" />
          <label htmlFor="14c">Other: <input type="text" onChange={e => handleNameChange(e, 14)}/></label>
        </div>

        <h2>15. Who will win Super Bowl 59?</h2>
        <div>
          <input type="radio" name="15" id="15a" onChange={e => handleChoices(e, "Chiefs", 15)}/>
          <label htmlFor="15a">Chiefs</label>

          <input type="radio" name="15" id="15b" onChange={e => handleChoices(e, "Eagles", 15)}/>
          <label htmlFor="15b">Eagles</label>
        </div>

        <h2>16. Who will cover the Super Bowl 59 spread?</h2>
        <div>
          <input type="radio" name="16" id="16a" onChange={e => handleChoices(e, "Chiefs", 16)}/>
          <label htmlFor="16a">Chiefs</label>

          <input type="radio" name="16" id="16b" onChange={e => handleChoices(e, "Eagles", 16)}/>
          <label htmlFor="16b">Eagles</label>
        </div>

        <h2>17. How many points will be scored?</h2>
        <div>
          <input type="radio" name="17" id="17a" onChange={e => handleChoices(e, "Over 49.5", 17)}/>
          <label htmlFor="17a">Over 49.5</label>

          <input type="radio" name="17" id="17b" onChange={e => handleChoices(e, "Under 49.5", 17)}/>
          <label htmlFor="17b">Under 49.5</label>
        </div>

        <h2>18. Who will win Super Bowl 59 MVP?</h2>
        <div>
          <input type="radio" name="18" id="18a" onChange={e => handleChoices(e, "Patrick Mahomes", 18)}/>
          <label htmlFor="18a">Patrick Mahomes</label>

          <input type="radio" name="18" id="18b" onChange={e => handleChoices(e, "Jalen Hurts", 18)}/>
          <label htmlFor="18b">Jalen Hurts</label>
          
          <input type="radio" name="18" id="18c" />
          <label htmlFor="18c">Other: <input type="text" onChange={e => handleNameChange(e, 18)}/></label>
        </div>

        <div className={styles.btnContainer}>
          <button className={styles.button}>Submit</button>

        </div>

      </form>
    </div>
  )
}

export default SuperbowlPage