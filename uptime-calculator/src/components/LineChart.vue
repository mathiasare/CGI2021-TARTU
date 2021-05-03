

<script>
//Linechart component to handle rendering linechart on the graphs page.
import { Line } from "vue-chartjs";
export default {
  extends: Line,
  props: ["chartData", "options"],
  watch: {
    //ChartData watcher detects changes in chartData array, means that new chart needs to be rendered.
    chartData() {
      this.renderChart(
        {
          labels: this.chartData[0],
          datasets: [
            {
              label: "Uptime",
              data: this.chartData[1],
              backgroundColor: [
                //Color customization
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            },
          ],
        },
        this.options //Options from parent component.
      );
    },
  },
};
</script>

<style scoped>
</style>