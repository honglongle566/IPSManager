from flask import Flask
import psycopg2 
import psycopg2.extras
app = Flask(__name__)

DB_HOST ="localhost"
DB_NAME = "Demo"
DB_USER="postgres"
DB_PASS ="abc12345"

conn = psycopg2.connect(
    dbname=DB_NAME,
    user = DB_USER,
    password = DB_PASS,
    host = DB_HOST
)
print("Databse connect successfully")
if __name__ =="__main__":
    app.run(debug=True)