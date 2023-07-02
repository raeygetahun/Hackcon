import React from 'react';
import './schedule.css'; // Import the CSS file

const Schedule = () => {
  const scheduleData = [
    { time: '09:00 AM', event: 'Meeting with clients' },
    { time: '11:00 AM', event: 'Team brainstorming session' },
    { time: '01:00 PM', event: 'Lunch break' },
    { time: '03:00 PM', event: 'Presentation preparation' },
    { time: '05:00 PM', event: 'Project review meeting' },
  ];

  return (
    <div className="schedule-container">
      <h2 className="schedule-heading">Schedule</h2>
      <ul className="schedule-list">
        {scheduleData.map((item, index) => (
          <li key={index} className="schedule-item">
            <span className="time">{item.time}</span>
            <span className="event">{item.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Schedule;
