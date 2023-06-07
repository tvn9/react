const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

function App() {
   // const time = new Date().toLocaleTimeString();
   const [time, setTime] = React.useState(new Date().toLocaleTimeString());

   React.useEffect(function () {
      setInterval(() => {
         setTime(new Date().toLocaleTimeString());
      }, 1000);
   }, []);

   return React.createElement("header", null, 'Hello React! The time is ', time);
}