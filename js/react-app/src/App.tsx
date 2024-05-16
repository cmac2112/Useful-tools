import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]); //to store fetched data
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/users");
      console.log(response.data.users); //interchangeable with members,
      setItems(response.data.users);
    } catch (error) {
      console.error("error fetching data", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []); //empty array so it runs once

  //let items = ["item1dfsdf", "itemsdfds2", "item3", "item4", "iqwetem5"];
  const handleSelectItem = (item: string) => {
    console.log(item);
    setAlertMessage("you have selected: " + item);
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 6000);
  };

  return (
    <div>
      {alertVisible && <Alert>{alertMessage}</Alert>}
      <ListGroup
        items={items}
        heading={"items in the list"}
        onSelectItem={handleSelectItem}
      />
      ;
    </div>
  );
}
export default App;
