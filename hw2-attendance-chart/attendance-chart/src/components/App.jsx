import { useEffect, useState } from "react";
import "../App.css";
import { Table } from "./Table";
import { SaveButton } from "./SaveButton";

const LOCALSTORAGE_KEY = "attendance_data";
const studentsArray = [
  "Lennox Yoder",
  "Hector Ayers",
  "Elle Moody",
  "Laila Lowe",
  "Saif Guerrero",
  "Zak Andersen",
  "Franklin Woodward",
  "Aleeza Hensley",
  "Charles Mcgee",
  "Vinnie Beard",
];

const datesArray = [
  "2023-11-16",
  "2023-11-18",
  "2023-11-23",
  "2023-11-25",
  "2023-11-30",
  "2023-12-02",
  "2023-12-07",
  "2023-12-09",
  "2023-12-14",
  "2023-12-16",
  "2023-12-21",
  "2023-16-23",
];

function App() {
  const [isSaving, setIsSaving] = useState(false);
  const [students, setStudents] = useState(studentsArray);
  const [dates, setDates] = useState(datesArray);
  const [attendanceData, setAttendanceData] = useState(
    generateData(datesArray)
  );

  useEffect(() => {
    try {
      const dataStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      if (dataStorage !== null) {
        setAttendanceData(dataStorage);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  function generateData(datesArr) {
    const dateRows = datesArr.map((date) => {
      const res = {
        date,
        students: [],
      };
      return res;
    });

    return dateRows;
  }

  function saveData(e) {
    e.preventDefault();
    setIsSaving(true);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(attendanceData));
    setInterval(() => {
      setIsSaving(false);
    }, 2000);
  }

  function toggleCell(date, student) {
    let newRow = attendanceData.filter((item) => item.date === date)[0]
      .students;

    if (newRow.includes(student)) {
      newRow = newRow.filter((item) => item !== student);
    } else {
      newRow.push(student);
    }
    
    const newAttendanceArray = [
      ...attendanceData.filter((item) => item.date !== date),
      {
        date,
        students: newRow,
      },
    ];
    setAttendanceData(newAttendanceArray);
  }

  return (
    <div className="App">
      <h1>HOMEWORK 2</h1>
      <Table
        dates={dates}
        students={students}
        attendanceData={attendanceData}
        toggleCell={toggleCell}
      />
      <SaveButton saveData={saveData} isSaving={isSaving} />
    </div>
  );
}

export default App;
