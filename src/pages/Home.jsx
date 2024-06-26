import Card from "../components/UI/Card";
import Tiles from "../components/Tiles";

function Home() {
  return (
    <Card>
      <h1 className="text-gray-300 text-5xl text-center font-semibold p-4">
        {" ברוכה הבאה "}
        <span className="text-blue-600 text-center">{" לדרישות והקצאות "}</span>
      </h1>

      <h1 className="text-gray-300 text-2xl text-right font-semibold p-4">
        {" ?מה תרצו לעשות היום "}
      </h1>
      <Tiles />
    </Card>
  );
}

export default Home;
