import React from "react";
import "./home.css";

import { userData } from "../../dummyData";

import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="Sales Analytics"
        dataKey="Active Sales"
        grid
      />
    </div>
  );
}
