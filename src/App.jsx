import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="w-screen">
        <Header />
        <h1>Hello, React!</h1>
        <p>This is a simple React application.</p>
        <Footer />
      </div>
    </>
  );
}

export default App;
