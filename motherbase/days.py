#!/usr/bin/env python
# Counts the numbers of days Krissy and I have been together. :)
import time
foo = time.localtime()

ann = time.strptime("08 Nov 17", "%d %b %y")

ann2 = time.localtime()

foobar = (time.mktime(ann2) - time.mktime(ann)) / 60

ree = str(int(foobar / 60 / 24))
