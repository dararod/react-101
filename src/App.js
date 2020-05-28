import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { InputGroup, FormControl, ListGroup } from "react-bootstrap";

function App() {
  const listaDeTareasInicial = ["Primera"];
  const [tareas] = useState(listaDeTareasInicial);

  return (
    <div className="App">
      <InputGroup className="mb-3">
        <FormControl placeholder="Nueva tarea" />
      </InputGroup>
      <ListGroup>
        {tareas.map(tarea => (
          <ListGroup.Item>{tarea}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default App;
