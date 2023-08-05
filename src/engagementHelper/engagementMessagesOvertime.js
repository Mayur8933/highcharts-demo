import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import messageCountList from "./messageCountList.json";
import channels from "./channels.json";
import engagementHelper from "./EngagementHelper";

const options = engagementHelper.engagementMessageOverTimeChartOptions(
  messageCountList,
  channels
);

const EngagementMessagesOverTime = () => (
  <HighchartsReact highcharts={Highcharts} options={options} />
);

export default EngagementMessagesOverTime;
