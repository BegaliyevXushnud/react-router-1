
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import GlobalModal from "../../component/modal";


const Cars = () => {
    const [open,setOpen] = useState(false)
    const [cars, setCars] = useState([
        {id: 1, name: 'Ferrari', price: 1000, year: 2024, color: 'blue'},
        {id: 2, name: 'Mers', price: 1000, year: 2024, color: 'blue'},
        {id: 3, name: 'Bmw', price: 1000, year: 2024, color: 'blue'}
    ]);
    
  return  (
    <div className="container">
<GlobalModal open={open} toggle={() => setOpen(false)} cars={cars} setCars={setCars}/>
<div className="row my-3">
<div className="col-md-3 offset-2">
<button className="btn btn-primary" onClick={() => setOpen(true)}>Open Modal</button>

</div>
</div>
<div className="row my-2">
<div className="col-md-8 offset-2">
<table className="table table-bordered table-hover table-striped">

</table>
</div>
</div>
    </div>
  )
}

export default Cars