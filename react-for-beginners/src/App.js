import Button from "./Button";
import styles from "./App.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back to React!!</h1>
        <Button text={"Click"}/>
    </div>
  );
}

export default App;
