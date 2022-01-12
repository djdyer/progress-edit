import { openDB } from "idb";

const initdb = async () =>
  openDB("edits", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("edits")) {
        console.log("edits database already exists");
        return;
      }
      db.createObjectStore("edits", { keyPath: "id", autoIncrement: true });
      console.log("edits database created");
    },
  });

// Accepts content and then POST to db
export const putDb = async (content) => {
  console.log("Post to the database");

  // Connects to the database and version we want to use.
  const editsDb = await openDB("edits", 1);

  // New transaction to specify the database and privileges.
  const tx = editsDb.transaction("edits", "readwrite");

  // Open up the object store.
  const store = tx.objectStore("edits");

  // Pass in the content.
  const request = store.put({ contact });

  // Confirmation of request.
  const result = await request;
  console.log("🚀 - data saved to the database", result);

  // console.error("putDb not implemented");
};

// GET all content from db
export const getDb = async () => {
  console.log("GET from the database");

  // Connects to the database and version we want to use.
  const editsDb = await openDB("edits", 1);

  // New transaction to specify the database and privileges.
  const tx = editsDb.transaction("edits", "readonly");

  // Open up the object store.
  const store = tx.objectStore("edits");

  // Get all data in the database.
  const request = store.getAll();

  // Confirmation of request
  const result = await request;
  console.log("result.value", result);
  return result;

  // console.error("getDb not implemented");
};

initdb();
