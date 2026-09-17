Python 3.11.0 (main, Oct 24 2022, 18:26:48) [MSC v.1933 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> import sys
>>> import PyQt5
>>> from PyQt5.QtWidgets import QmainWindow
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    from PyQt5.QtWidgets import QmainWindow
ImportError: cannot import name 'QmainWindow' from 'PyQt5.QtWidgets' (C:\Users\Acer\AppData\Local\Programs\Python\Python311\Lib\site-packages\PyQt5\QtWidgets.pyd)
>>> from PyQt5.QtWidgets import QMainWindow
>>> from PyQt5.QtWidgets import QApplication
>>> from PyQt5.QtWidgets import QMessageBox
>>> from PyQt5.uic import LoadUi
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    from PyQt5.uic import LoadUi
ImportError: cannot import name 'LoadUi' from 'PyQt5.uic' (C:\Users\Acer\AppData\Local\Programs\Python\Python311\Lib\site-packages\PyQt5\uic\__init__.py)
>>> from PyQt5.uic import loadUi
