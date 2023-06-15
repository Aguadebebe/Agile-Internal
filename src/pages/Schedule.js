 
//import Paper from '@mui/material/Paper';
//import RepeatIcon from '@mui/icons-material/Repeat';
import Catalina_Sunset from "../images/Catalina_Sunset.png";
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@mui/styles';


const styles1 ={
  backgroundImage: `url(${Catalina_Sunset})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
 
const useStyles = makeStyles({
  schedulerContainer: {
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      background: 'rgba(255, 255, 255, 0.5)', // Adjust the opacity as needed
      zIndex: -1,
    },
  },
  headerContainer: {
    marginTop: "-40px",
  },
});

const appointments = [
  { startDate: '2023-06-15T09:45', endDate: '2023-06-15T11:00', title: 'Meeting' },
  { startDate: '2023-06-16T12:00', endDate: '2023-06-16T13:30', title: 'Lunch' },
];

const SchedulerComponent = () => {
  const currentDate = '2023-06-15';
  const classes = useStyles();
   return (
    
   <div className="schedule-page-container">
    <div style={styles1} className="min-h-screen flex flex-col">
     <div className="flex-grow flex flex-col">   
     <div className="header-container">
     <div className={`schedule-header text-center text-6xl pb-12 text-white underline decoration-2 font-style: italic ${classes.headerContainer}`}> 
     <div className="flex justify-center items-center">
     <span className="xs:scale-50 xs:mt-16 sm:scale-50 md:scale-100 lg:scale-100">Training Options</span>
   </div>
   </div>
   </div>
     </div>
     <div className={classes.schedulerContainer}>
      
     </div>
      <div classNamw="flex-grow overflow-auto"> 
      <Scheduler
        data={appointments}
      >
        <ViewState
          currentDate={currentDate}
        />
        <WeekView
          startDayHour={9}
          endDayHour={18}
        />
         
        <Appointments />
      </Scheduler>
      </div>
  </div> 
  </div>  
);
};

export default SchedulerComponent;
