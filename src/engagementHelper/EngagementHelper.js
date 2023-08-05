import moment from "moment";

const engagementOvertimeData = (list, channelsDetailsList) => {
  const filteredChannelsList = [];
  const filteredListForHighcharts = [];
  let filteredObj = {
    y: "",
    date: "",
    id: "",
  };

  //create a array which is acceptable by highcharts
  list.map((val) => {
    filteredObj = {
      y: parseInt(val.count),
      date: val.timeBucket,
      id: val.channelId,
    };
    return filteredListForHighcharts.push(filteredObj);
  });

  //filter channels list which has messages on more than 1 date
  channelsDetailsList.map((item) => {
    filteredListForHighcharts.map((val) => {
      if (item.id === val.id) {
        return filteredChannelsList.push(val);
      }
      return 0;
    });
    return 0;
  });

  //charts options
  const options = {
    chart: {
      type: "spline",
      inverted: false,
    },
    title: {
      text: "Messages Engagement",
    },
    tooltip: {
      formatter: function (item) {
        const count = item.chart.series[0].data[this.point.index].options.y;
        const date = moment(
          item.chart.series[0].data[this.point.index].options.date
        ).format("D MMM");
        return `${count} messages on ${date}`;
      },
    },
    xAxis: {
      labels: {
        formatter: function (item) {
          if (!item.chart.options.series[0].data[item.value]?.date) {
            return "";
          }
          return moment(
            item.chart.options.series[0].data[item.value]?.date
          ).format("D MMM");
        },
      },
    },
    series: [
      {
        data: filteredChannelsList,
        name: "general",
      },
    ],
  };
  return options;
};

const engagementHelper = {
  engagementMessageOverTimeChartOptions: engagementOvertimeData,
};

export default engagementHelper;
