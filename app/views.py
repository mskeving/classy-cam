import json

from flask import render_template
from app import app, db
from models import Example

@app.route('/')
def index():
    return render_template('base.html')

@app.route('/api/ultianalytics', methods=['GET', 'POST'])
def ultianalytics():
	# example endpoint for fetching info from ultianalytics.
	return json.dumps({'results': 'none'})
