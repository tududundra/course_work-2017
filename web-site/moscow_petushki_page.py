from flask import Flask
from flask import render_template, url_for, request, redirect
import os

app = Flask(__name__)

@app.route('/')
def main_page():
    sent_url = url_for('Graph_sent')
    main_url = url_for('main_page')
    key_url = url_for('Graph_key')
    hero_url = url_for('Graph_heroes')
    map_url = url_for('map_')
    return render_template('main_page.html', sent_url=sent_url, main_url=main_url,
                           key_url=key_url, hero_url=hero_url, map_url=map_url)

@app.route('/graphs_sentences')
def Graph_sent():
    sent_url = url_for('Graph_sent')
    main_url = url_for('main_page')
    key_url = url_for('Graph_key')
    hero_url = url_for('Graph_heroes')
    map_url = url_for('map_')
    return render_template('graph_page_sentences.html', sent_url=sent_url, main_url=main_url,
                           key_url=key_url, hero_url=hero_url, map_url=map_url)

@app.route('/graphs_key_words')
def Graph_key():
    sent_url = url_for('Graph_sent')
    main_url = url_for('main_page')
    key_url = url_for('Graph_key')
    hero_url = url_for('Graph_heroes')
    map_url = url_for('map_')
    return render_template('graph_page_key_words.html', sent_url=sent_url, main_url=main_url,
                           key_url=key_url, hero_url=hero_url, map_url=map_url)


@app.route('/graphs_heroes')
def Graph_heroes():
    sent_url = url_for('Graph_sent')
    main_url = url_for('main_page')
    key_url = url_for('Graph_key')
    hero_url = url_for('Graph_heroes')
    map_url = url_for('map_')
    return render_template('graph_page_heroes.html', sent_url=sent_url, main_url=main_url,
                           key_url=key_url, hero_url=hero_url, map_url=map_url)

@app.route('/map')
def map_():
    sent_url = url_for('Graph_sent')
    main_url = url_for('main_page')
    key_url = url_for('Graph_key')
    hero_url = url_for('Graph_heroes')
    map_url = url_for('map_')
    return render_template('map_file.html', sent_url=sent_url, main_url=main_url,
                           key_url=key_url, hero_url=hero_url, map_url=map_url)


if __name__ == '__main__':
    app.run(debug=True)