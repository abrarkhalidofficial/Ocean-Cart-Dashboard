import React from "react";
import { Doughnut } from "react-chartjs-2";

class ChartsPage extends React.Component {
  state = {
    dataDoughnut: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#009BD1",
            "#44B9E3",
            "#00A3DE",
            "#1C4D5E",
            "#007DAB",
          ],
          hoverBackgroundColor: [
            "#009BD1",
            "#44B9E3",
            "#00A3DE",
            "#1C4D5E",
            "#007DAB",
          ],
        },
      ],
    },
  };

  render() {
    return (
      <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
    );
  }
}

export default ChartsPage;
