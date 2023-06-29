 
//import { useGoogleCalendarApi } from 'react-google-calendar-api';
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Catalina_Sunset from "../images/Catalina_Sunset.png";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const Schedule = () => {
  const [events, setEvents] = useState([]);
  
  const styles3 = {
    backgroundImage: `url(${Catalina_Sunset})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  useEffect(() => {
    fetchEventsFromGoogleCalendar();
  }, []);

  const fetchEventsFromGoogleCalendar = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      setEvents(response.data.events);
    } catch (error) {
      console.log("Error fetching events from Google Calendar:", error);
    }
  };

  return (
    <div
      style={styles3}
      className="schedule-page-container xs:scale-100 sm:scale-100 md:scale-100 lg:scale-100"
    >
      <h1 className="pt-10 text-2xl font-style: italic">Training Options</h1>
      <div className="calendar-container xs:scale-100 sm:scale-100 md:scale-100 lg:scale-100">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 1000, width: 1000, margin: "100px" }}
        />
      </div>
    </div>
  );
};

export default Schedule;

 