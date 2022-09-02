/* eslint-disable */

import { useState, useEffect } from "react";

const useEscapeKey = ({ handleClose }) => {
  const targetKey = "Escape";
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  const keyUpHandler = ({ key }) => {
    if (key === targetKey) {
      setIsKeyPressed(false)
    }
  }

  const keyDownHandler = ({ key }) => {
    if (key === targetKey) {
      setIsKeyPressed(true)
      handleClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keyup", keyUpHandler)
    window.addEventListener("keydown", keyDownHandler)
    return () => {
      window.removeEventListener("keyup", keyUpHandler)
      window.removeEventListener("keydown", keyDownHandler)
    }
  }, []);


  return isKeyPressed;
}

export default useEscapeKey;