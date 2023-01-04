import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("tabla.db");

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS direccion (id INTEGER PRIMARY KEY NOT NULL,  address TEXT, lat REAL, lng REAL );',
                [],
                () => resolve(),
                (_, err) => reject(err)
            )
        })
    })
    return promise;
}

export const updateData = async (address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'UPDATE direccion SET address = ?, lat = ?, lng = ? WHERE id = 1;',
                [address, lat, lng],
                (_, result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    }) 
    return promise
}

export const insertData = async (address, lat, lng) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'INSERT INTO direccion (address, lat, lng) VALUES (? , ?, ?);',
                [address, lat, lng],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const getData = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                'SELECT * FROM direccion;',
                [],
                (_, result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

    

