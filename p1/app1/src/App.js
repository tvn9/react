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
         <Expenses items={data} />
      </div >
   );
}
export default App;
