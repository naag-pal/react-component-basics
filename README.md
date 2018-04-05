# Learning the React Component State, Props and Creating functions

Step 1: Bootstrapping the reactjs application with `create-react-app`


Step 2: Modifing `App.js` by adding `construtor`

```
  constructor(props){
    super(props);
    this.yourName = "Naag";
    this.state = {};
  }
```


Step 3: Creating `state` and `props`
 ```
  sayHello(name){
    this.yourName = "Naag1";
    return "Hello " + name;
  }

  render() {
    const myName = "Naag Pal";
    const helloName = this.sayHello("Nagendra");
    return (
      <div className="App">
        <p>Just some sample data <b>yourName</b>: { this.yourName}</p>
        <p>Just some sample data <b>myName</b>: { myName}</p>
        <p>Just some sample data  <b>helloName</b>: { helloName}</p>
      </div>
    );
  }
  ```


Printing the output with `npm start`
