// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(dog => {
        setDogImage(dog.message);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </>
  );
}

export default App;
