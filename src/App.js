import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 const nayoks = ['Alomgir','Razzak','Pori','Sabnur','452']
  const products = [
    {name:'Photoshop',price:'$90'},
    {name:'Windows', price:'$50'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React App</p>
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayoks.map(x=> <li>{x}</li>)
          }
          {
            products.map(product=> <li>{product.name}<br></br>{product.price}</li>)
          }
          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li> */}
        </ul>
        {
          products.map(product=><Product product={product}></Product>)
        }
        {/* <Product product = {products[0]}></Product>
        <Product product = {products[1]}></Product> */}
        {/* <Product name={products[1].name} price={products[1].price}></Product> */}
        <Person name="Umayer" job="Student"></Person>
        <Person name="Raju" job="Software Developer"></Person>
      </header>
    </div>
  );
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic User : {users.length}</h3>
        <ul>
          {
            users.map(user=><li>{user.address.city}</li>)
          }
        </ul>
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
 const {name,price} = props.product;
  return(
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
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
function Counter(){
  const [count,setCount] = useState(0);
  
  return (
    <div>
      <h2>Counter : {count}</h2>
      <button onClick={()=>setCount(count-1)}>LowCount</button>
      <button onClick={()=>setCount(count+1)}>Counting</button>
    </div>
  );
}
export default App;
