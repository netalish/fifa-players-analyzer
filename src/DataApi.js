//const rawData = require("./FIFA_Datasource.json");
// const arrangedData = DataApi.arrangeData(data);
// const mapData = DataApi.mapIntoObject(arrangedData);

class DataApi {
  constructor(rawData) {
    this.mapData = this.arrangeData(rawData);
    this.mapData = this.mapIntoObject(this.mapData);
  }

  arrangeData(data) {
    const r = /\d+/;
    const newData = data.map((item) => {
      let newItem = {};
      if (item.Name) {
        newItem = {
          ...item,
          Photo: "https://cdn.sofifa.net/players/246/268/21_120.png",
          Wage: Number(item.Wage.match(r)[0]),
          Overall: Number(item.Overall),
        };
      }
      return newItem;
    });
    return newData;
  }

  mapIntoObject(data) {
    return data.reduce((acc, curr) => {
      if (curr.Name) {
        if (!acc[curr.Age]) {
          acc[curr.Age] = [];
        }

        acc[curr.Age].push(curr);
      }
      return acc;
    }, {});
  }

  getDataByAgeRange(data, from, to) {
    let newData = [];

    if (data.length > 0) {
      const firstIndexForNewData = data.findIndex(
        (element) => element.age === from
      );
      newData = [...data];

      newData.splice(0, firstIndexForNewData);

      for (let i = to - 1; i < to; i++) {
        if (this.mapData[i]) {
          newData = [...newData, ...this.mapData[i]];
        }
      }
    } else {
      for (let i = from; i < to; i++) {
        if (this.mapData[i]) {
          newData = [...newData, ...this.mapData[i]];
        }
      }
    }

    return newData;
  }
}

export default DataApi;
