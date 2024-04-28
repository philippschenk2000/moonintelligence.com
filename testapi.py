from bs4 import BeautifulSoup

# Load your CSS file
with open('static/css/b61f0065e7184ad4.css', 'r') as file:
    css_content = file.read()

# Simple formatting: add a newline before each new style block
formatted_css = '\n'.join(['\n' + line if line.strip().endswith('{') else line for line in css_content.splitlines()])

# Save the formatted CSS to a new file
with open('static/css/b61f0065e7184ad4.css', 'w') as file:
    file.write(formatted_css)

print("CSS has been formatted and saved to 'formatted_css_file.css'.")