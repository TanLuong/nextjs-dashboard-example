const postgres = require('postgres');

const db = postgres(process.env.POSTGRES_URL)
export default db