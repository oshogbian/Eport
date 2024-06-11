from flask import Flask, render_template, request, redirect, url_for
import smtplib
from email.message import EmailMessage
from flask import Flask, render_template, send_file, abort

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('homepage.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/project1')
def project1():
    return render_template('project1.html')

@app.route('/project2')
def project2():
    return render_template('project2.html')

@app.route('/project3')
def project3():
    return render_template('project3.html')

@app.route('/project4')
def project4():
    return render_template('project4.html')

@app.route('/download-jobsync')
def download_jobsync():
    try:
        return send_file('static/JobSync-master.zip', 
                       mimetype='application/zip', 
                       as_attachment=True, 
                       download_name='JobSync-master.zip')
    except FileNotFoundError:
        abort(404)
if __name__ == '__main__':
    app.run(debug=True)