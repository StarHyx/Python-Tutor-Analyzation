#!/usr/local/bin/python3.3

# Minimal CGI script for Online Python Tutor (v5-unity), tested under Python 2 and 3

# If you want to run this script, then you'll need to change the
# shebang #! line at the top of this file to point to your system's Python.
#
# Also, check CGI execute permission in your script directory.
# You might need to create an .htaccess file like the following:
#
#   Options +ExecCGI
#   AddHandler cgi-script .py


import cgi
import json
import pg_logger
import sys


def cgi_finalizer(input_code, output_trace):
  """Write JSON output for js/pytutor.js as a CGI result."""
  ret = dict(code=input_code, trace=output_trace)
  json_output = json.dumps(ret, indent=None) # use indent=None for most compact repr
  print("Content-type: text/plain; charset=iso-8859-1\n")
  print(json_output)

raw_input_json = None
options_json = None

# If you pass in a filename as an argument, then process script from that file ...
if len(sys.argv) > 1:
  user_script = open(sys.argv[1]).read()

# Otherwise act like a CGI script with parameters:
#   user_script
#   raw_input_json
#   options_json
else:
  form = cgi.FieldStorage()
  user_script = form['user_script'].value
  if 'raw_input_json' in form:
    raw_input_json = form['raw_input_json'].value
  if 'options_json' in form:
    options_json = form['options_json'].value

pg_logger.exec_script_str(user_script, raw_input_json, options_json, cgi_finalizer)
