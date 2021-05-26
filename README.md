# Arcade Stick
___

## Installation
- Gunicorn only runs on UNIX, therefore windows user will use WSL2, [setup instructions](https://docs.microsoft.com/fr-fr/windows/wsl/install-win10)
- install Python 3.9.4 (virtualenv recommended)
    - [instructions](https://python.doctor/page-virtualenv-python-environnement-virtuel)
- install requirements with `pip install -r requirements.txt`
- launch server with either:
    - `gunicorn --worker-class eventlet -w 1 app:app`
    - `flask run`
    - `./start.sh`


## Run with python
You can run without docker.
Install dependencies with `pip install -r requirements.txt` and run `python app.py`

## Run on Docker
You can also run arcade stick on Docker
Before change ip address in `app.py` to `0.0.0.0`
- `docker-compose up`
The folder will be mounted in docker compose so the server will relaunch on edit.