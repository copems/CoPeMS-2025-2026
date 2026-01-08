import pool from '../config/database.js';

class UserAccount {
    constructor(user_id, username, user_password, account_type){
        this.user_id = user_id;
        this.username = username;
        this.user_password = user_password;
        this.account_type = account_type;
    }
    static async findByUsername(username){
        let conn;
        try {
            conn = await pool.getConnection();
            const rows = await conn.query('CALL sp_GetUserAccount(?)', [username]);
            console.log('Stored procedure result:', rows);
            
            // MariaDB stored procedures return results in rows[0]
            // and the actual data is in the first element
            if (rows && rows[0] && rows[0].length > 0){
                const userData = rows[0][0];
                return new UserAccount(
                    userData.user_id,
                    userData.username,
                    userData.user_password,
                    userData.account_type
                );
            }
            return null;
        }
        catch (error) {
            console.error('Error in findByUsername:', error);
            throw error;
        }
        finally {
            if (conn) conn.release();
        }
    }
}

export default UserAccount;
