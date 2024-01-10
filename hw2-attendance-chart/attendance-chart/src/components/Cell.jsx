import { useEffect, useState } from "react";

export function Cell({ date, student, attendanceData, toggleCell }) {
  const [isAttended, setIsAttended] = useState(false);

  function checkIsAttended(date, student, attendanceData) {
    const dateRow = attendanceData.filter((item) => item.date === date);

    if (dateRow[0].students.includes(student)) {
      setIsAttended(true);
    } else {
      setIsAttended(false);
    }
  }

  function handleClick(date, student) {
    toggleCell(date, student);
  }

  useEffect(() => {
    checkIsAttended(date, student, attendanceData);
  }, [attendanceData]);

  return (
    <td
      onClick={() => {
        handleClick(date, student);
      }}
      className={`table__cell table__cell${
        isAttended ? "_checked" : "_unchecked"
      }`}
    >
      {/* {console.log("cell props", date, student)} */}
    </td>
  );
}
