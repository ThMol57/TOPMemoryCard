import Card from "./components/Card"
import "./styles/App.css"
import React, {useState, useEffect} from "react"
import {shuffle} from "lodash"

function App() {

  //require('./images/1.jpg').default acesso a imagem
  const images = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  const [ClickedImages, SetClickedImages] = useState([])
  const [ShuffledImages, SetShuffledImages]= useState([])

  useEffect(() => {
    SetShuffledImages(shuffle(images))
  }, [])

  function HandleClick(event) {
    for(var i=0;i<images.length;i++) {
      if(event.target.getAttribute("data-name") === ClickedImages[i]) {
        return HandleGameOver();
      }
    }
    SetClickedImages(ClickedImages.concat(event.target.getAttribute("data-name")));
    SetShuffledImages(shuffle(images));
  }
 
  function HandleGameOver() {
    alert("perdeu paiaco")
  }

  return (
  
    <div className="App">
      
        <div className="Grid">
        {ShuffledImages.map((event, index) => {
          if(index >= 8){
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
