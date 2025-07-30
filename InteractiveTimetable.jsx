import React, { useState } from 'react';

const InteractiveTimetable = () => {
  const [timetable, setTimetable] = useState(
    Array.from({ length: 5 }, () => Array(8).fill(''))
  );

  const updateCell = (row, col, value) => {
    const newTimetable = timetable.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? value : cell))
    );
    setTimetable(newTimetable);
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = ['1', '2', '3', '4', '5', '6', '7', '8'];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Interactive Timetable</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Day/Period</th>
            {periods.map((p) => (
              <th key={p}>{p}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day, rowIndex) => (
            <tr key={day}>
              <td>{day}</td>
              {timetable[rowIndex].map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    value={cell}
                    onChange={(e) =>
                      updateCell(rowIndex, colIndex, e.target.value)
                    }
                    style={{ width: '80px' }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InteractiveTimetable;
