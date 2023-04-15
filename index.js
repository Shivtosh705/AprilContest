let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(function(value){
      if(value.profession=="developer"){
        console.log(value);
      }
    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(value){
      if(value.profession=="developer"){
        console.log(value);
      }
  });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newobj = {id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newobj)
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let filterArr= arr.filter((arr)=>arr.profession=="admin");
    console.log(filterArr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [{ id: 5, name: "ram", age: "19", profession: "developer"}];
    let concatArr = arr.concat(newArr);
    console.log(concatArr);
  }