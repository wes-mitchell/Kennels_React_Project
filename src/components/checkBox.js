import React, {useState} from "react";
export const MyCheckBox = () => {

  const [checkedState, setCheckedState] = useState(false)

  const HandleChange = () => { 
    setCheckedState(!checkedState)
   }
}
//     return (

//       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={checkedState} onChange={HandleChange} />
//       <label for="vehicle1"> I have a bike</label><br/>
//       <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={checkedState} onChange={HandleChange} />
//       <label for="vehicle2"> I have a car</label><br/>
//       <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={checkedState} onChange={HandleChange} />
//       <label for="vehicle3"> I have a boat</label><br/>

//       )
// }