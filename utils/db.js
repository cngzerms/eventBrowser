const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function testDBConnection() {
  try {
    const db = await openDB();
    console.log("Veritabanı bağlantısı başarıyla kuruldu.");
  } catch (error) {
    console.error("Veritabanı bağlantısını test etme sırasında bir hata oluştu:", error);
  }
}

// Test işlemi
testDBConnection();

async function openDB() {
  try {
    const db = await open({
      filename: "./database.db",
      driver: sqlite3.Database,
    });
    console.log("Veritabanı bağlantısı başarıyla kuruldu.");
    return db;
  } catch (error) {
    console.error("Veritabanı bağlantısı sırasında bir hata oluştu:", error);
    throw error;
  }
}


async function initializeDB() {
  try {
    const db = await openDB();
    await db.exec(`
      CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS users (
        username TEXT PRIMARY KEY
      );
      CREATE TABLE IF NOT EXISTS likes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        eventId INTEGER NOT NULL,
        FOREIGN KEY (username) REFERENCES users(username),
        FOREIGN KEY (eventId) REFERENCES events(id)
      );
    `);
    // Dummy veri ekleme
    await db.run(
      `INSERT INTO events (title, description, image) VALUES (?, ?, ?)`,
      ["Örnek Etkinlik", "Bu bir örnek etkinliktir", "/ornek.jpg"]
    );
  } catch (error) {
    console.error("Veritabanı başlatma sırasında bir hata oluştu:", error);
    throw error; 
  }
}

module.exports = { openDB, initializeDB };
