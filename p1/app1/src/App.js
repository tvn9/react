import Expenses from "./components/Expenses";

function App() {
   const data = [
      {
         date: new Date(2021, 1, 31),
         title: 'Home Insurance',
         amount: 898.99
      },
      {
         date: new Date(2021, 2, 28),
         title: 'Electric Bill',
         amount: 298.99
      },
      {
         date: new Date(2021, 3, 31),
         title: 'Car Insurance',
         amount: 398.99
      },
   ];
   return (
      <div>
         <h2>Let's get started!</h2>
         <Expenses date={data[0].date} title={data[0].title} amount={data[0].amount}></Expenses>
         <Expenses date={data[1].date} title={data[1].title} amount={data[1].amount}></Expenses>
         <Expenses date={data[2].date} title={data[2].title} amount={data[2].amount}></Expenses>
      </div >
   );
}
export default App;
