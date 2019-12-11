#!/usr/bin/env python
# Counts the numbers of days Krissy and I have been together. :)
import time
timeNow = time.localtime()

ann = time.strptime("14 Nov 20", "%d %b %y")

ann2 = time.localtime()

foobar = (time.mktime(ann2) - time.mktime(ann)) / 60

totalDays = int(foobar / 60 / 24)

totalDays = -totalDays