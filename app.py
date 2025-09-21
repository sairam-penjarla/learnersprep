# Import the Flask class from the flask module
from flask import Flask, render_template, request, redirect, url_for

# Create an instance of the Flask class.
# The __name__ argument is a special Python variable that gets the name of the current module.
# Flask uses this to know where to look for templates and static files.
app = Flask(__name__)

# Define a route for the home page.
# The '@app.route('/')' decorator associates the 'home' function with the URL '/'.
# When a user navigates to the root URL of your application, this function will be executed.
@app.route('/')
def home():
    """
    This function handles requests to the root URL ('/').
    It now renders the 'index.html' template.
    Make sure you have an 'index.html' file inside a 'templates' folder
    in the same directory as this app.py file.
    """
    return render_template('index.html')
@app.route('/test')
def test():
    """
    This function handles requests to the root URL ('/').
    It now renders the 'index.html' template.
    Make sure you have an 'index.html' file inside a 'templates' folder
    in the same directory as this app.py file.
    """
    return render_template('test.html')

# You can define more routes and functions as needed.
# For example, a route for an 'about' page:
@app.route('/about')
def about():
    """
    This function handles requests to the '/about' URL.
    """
    return "This is the About page."

# To run the Flask application:
# The 'if __name__ == '__main__':' block ensures that the app.run() method
# is only called when the script is executed directly (not when imported as a module).
#
# debug=True enables debug mode, which provides a debugger in the browser
# and automatically reloads the server when code changes.
# It should be set to False in a production environment.
if __name__ == '__main__':
    app.run(debug=True)
