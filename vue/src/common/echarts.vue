<template>
  <div class="echarts">
    <div :style="{height:height,width:width}" :class="className" :id="id" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "echarts",
  props: {
    width: {
      type: String,
      default: "600px"
    },
    height: {
      type: String,
      default: "400px"
    },
    className: {
      type: String,
      default: "test"
    },
    id: {
      type: String,
      default: "id"
    }
  },
  data(){
    return {
      json:[
        {
          date:'4-10',
          value:180
        },
        {
          date:'4-11',
          value:123
        },
        {
          date:'4-12',
          value:543
        },
        {
          date:'4-13',
          value:432
        },
        {
          date:'4-14',
          value:555
        },
        {
          date:'4-15',
          value:352
        },
        {
          date:'4-16',
          value:374
        },
        {
          date:'4-17',
          value:564
        },
        {
          date:'4-18',
          value:435
        }
      ],
      date: [],
      value: []
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    selectDate(data){
      for(let i = 0; i < data.length;i++){
        this.date.push(data[i].date)
        this.value.push(data[i].value)
      }
    },
    initChart() {
      this.selectDate(this.json)
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      this.chart.setOption({
        title: {
          text: "访问量",
          subtext: "122.152.199.244"
        },
        animation:true,
        tooltip: {
          trigger: "axis"
        },
        // legend: {
        //   data: ["最高气温"]
        // },
        calculable: true,
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.date
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value}"
            }
          }
        ],
        series: [
          {
            name: "最高气温",
            type: "line",
            data: this.value,
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
  
</style>

