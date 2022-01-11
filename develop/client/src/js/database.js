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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error("putDb not implemented");

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error("getDb not implemented");
//
//--------------------------------------------------
//-------FROM MINI PROJECT - EDITED

// Post to db
export const postDb = async (content) => {
  console.log("Post to the database");

  // Connects to the database and version we want to use.
  const editsDb = await openDB("edits", 1);

  // New transaction to specify the database and privileges.
  const tx = editsDb.transaction("edits", "readwrite");

  // Open up the object store.
  const store = tx.objectStore("edits");

  // Pass in the content.
  const request = store.add({ contact });

  // Confirmation of request.
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// Get from db
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
};

// Delete from db
export const deleteDb = async (id) => {
  console.log("DELETE from the database", id);

  // Connects to the database and version we want to use
  const editsDb = await openDB("edits", 1);

  // New transaction to specify the database and privileges
  const tx = editsDb.transaction("edits", "readwrite");

  // Open up the object store
  const store = tx.objectStore("edits");

  // Delete data by id
  const request = store.delete(id);

  // Confirmation of request
  const result = await request;
  console.log("result.value", result);
  return result?.value;
};

initdb();
