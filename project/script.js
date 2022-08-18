let db;
createDatabase();
// deleteDatabase();
function createDatabase() {
  const DBopenRequest = indexedDB.open("ajay's database", 2);

  DBopenRequest.onupgradeneeded = (e) => {
    console.log(`Database updated to version ${e.target.result.version}`);

    if (e.oldVersion < 1) {
      // create a database
      db = e.target.result;

      const objectStore = db.createObjectStore("todo-list", {
        keyPath: "taskTitle",
      });

      objectStore.createIndex("hours", "hours", { unique: false });
      objectStore.createIndex("minutes", "minutes", { unique: false });
      objectStore.createIndex("day", "day", { unique: false });
      objectStore.createIndex("month", "month", { unique: false });
      objectStore.createIndex("year", "year", { unique: false });

      objectStore.createIndex("notified", "notified", { unique: false });

      console.log(`ObjectStore Created`, objectStore);
    }

    if (e.target.result.version == 2) createNewObjectStore();
    // , db.deleteObjectStore("todo-list");

    function createNewObjectStore() {
      const newObjectStore = db.createObjectStore("pathToDivine", {
        keyPath: "name",
      });

      newObjectStore.createIndex("chakra", "chakra", { unique: false });
      newObjectStore.createIndex("vayu", "vayu", { unique: false });
      newObjectStore.createIndex("moksha", "moksha", { unique: false });

      console.log(`New Object Store created `, newObjectStore);
    }
    db.onerror = (e) => {
      console.log(`Database error! ${e.target.errorCode}`);
    };
  };

  DBopenRequest.onsuccess = (e) => {
    console.log(`successfully created database ${e.target.result.name}`);

    db = DBopenRequest.result;

    // after we call the .close() method, no new transactions can be created on db
    // db.close()
  };

  DBopenRequest.onerror = (e) => {
    console.error(`${e.target.error}`); // note if you don't show error in string the type of error will change
  };
}
function deleteDatabase() {
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

function readDatabase() {}
