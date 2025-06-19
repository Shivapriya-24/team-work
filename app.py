from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        return redirect(url_for('appointment'))
    return render_template('login.html')

@app.route('/appointment')
def appointment():
    return render_template('appointment.html')

@app.route('/booking')
def booking():
    department = request.args.get('department')
    doctor = request.args.get('doctor')
    return render_template('booking.html', department=department, doctor=doctor)

if __name__ == '__main__':
    app.run(debug=True)
