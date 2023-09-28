import ClassComponent from "./components/classComponent";
import Car from "./components/car";
import FunctionalComponent from "./components/functionalComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Car />
      <ClassComponent />
      <FunctionalComponent />
    </main>
  );
}
