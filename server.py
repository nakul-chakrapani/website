import bottle
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
    print "here"
    return static_file(filename, root='static/bower_components', mimetype='application/javascript')

@app.get('/<filename:re:.*\.(css)>')
def assets(filename):
    print "here"
    return static_file(filename, root='static/bower_components')

if __name__ == '__main__':
    app.run(host='localhost', port=6969, debug=True)
