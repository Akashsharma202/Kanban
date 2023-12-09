import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home';
import axios from 'axios';
import Status from './Components/Status';
import User from './Components/User';
import Priority from './Components/Priority';

function App() {
  console.log("App component mounted");
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState(() => {
    const storedOrder = localStorage.getItem("order") || "priority";
    console.log("Initial Order:", storedOrder);
    return storedOrder;
  });
  
  const [group, setGroup] = useState(() => {
    const storedGroup = localStorage.getItem("group") || "status";
    console.log("Initial Group:", storedGroup);
    return storedGroup;
  });
        
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        // Assuming you want to update the tasks state with the fetched data
        setTasks(res.data.tickets);
        setUser(res.data.users);
        console.log(user);
        // console.log(tasks)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <Home setOrder={setOrder} setGroup={setGroup} />
      {
        group === "status" ?
          <>
            <Status tasks={tasks} order={order} />
          </>
          : group === "user" ?
            <>
              <User user={user} tasks={tasks} order={order} />
            </>
            :
            <>
              <Priority user={user} tasks={tasks} order={order} />
            </>
      }

    </>
  );
}

export default App;