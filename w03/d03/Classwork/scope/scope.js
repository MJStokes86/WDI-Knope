function playWithScope() {

  var shmee = "Blah";
  var notQuiteGlobal = "Hooplah";
  globalShmee = "Blooh";
<<<<<<< HEAD
 // debugger
=======
>>>>>>> 391485fca6c468394ae4d67852511615a2ef90b1
  // check the value of the above variables
  // debugger
  function insideFunc() {
    console.log("insideFunc called");
    console.log(notQuiteGlobal);
    console.log(shmee);
    var shmee = "Bleeh";
    notQuiteGlobal = "Heeplah";
    superGlobal = "i am everywhere"
    debugger
    // check the value of all the variables again
    console.log("insideFunc end");
    console.log(notQuiteGlobal);
    console.log(shmee);
  }

  insideFunc();
  console.log("playWithScope end.");
  console.log(shmee);
  console.log(notQuiteGlobal);
}
console.log("call playWithScope, then check variable values again.")

