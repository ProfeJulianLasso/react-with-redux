import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../Redux/Slices/CounterSlice";
import { RootState } from "../../Redux/Store/Store";
import "./App.css";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleClickIncrement = () => dispatch(increment());
  const handleClickDecrement = () => dispatch(decrement());
  const handleClickIncrementByAmount = () => dispatch(incrementByAmount(5));

  return (
    <>
      <h1>Contador {count}</h1>
      <button type="button" onClick={handleClickIncrement}>
        Incrementar
      </button>
      <br />
      <br />
      <button type="button" onClick={handleClickDecrement}>
        Decrementar
      </button>
      <br />
      <br />
      <button type="button" onClick={handleClickIncrementByAmount}>
        Incrementar por 5
      </button>
    </>
  );
}

export default App;
