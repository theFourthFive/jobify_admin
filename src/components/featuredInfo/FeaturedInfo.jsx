import React from "react";
import "./featuredInfo.css";

import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

// prettier-ignore
export default function FeaturedInfo() {
  return (
    <div className="featured">

      <div className="featuredItem">
        <span className="featuredItemTitle">Income</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2 415 TND</span>
          <span className="featuredMoneyRate">
            -11.4<ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredItemTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">4 415 TND</span>
          <span className="featuredMoneyRate">
            -1.4<ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featureSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredItemTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2 225 TND</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featureSubtitle">Compared to last month</span>
      </div>

    </div>
  );
}
