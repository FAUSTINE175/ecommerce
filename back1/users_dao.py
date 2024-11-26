from sql_connection import get_sql_connection
import bcrypt

def insert_new_user(connection, user):
    cursor = connection.cursor()
    hashed_password = bcrypt.hashpw(user['password'].encode('utf-8'), bcrypt.gensalt())
    
    query = ("INSERT INTO users (username, email, password, referred_by) "
             "VALUES (%s, %s, %s, %s)")
    
    data = (user['username'], user['email'], hashed_password, user['referred_by'])
    
    cursor.execute(query, data)
    connection.commit()
    cursor.close()
    return cursor.lastrowid

def get_user_by_email(connection, email):
    cursor = connection.cursor()
    query = "SELECT * FROM users WHERE email = %s"
    cursor.execute(query, (email,))
    user = cursor.fetchone()
    cursor.close()
    return user