import Form from "./Form";

const App = () => {
  const getData = (data) => {
    console.log("getData function is called from child");
    console.log(`${data} is printed from the child component`);
  };
  return (
    <div>
      <Form onSubmit={getData}/>
    </div>
  )
}

export default App
