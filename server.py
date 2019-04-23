from flask import Flask, render_template, redirect, url_for, request

app = Flask(__name__)
app.static_folder = 'static'
app.template_folder = 'templates'


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/play')
def game_page():
    return render_template('game.html')


if __name__ == '__main__':
    app.run()
