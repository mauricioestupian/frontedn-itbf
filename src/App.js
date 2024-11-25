import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import './App.css';


function App() {
  
  const [hotels, setHotels] = useState([]);
  
  const URL = "http://127.0.0.1:8000/api/hotels";

  const showData = async () => {
    const response  = await fetch(URL)
    const data = await response.json()
    console.log(data)
    setHotels(data)
  }
  const Button = () => <button type="button" class="btn btn-outline-danger">Download</button>;

  useEffect(() => {
    showData()
  }, []);
  
  const columns = [
    {
      name: 'Nit',
      selector: row => row.id_nit
    },
    {
      name: 'Hotel',
      selector: row => row.nom
    },
    {
      name: 'Dirección',
      selector: row => row.dir
    },
    {
      name: 'Total Habitaciones',
      selector: row => row.num_hab
    },
    {
      name: 'Ciudad',
      selector: row => row.ciu_id
    },
    {
		name: 'Poster Button',
		button: true,
		cell: () => <Button>Download Poster</Button>,
	},
  ]
  
  return (
    <div className="App">
      <h1>Prueba técnica ITBF</h1>
      <div>
        <DataTable
          columns={columns}
          data={hotels}
        />
      </div>
    </div>
  );
}

export default App;
