import React from "react";
import { HorizontalBar } from "react-chartjs-2";

class ChartsPage extends React.Component {
  state = {
    dataHorizontal: {
      labels: ["Red", "Orange", "Yellow", "Green"],
      datasets: [
        {
          label: "My First Dataset",
          data: [22, 33, 55, 12],
          fill: true,
          backgroundColor: ["#009BD1", "#00455E", "#00ACEB", "#0090C4"],
          borderWidth: 0.5,
        },
      ],
    },
  };

  render() {
    return (
      <HorizontalBar
        data={this.state.dataHorizontal}
        options={{ responsive: true }}
      />
    );
  }
}

export default ChartsPage;
