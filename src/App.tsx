import { Space } from "./components/space/Space";

const plane = Array(12).fill(Array(12).fill(null))


function App() {
  return (
    <div className="labyrinth">
      {
        plane.map((file) => {
          return  (
            <div className="line">
              {file.map(() =>  <Space/> )}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
