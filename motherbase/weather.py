import pyowm
from config import owmApiKey
owm = pyowm.OWM(owmApiKey)
observe = owm.weather_at_place('Ephrata, Pennsylvania')
w = observe.get_weather()
print (w)
testtemp = w.get_temperature('fahrenheit')
print(round(testtemp["temp"]))
def get_all():
    getTemp = w.get_temperature('fahrenheit')
    temp = round(getTemp["temp"])
    status = w.get_status()
    return temp, status;