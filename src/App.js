import logo from './logo.svg';
import './App.css';

function App() {
  var name = {
    name:"Dr. Nazmul",
    job: "Football",
    nars :"Nadia"
  }
  var kam ={
    name:"Eng. Kamrul",
    job:"Cricket"
  }
  const products = [
    {name:'Photoshop',price:'$90'},
    {name:'Windows', price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React App</p>
        <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product>
        {/* <Product name={products[1].name} price={products[1].price}></Product> */}
        <Person name="Umayer" job="Student"></Person>
        <Person name="Raju" job="Software Developer"></Person>
      </header>
    </div>
  );
}
function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'tomato',
    height:'200px',
    width:'300px',
    float:'left',
    margin:'5px'
  }
//  console.log(props);
  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h2>{props.product.price}</h2>
      <button>Buy Now</button>
    </div>
  );
}
function Person(props){
  return (
    <div style={{border: '2px solid green',margin:'5px',width:'400px'}}>
      <h2>My name : {props.name }</h2>
      <p>My Profession : {props.job}</p>
    </div>
  );
}
export default App;
