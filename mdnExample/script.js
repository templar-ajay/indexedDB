"use strict";
// This is what our customer data looks like.
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];

const dbName = document.querySelector("#dbName");
const dbVersion = document.querySelector("#dbVersion");
const btnOpenDB = document.querySelector("#openDB");
btnOpenDB.addEventListener("click", openDB);

function openDB() {
  const request = indexedDB.open(dbName.value, dbVersion.value);

  request.onerror = (e) => {
    console.log(`Error !!! ${e.target.error}`);
  };

  request.onsuccess = (e) => {
    console.log(
      `Database "${e.target.result.name}" opened successfully `,
      e.target.result
    );
    const db = e.target.result;
  };

  request.onupgradeneeded = (e) => {
    console.log(
      `on upgrade needed is called for "${e.target.result}"`,
      "db",
      e.target.result
    );
    const db = e.target.result;

    const objectStore = db.createObjectStore("names", { autoIncrement: true });

    customerData.forEach((customer) => {
      objectStore.add(customer.name);
    });
  };
}
