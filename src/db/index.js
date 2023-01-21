import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("tabla.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS persona18 (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, userId TEXT,  address TEXT, lat REAL, lng REAL, email TEXT, password TEXT, photo TEXT);',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
    return promise;
}

export const updateData = async (data, column, userId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `UPDATE persona18 SET ${column} = ? WHERE userId = ?;`,
                [data, userId],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    }) 
    return promise
}

export const insertData = async (userId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO persona18 (userId) VALUES (?);`,
                [userId],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const getData = (userId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM persona18 WHERE userId = ?;`,
                [userId],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

    
export const getAllData = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `SELECT * FROM persona18;`,
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

