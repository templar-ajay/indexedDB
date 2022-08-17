create_Delete_CreateMultiple_compare_listDatabases();

function create_Delete_CreateMultiple_compare_listDatabases() {
  const DBopenRequest = indexedDB.open("ajay's database", 1);

  DBopenRequest.onupgradeneeded = (e) => {
    console.log(`Database updated to version ${e.target.result.version}`);
  };

  DBopenRequest.onsuccess = (e) => {
    console.log(`successfully created database ${e.target.result.name}`);
  };

  DBopenRequest.onerror = (e) => {
    console.error(`${e.target.error}`); // note if you don't show error in string the type of error will change
  };

  const deleteDBRequest = indexedDB.deleteDatabase("ajay's database");

  deleteDBRequest.onsuccess = (e) => {
    console.log(`successfully deleted the database`);
  };

  deleteDBRequest.onerror = (e) => {
    console.warn(`error!!! ${e.target.error}`);
  };
  // deleteDBRequest.onblocked = (e) => {
  //   console.log(
  //     `it takes some time to delete the database , here you can do anything when the onblocked event is fired on deleteDbRequest`
  //   );
  // };
}
