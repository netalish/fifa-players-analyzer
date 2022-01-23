import { useState, useEffect, useRef } from "react";
import DataApi from "./DataApi";
const data = require("./FIFA_Datasource.json");

const api = new DataApi(data);

const START_AGE_RANGE = {
  startLOwerAgeRange: 15,
  startUpperAgeRange: 20,
};
const NUMBER_OF_ROUNDS = 14;

const useFetch = (isOn) => {
  const initPlay = {
    data: api.getDataByAgeRange(
      [],
      START_AGE_RANGE.startLOwerAgeRange,
      START_AGE_RANGE.startUpperAgeRange
    ),
    ageRange: {
      from: START_AGE_RANGE.startLOwerAgeRange,
      to: START_AGE_RANGE.startUpperAgeRange,
    },
  };
  const [play, setPlay] = useState(initPlay);

  const nextRound = useRef(0);
  useEffect(() => {
    if (isOn) {
      const intervalId = setInterval(() => {
        if (nextRound.current < NUMBER_OF_ROUNDS) {
          nextRound.current = nextRound.current + 1;

          const newAgeRange = {
            from: START_AGE_RANGE.startLOwerAgeRange + nextRound.current,
            to: START_AGE_RANGE.startUpperAgeRange + nextRound.current,
          };

          const nextData = loadNewData(play.data);
          //   const t0 = performance.now();
          setPlay({
            data: nextData,
            ageRange: newAgeRange,
          });
          //   const t1 = performance.now();
          //   console.log(
          //     `Call to get new filtered data took ${t1 - t0} milliseconds.`
          //   );
        }
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isOn]);

  function loadNewData(oldData) {
    return api.getDataByAgeRange(
      oldData,
      START_AGE_RANGE.startLOwerAgeRange + nextRound.current,
      START_AGE_RANGE.startUpperAgeRange + nextRound.current
    );
  }

  return { play };
};

export default useFetch;
