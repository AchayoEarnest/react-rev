import React, { useEffect, useState } from "react";

function UseEffectHook2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You just clicked ${count} times`
  })

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}

export default UseEffectHook2;
