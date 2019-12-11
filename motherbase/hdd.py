# import shutil
# from config import hdd1, hdd2, hdd3

# def getHDD():
#     total, used, free = shutil.disk_usage("/")
#     t2, u2, f2 = shutil.disk_usage(hdd1)
#     t3, u3, f3 = shutil.disk_usage(hdd2) 
#     t4, u4, f4 = shutil.disk_usage(hdd3)
#     grandTotal = (total // (2**30)) + (t2 // (2**30)) + (t3 // (2**30)) + (t4 // (2**30))
#     grandUsed = (used // (2**30)) + (u2 // (2**30)) + (u3 // (2**30)) + (u4 // (2**30))
#     grandFree = (free // (2**30)) + (f2 // (2**30)) + (f3 // (2**30)) + (f4 // (2**30))
#     return grandTotal, grandUsed, grandFree;