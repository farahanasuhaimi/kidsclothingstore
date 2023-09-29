import json
import pymysql

# Open the JSON file
with open('products.json', 'r') as json_file:
    data = json.load(json_file)

# Connect to the SQL database
conn = pymysql.connect(host='127.0.0.1', user='root', password='1234qwer', db='kidsstore')
cursor = conn.cursor()

# Iterate through the JSON data and insert it into the SQL table
for item in data:
    # Assuming 'table_name' is the name of your SQL table
    sql = "INSERT INTO products (name, description, price, quantity, category_id, size_id, color_id) VALUES (%s, %s, %s, %s, %s, %s, %s )"
    values = (item['name'], item['description'], item['price'], item['quantity'], item['category_id'], item['size_id'], item['color_id'])
    cursor.execute(sql, values)

# Commit the changes and close the connection
conn.commit()
conn.close()
