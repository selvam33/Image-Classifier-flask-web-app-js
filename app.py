import os
from flask import Flask, redirect, url_for, request, render_template
app = Flask(__name__, template_folder='template')

@app.route('/')
def index():
   return render_template('index.html')

if __name__ == '__main__':
    app.run(port=5002, debug=True)

