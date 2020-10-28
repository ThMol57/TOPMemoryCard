import Card from "./components/Card"
import Header from "./components/Header"
import "./styles/App.css"
import React, {useState, useEffect} from "react"
import {shuffle} from "lodash"

function App() {

  const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  const [ClickedImages, SetClickedImages] = useState([])
  const [ShuffledImages, SetShuffledImages]= useState([])
  const [GameLost, SetGameLost] = useState(false)
  const [GameWon, SetGameWon] = useState(false)
  const [Score, SetScore] = useState(0)
  const [HighScore, SetHighScore] = useState(0)


  useEffect(() => {
    SetShuffledImages(shuffle(images))
  }, [])

  useEffect(() => {
    if(Score > HighScore) {
      SetHighScore(Score)
    }
  }, [Score])

  function HandleClick(event) {

    if(ClickedImages.length === 15) {
      return HandleGameWon();
    }
    
    for(var i=0;i<images.length;i++) {
      if(event.target.getAttribute("data-name") === ClickedImages[i]) {
        return HandleGameOver();
      }
      else {
        SetScore(Score+1)
      }
    }
    SetClickedImages(ClickedImages.concat(event.target.getAttribute("data-name")));
    SetShuffledImages(shuffle(images));
    console.log(Score)
  }
 
  function HandleGameOver() {
    SetGameLost(true)
    SetScore(0)
    SetClickedImages([])
    SetShuffledImages(shuffle(images));
  }

  function HandleGameWon() {
    SetGameWon(true)
    SetScore(0)
    SetClickedImages([])
    SetShuffledImages(shuffle(images));
    return HandleResult
  }

  function HandleResult() {
    if (GameWon) {
      return ( 
        <h1>You Won!</h1>
      )
    }
    else if(GameLost) {
      return (
        <h1>You Lost!</h1>
      )
    }
  }

  return (
  
    <div className="App">

        <Header 
        score={Score}
        HighScore={HighScore}
        />
      
        <div className="container Grid">

          {HandleResult}
          {ShuffledImages.map((event, index) => {
            if(index >= 12){
              return
            }
              return(
                <Card
                key={ShuffledImages[index]}
                image={require(`./images/${ShuffledImages[index]}.jpg`).default} 
                onClick={HandleClick}
                ImgName={ShuffledImages[index]}
                />)})}
            
            
        </div>
        
    </div>
  )}

export default App;
