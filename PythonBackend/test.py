import json
from sqlalchemy.engine import create_engine

connect_args = {
  'use_ssl' : True,
  'http_compress' : True, # enables gzip compression for request bodies
  'verify_certs' : False,
  'ssl_assert_hostname' : False,
  'ssl_show_warn' : False,
}

uri_test = 'odelasticsearch+http://admin:admin@localhost:9200'

engine = create_engine(uri_test,
connect_args= connect_args)

print(json.dumps({ 'connect_args': connect_args }, indent=2))

conn = engine.connect()

rows = conn.execute('SELECT * FROM python-test-index LIMIT 50')

print([row for row in rows])