import { useState } from "react";
import Category from "../components/category/Category";
import Todo from "../components/todo/Todo";
import Card from "../components/ui/Card";
import ToggleButtons from "../components/ui/ToggleButtons";
import { View } from "../lib/types";

type Props = {};

const Home = (props: Props) => {

const [activeView, setActiveView] = useState(View.TODO);

const handleChangeActiveView = (view: View) => {
  setActiveView(view)
}


  return (
    <section className="flex justify-center h-screen items-center">
      <Card>
        <h1 className="font-serif text-white text-4xl text-center md:text-5xl">
          MASTER TRACKER
        </h1>
        <p className="italic text-white mt-2 mb-10 text-center text-lg md:text-xl">
          Track your todos efficiently
        </p>
        <ToggleButtons
          activeView={activeView}
          onChangeActiveView={handleChangeActiveView}
        />
        {activeView === View.TODO ? <Todo /> : <Category />}
      </Card>
    </section>
  );
};

export default Home;
