import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'libertadores',
    password: '',
    database: ''
});

export default pool;