#!/usr/bin/env python
#Unused widget that lists the number of items in a directory(in this case it was movies)
# it's bad
from __future__ import print_function
import os
import json
from config import moviePath

def getmovies():
    path = moviePath
    files = os.listdir(path)
     
    moviecount = 0
    moviecount = 0
    for name in files:
        moviecount = moviecount + 1
     
    return moviecount
