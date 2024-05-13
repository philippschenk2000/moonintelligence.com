from flask import Flask, render_template, send_file
app = Flask(__name__)

#rot: ff5355, blue: 61b9ea
@app.route('/')
def website_frontpage():
    return render_template("html/frontpage.html")
@app.route('/css')
def website_frontpage_css():
    return render_template("css/frontpage.css")
@app.route('/about')
def website_about():
    return render_template("html/about.html")
@app.route('/css/about')
def website_about_css():
    return render_template("css/about.css")
@app.route('/insights')
def website_insights():
    return render_template("html/insights.html")
@app.route('/css/insights')
def website_insights_css():
    return render_template("css/insights.css")
@app.route('/careers')
def website_careers():
    return render_template("html/careers.html")
@app.route('/css/careers')
def website_careers_css():
    return render_template("css/careers.css")
@app.route('/contact')
def website_contact():
    return render_template("html/contact.html")
@app.route('/css/contact')
def website_contact_css():
    return render_template("css/contact.css")
@app.route('/media/smalllogo')
def smalllogo():
    with open("media/1713527273184.jpg", "rb") as f:
        return f.read()
@app.route('/media/article1')
def article1():
    with open("media/Novak-Djokovic4.jpg", "rb") as f:
        return f.read()
@app.route('/media/article2')
def article2():
    with open("media/20221216_1671176340-198.jpg", "rb") as f:
        return f.read()
@app.route('/media/linkedin')
def linkedin():
    with open("media/LinkedIn_logo_initials.png", "rb") as f:
        return f.read()
@app.route('/media/twitter')
def twitter():
    with open("media/409-4097837_transparent-background-twitter-logo-hd-png-download.png", "rb") as f:
        return f.read()
@app.route('/media/alexandre')
def alexandre():
    with open("media/3634.jpg", "rb") as f:
        return f.read()
@app.route('/media/sebastien')
def sebastien():
    with open("media/hvtxLD1y_400x400.jpg", "rb") as f:
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
    app.run(host='0.0.0.0', port=8000, ssl_context=('cert.pem', 'key.pem'))
