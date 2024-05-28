import React from 'react';
import { useParams} from "react-router-dom";

export default function BlogPage() {

  const { blogId } = useParams();

  function printHello() {
    console.log("Hello")
  }

  function printHI() {
    console.log("hi")
    printHello()
  }

  function printThere() {
    setTimeout( () => {
      console.log("there")
    }, 0)
  }

  function printIX() {
    console.log("iX")
  }

  printHI()
  printThere()
  printIX()

  return (
    <div>TODO build the read blog page</div>
  )
}
