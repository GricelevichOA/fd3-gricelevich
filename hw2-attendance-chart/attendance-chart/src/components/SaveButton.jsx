export function SaveButton({ saveData, isSaving }) {
  function saveDataHandler(e) {
    saveData(e);
  }
  return (
    <>
      {isSaving ? (
        "Идёт сохранение..."
      ) : (
        <button onClick={saveDataHandler}>Сохранить</button>
      )}
    </>
  );
}
