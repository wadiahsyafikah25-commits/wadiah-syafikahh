import sys
import PyQt5
from PyQt5.QtWidgets import QMainWindow
from PyQt5.uic import loadUi
from PyQt5.QtWidgets import QApplication
from PyQt5.QtWidgets import QMessageBox

class latihan1 (QMainWindow):

    def __init__ (self):
        QMainWindow.__init__(self)
        loadUi('latihan1.ui', self)
        self.btnklik.clicked.connect (self, Tampilpesan)

    def Tampilpesan (self):
        msgBox=QMessageBox()
        msgBox.setloon(QMessageBox.Information)
        msgBox.setWindowTitle ('pesan')
        msgBox.setText ('Terima Kasih Telah Berkunjung')
        msg
        

