import reactLogo from "./assets/react.svg";
import "./App.css";
import BasicSignupForm from "./components/forms/BasicSignupForm.tsx/BasicSignupForm";
function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <BasicSignupForm />
      </div>
    </>
  );
}

export default App;
