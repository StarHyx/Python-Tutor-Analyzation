# !/usr/local/bin/python3
from bottle import route, get, request, run, template, static_file
try:
    import StringIO # NB: don't use cStringIO since it doesn't support unicode!!!
except:
    import io as StringIO # py3
import json
import pg_logger

root_path = '../src'

@route('/web_exec_<name:re:.+>.py')
@route('/LIVE_exec_<name:re:.+>.py')

@route('/<filepath:path>')
def index(filepath):
    return static_file(filepath, root='../')

# Note that this will run either Python 2 or 3, depending on which
# version of Python you used to start the server, REGARDLESS of which
# route was taken:
@route('/web_exec_py2.py')
@route('/web_exec_py3.py')
@route('/LIVE_exec_py2.py')
@route('/LIVE_exec_py3.py')
def get_py_exec():
  out_s = StringIO.StringIO()

  def json_finalizer(input_code, output_trace):
    ret = dict(code=input_code, trace=output_trace)
    json_output = json.dumps(ret, indent=None)
    out_s.write(json_output)

  options = json.loads(request.query.options_json)

  pg_logger.exec_script_str_local(request.query.user_script,
                                  request.query.raw_input_json,
                                  options['cumulative_mode'],
                                  options['heap_primitives'],
                                  json_finalizer)

  return out_s.getvalue()


if __name__ == "__main__":
    print("***** 服务启动成功 打开localhost:8003/debugger.html 进行调试 *****")
    run(host='localhost', port=8003, reloader=True)
