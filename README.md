Notifire Project
=================
![Badge](https://img.shields.io/badge/python-3.7.5-0?logo=Python&color=blue)
![Badge](https://img.shields.io/badge/django-2.2.9-0?logo=Django&color=success)
![Badge](https://img.shields.io/badge/firebase-7.8.2-0?logo=Firebase&color=red)

# Firebase example using with Django


Installation
================
```sh
$ git clone -repository.git-
$ cd notifire
$ export GOOGLE_APPLICATION_CREDENTIALS=/path/to/google_application_credentials.json
$ python manage.py runserver
```

Directory layout
================

Tracker's directory structure looks as follows::

    notifire/
    ├── notifire
    │   ├── __init__.py
    │   ├── connector.py
    │   ├── firebase.py
    │   ├── settings.py
    │   ├── urls.py    
    │   ├── wsgi.py
    └── templates
    │   ├── notifire.html
    └── static
    │   ├── js
    │   │    └── firebase.js
    └── .gitignore
    └── manage.py
    └── README.md
    └── LICENCE
  
Licence
================
MIT