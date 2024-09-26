import { useRef, useState } from "react";

// before we start will set our constant value for formating time
// for MS > SEC is 1000
// SEC to MIN is 60
// MIN to HOUR is 60
const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;

// we also need to know MS IN HOUR which is ms * sec * minute
const MS_IN_HOUR = MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND;
// and MS IN MIN which is MS * SEC
const MS_IN_MINUTE = SECONDS_IN_MINUTE * MS_IN_SECOND;

function formatTime(time) {
  // the time we pass in will be total of MS which transfering to timeMap
  // to indicate the current MS is in HR,MIN,SEC,MS
  const timeMap = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    ms: 0,
  };

  // while formating time we will see MS in this order
  // MS_IN_HOUR, MS_IN_MIN
  // if we had time over MS_HOUR we will set our hour
  if (time > MS_IN_HOUR) {
    timeMap.hours = Math.floor(time / MS_IN_HOUR);
    time %= MS_IN_HOUR;
  }

  // if we had time over MS_MIN we will set our hour
  if (time > MS_IN_MINUTE) {
    timeMap.minutes = Math.floor(time / MS_IN_MINUTE);
    time %= MS_IN_MINUTE;
  }

  // if we had time over MS_SEC we set second
  if (time > MS_IN_SECOND) {
    timeMap.seconds = Math.floor(time / MS_IN_SECOND);
    time %= MS_IN_SECOND;
  }

  // the reset is just ms
  timeMap.ms = time;

  return timeMap;
}

// because we will have 2 digit we need to see if greater 10 to set either 10 / 01
function padTwoDigit(number) {
  return number >= 10 ? String(number) : `0${number}`;
}

export default function Stopwatch() {
  const lastTickTiming = useRef(null);
  const [totalDuration, setTotalDuration] = useState(0);
  // Timer ID of the active interval, if one is running.
  const [timerId, setTimerId] = useState(null);

  // Derived state to determine if there's a timer running.
  const isRunning = timerId != null;

  function startTimer() {
    lastTickTiming.current = Date.now();
    setTimerId(
      window.setInterval(() => {
        const now = Date.now();
        const timePassed = now - lastTickTiming.current;
        setTotalDuration(
          (duration) =>
            // Use the callback form of setState to ensure
            // we are using the latest value of duration.
            duration + timePassed
        );
        lastTickTiming.current = now;
      }, 1)
    );
  }

  function stopInterval() {
    window.clearInterval(timerId);
    setTimerId(null);
  }

  function resetTimer() {
    stopInterval();
    setTotalDuration(0);
  }

  function toggleTimer() {
    if (isRunning) {
      stopInterval();
    } else {
      startTimer();
    }
  }

  const formattedTime = formatTime(totalDuration);

  return (
    <div>
      <div>
        {formattedTime.hours > 0 && <span>{formattedTime.hours}h </span>}
        {formattedTime.minutes > 0 && <span>{formattedTime.minutes}m </span>}
        <span>{formattedTime.seconds}s </span>
        <span>{padTwoDigit(Math.floor(formattedTime.ms / 10))}</span>
      </div>
      <div>
        <button
          onClick={() => {
            toggleTimer();
          }}
        >
          {isRunning ? "Stop " : "Start "}
        </button>
        <button
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
