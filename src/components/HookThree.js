import React, { useState } from "react";

function HookThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <div>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({...name, firstname: e.target.value })}
        />
      </div>

      <div>
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({...name, lastname: e.target.value })}
        />
      </div>

      <h1>Your first name is {name.firstname}</h1>
      <h1>Your first name is {name.lastname}</h1>
      {/* <h1>{JSON.stringify(name)}</h1> */}
    </div>
  );
}

export default HookThree;
