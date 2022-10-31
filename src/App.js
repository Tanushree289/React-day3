import './App.css';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseState from './components/UseState';
import Function from './components/Function'

function App() {
  return (
    <div >
     <h2 style={{textAlign:"center"}}>React IP DAY3</h2>
     <h4>1.Difference between Axios and fetch</h4>
     <p>Axios</p>
     <p>1.Axios has url in request object.</p>
     <p>2.Axios is a stand-alone third party package that can be easily installed</p>
     <p>3.Axios enjoys built-in XSRF protection.</p>
     <p>4.Axios uses the data property.</p>
     <p>5.Axios data contains the object.</p>
     <p>6.Axios request is ok when status is 200 and statusText is 'OK'</p>
     <p>7.Axios performs automatic transforms of JSON data.</p>
     <p>8.Axios allows cancelling request and request timeout</p>
     <p>9.Axios has the ability to intercept HTTP requests.</p>
     <p>10.Axios has built-in support for download progress.</p>
     <p>11.Axios has wide browser support.</p>
     <p>12.Axios “GET” call can have body Content</p>
     <p>Fetch</p>
     <p>1.Fetch has no url in request object.</p>
     <p>2.Fetch is built into most modern browsers; no installation is required as such.</p>
     <p>3.	Fetch uses the body property.</p>
     <p>4.Fetch's body has to be stringified.</p>
     <p>5.Fetch request is ok when response object contains the ok property.</p>
     <p>6.Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</p>
     <p>7.Fetch, by default, doesn't provide a way to intercept requests.</p>
     <p>8.Fetch does not support upload progress.</p>
     <p>9.Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).</p>
     <p>10.Fetch “GET” call cannot have body Content</p>
     <hr />
     <h4>2.What is UseState Hook ?(Implementation)</h4>
     <p  style={{textAlign:"center"}}>UseState</p>
        <p>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
        <p  style={{textAlign:"center"}}>const [state, setState] = useState(initialstate)</p>
     <UseState/>
     <hr />
     <h4>3.What is useEffect Hook ?(Implementation)</h4>
     <p style={{textAlign:"center"}}>UseEffect</p>
     <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. useEffect(function, dependency)</p>
     <UseEffect/>
     <hr />
     <h4>4.What is UseReducer Hook ?(Implementation)</h4>
     <p style={{textAlign:"center"}}>UseReducer</p>
     <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</p>
     <p style={{textAlign:"center"}}>const [state, dispatch] = useReducer(reducer, initialArgs, init);</p>
     <UseReducer/>
     <hr />
     <h4>5.How do you pass data from parent to child</h4>
     <p>Data can be passed from the parent to the child component via props. Any properties of the parent component, be it variables or functions alike, can be passed to the child component as props.</p>
      <Function/>
     <hr />
    </div>
  );
}

export default App;
