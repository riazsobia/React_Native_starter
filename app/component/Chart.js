import React, {Component} from "react";
import BarChart from "native-charts/charts/BarChart";


class Chart extends Component {

    render(){
        let data = [
            {name: "A", public: 4000, private: 2400, protected: 2400},
            {name: "B", public: 3000, private: 1398, protected: 2210},
            {name: "C", public: 2000, private: 9800, protected: 2290}
            ];
        let meta = [
            {dataKey: "public", name: "Public", fill: "blue"},
            {dataKey: "private", name: "Private", fill:"#F44336"},
            {dataKey: "protected", name: "Protected", fill: "red"}
        ];
        return (
          <BarChart data={data} meta={meta}/>

        );
    }

}

export default Chart;