import logo from './logo.svg';
import './App.css';

function App() {
  let a = 1;
  let promiseA = new Promise(function (resolved, reject) {
    if (a === 1) {
      console.log('Kiểm tra a bằng 1')
      resolved('A bằng 1')
    } else {
      console.log('Kiểm tra a không bằng 1')
      reject('a không bằng 1')
    }
  })

  let promiseB = new Promise(function (resolved, reject) {
    if (a === 1) {
      console.log('Kiểm tra a bằng 1 (B)')
      resolved('A bằng 1 (B)')
    } else {
      console.log('Kiểm tra a không bằng 1 (B)')
      reject('a không bằng 1 (B)')
    }
  })

  // Gọi Promise thông thường
  // Gọi promise A
  // promiseA.then(response => {
  //   console.log('then 1')
  //   console.log(response)

  // // Gọi promise B khi promise A xử lý thành công
  //   promiseB.then(response => {
  //     console.log('then 2')
  //     console.log(response)
  //   }).catch(error => {
  //     console.log('catch 2')
  //     console.log(error)
  //   })

  // }).catch(error => {
  //   console.log('catch 1')
  //   console.log(error)
  // })

  // Async - await
  const callPromises = async () => {
    await promiseA.then(res => console.log('res A'))
    await promiseB.then(res => console.log('res B'))
      .catch(error => {
        console.log('catch 2')
      })
  }

  callPromises()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
