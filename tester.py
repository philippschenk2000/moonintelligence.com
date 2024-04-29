from flask import Flask, render_template, send_file
app = Flask(__name__)


@app.route('/')
def website_frontpage():
    return render_template("html/frontpage.html")
@app.route('/css')
def website_frontpage_css():
    return render_template("css/frontpage.css")
@app.route('/media/smalllogo')
def smalllogo():
    with open("media/1713527273184.jpg", "rb") as f:
        return f.read()

@app.route('/2')
def website_frontpage2():
    return render_template("html/formatted_html_file.html")

@app.route('/css/b61f0065e7184ad4')
def website_frontpage_css1():
    return render_template("css/b61f0065e7184ad4.css")
@app.route('/css/c7b33acdcfb6dd9c')
def website_frontpage_css3():
    return render_template("css/c7b33acdcfb6dd9c.css")
@app.route('/media/logo2_arial')
def logo_times():
    return send_file("media/logo5.svg", mimetype='image/svg+xml')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
