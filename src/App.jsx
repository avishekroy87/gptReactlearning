import { Fragment} from "react";
import Timer from "./Timer";
import TooltipButton from "./Daythird";


const App = () => {
  // const [count, setCount] = useState(0);

  // function increment(times) {
  //   setCount((prev) => prev + times);
  // }

  return (
    <Fragment>
      {/* <button onClick={() => increment(1)}>1+</button>
      <button onClick={() => increment(5)}>5+</button>
      <button onClick={() => increment(10)}>10+</button>
      {count}

      <Timer /> */}
      <TooltipButton />
    </Fragment>
  );
};

export default App;
