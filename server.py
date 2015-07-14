import bottle
import mimetypes
from bottle import route, run
from bottle import template, static_file

app = application = bottle.Bottle()


@app.route('/hello')
def hello():
    return "Hello World!"

@app.route('/')
def mainpage_handler():
    return template('mainpage')

@app.get('/<filename:re:.*\.(js|jsx)>')
def assets(filename):
    return static_file(filename, root='static', mimetype='application/javascript')

@app.get('/<filename:re:.*\.(css)>')
def assets(filename):
    return static_file(filename, root='static')

@app.get('/<filename:re:.*\.(woff)>')
def assets(filename):
    return static_file(filename, root='static', mimetype='application/x-font-woff')

@app.get('/<filename:re:.*\.(woff2)>')
def assets(filename):
    return static_file(filename, root='static', mimetype='application/x-font-woff2')

@app.get('/<filename:re:.*\.(ttf)>')
def assets(filename):
    return static_file(filename, root='static', mimetype='application/x-font-ttf')

@app.get('/<filename:re:.*\.(jpg|jpeg|png)>')
def assets(filename):
    return static_file(filename, root='static', mimetype='image/jpg')

if __name__ == '__main__':
    app.run(host='localhost', port=6969, debug=True)
