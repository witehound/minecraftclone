import { useStore } from "../../hooks";

const Menu = () => {
  const [saveWorld, resetWorld] = useStore(({ saveWorld, resetWorld }) => [
    saveWorld,
    resetWorld,
  ]);
  return (
    <div className="menu absolute">
      <button onClick={saveWorld}>Save</button>
      <button onClick={resetWorld}>Reset</button>
    </div>
  );
};

export default Menu;
