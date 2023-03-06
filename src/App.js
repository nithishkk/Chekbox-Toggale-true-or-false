import React from "react";
import "./style.css";

export default function App() {
  const [isBeautiful, setIsBeautiful] = React.useState(false);
  
    function toggleBackground(shouldShow) {
      console.log(shouldShow,"isBeautiful")
      document.body.classList.toggle('with-bg', shouldShow);
    }
 
  // React.useEffect(() => {
  //   toggleBackground(isBeautiful);
  // }, [isBeautiful]);
  function handleChange() {
    setIsBeautiful(!isBeautiful);
  } 
  console.log(isBeautiful,"isBeautiful")
  return (
    <div>
      <label>
      <input type="checkbox" onChange={()=>handleChange(!isBeautiful)} />
      Turn on pretty background
    </label>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
