import { Cell } from "./Cell";

export function Table({ students, dates, attendanceData, toggleCell }) {
  function handleToggleCell(date, student, attendanceData) {
    toggleCell(date, student, attendanceData);
  }
  return (
    <>
      <h2>Table component</h2>
      <table className="table">
        <thead className="table__head">
          <tr>
            <td></td>
            {dates.map((date) => {
              return (
                <th className="table__date" key={"data" + date}>
                  {date}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table__body">
          {students.map((student, index) => {
            return (
              <tr className="table__row" key={"student" + student}>
                <th className="table__name">
                  {index + 1}. {student}
                </th>
                {dates.map((date) => {
                  return (
                    <Cell
                      key={student + date}
                      date={date}
                      student={student}
                      attendanceData={attendanceData}
                      toggleCell={(date, student) => {
                        handleToggleCell(date, student);
                      }}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
