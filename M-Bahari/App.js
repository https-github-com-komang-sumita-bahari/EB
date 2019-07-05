import { createStackNavigator } from 'react-navigation';

import LoginScreen from './screen/Login';
import DaftarScreen from './screen/Daftar';
import CekJadwalScreen from './screen/CekJadwal';

import lupaPassword from './screen/lupaPassword';
import PesanTiket from './screen/PesanTiket';
import PesananSaya from './screen/PesananSaya';
import home from './screen/home';
import Akun from './screen/Akun';
import test from './screen/test';
import raw from './screen/raw';
import testing from './screen/testing';
import kamera from './screen/kamera';
import Pesan from './screen/Pesan';
import DetailPesanan from './screen/DetailPesanan';
import PopUp from './screen/PopUp';
import segement from './screen/segement';
import pilihJadwal from './screen/pilihJadwal';
import percobaan from './screen/percobaan';
import Percobaan2 from './screen/Percobaan2';
import DataPenumpang from './screen/DataPenumpang';
import DetailPenumpang from './screen/DetailPenumpang';
import PilihBank from './screen/PilihBank';
import Transfer from './screen/Transfer';
import Transfer2 from './screen/Transfer2';
import Upload from './screen/Upload';
import RiwayatPesanan from './screen/RiwayatPesanan';
import MetodePembayaran from './screen/MetodePembayaran';
import Rincian from './screen/Rincian';
import trial from './screen/trial';
import trial2 from './screen/trial2';

import Transfer_Bank from './screen/Transfer_Bank';
import InputPesanan from './screen/InputPesanan';
import point from './screen/point';
import detail_Pesanan from './screen/detail_Pesanan';
import Pesanan from './screen/Pesanan';
import PesananSedangDiProses from './screen/PesananSedangDiProses';
import Detail_Promo from './screen/Detail_Promo';
import Detail_kupon from './screen/Detail_kupon';
import semua_promo from './screen/semua_promo';
import seat from './screen/seat';
import seatPP from './screen/seatPP';
import semua_kuponcabang from './screen/semua_kuponcabang';
import kupon_percabang from './screen/kupon_percabang';
import kupon_saya from './tabscreen/kupon_saya';
import TampilJadwal from './screen/TampilJadwal';
import detail_eTiket from './screen/detail_eTiket';
import inbox from './screen/inbox';
import UbahPassword from './screen/UbahPassword';
import SplashScreen from './screen/SplashScreen';

import refund from './screen/refund';
import settings from './screen/settings';
import SyaratKetentuan from './screen/SyaratKetentuan';
import KebijakanPrivasi from './screen/KebijakanPrivasi';
import DataPribadi from './screen/DataPribadi';
import SlideTutorial from './screen/slide_tutorial';

import SplashScreen_en from './screen_en/SplashScreen_en';
import home_en from './screen_en/home_en';
import Login_en from './screen_en/Login_en';
import semua_promo_en from './screen_en/semua_promo_en';
import semua_kuponcabang_en from './screen_en/semua_kuponcabang_en';
import Detail_Promo_en from './screen_en/Detail_Promo_en';
import Detail_kupon_en from './screen_en/Detail_kupon_en';
import Akun_en from './screen_en/Akun_en';
import point_en from './screen_en/point_en';
import Daftar_en from './screen_en/Daftar_en';
import Pesanan_en from './screen_en/Pesanan_en';
import PesananSedangDiProses_en from './screen_en/PesananSedangDiProses_en';
import detail_Pesanan_en from './screen_en/detail_Pesanan_en';
import seat_en from './screen_en/seat_en';
import seatPP_en from './screen_en/seatPP_en';
import Transfer_Bank_en from './screen_en/Transfer_Bank_en';
import Upload_en from './screen_en/Upload_en';
import settings_en from './screen_en/settings_en';
import kupon_percabang_en from './screen_en/kupon_percabang_en';
import refund_en from './screen_en/refund_en';
import UbahPassword_en from './screen_en/UbahPassword_en';
import SyaratKetentuan_en from './screen_en/SyaratKetentuan_en';
import KebijakanPrivasi_en from './screen_en/KebijakanPrivasi_en';
import DataPribadi_en from './screen_en/DataPribadi_en';
import SlideTutorial_en from './screen_en/slide_tutorial_en';
import PesanTiket_en from './screen_en/PesanTiket_en';
import Transfer_en from './screen_en/Transfer_en';
import Transfer2_en from './screen_en/Transfer2_en';
import TampilJadwal_en from './screen_en/TampilJadwal_en';

export default createStackNavigator(
    {	
        SplashScreen_en:SplashScreen_en,
        Login_en:Login_en,
        semua_promo_en:semua_promo_en,
        semua_kuponcabang_en:semua_kuponcabang_en,
        home_en:home_en,
        point_en:point_en,
        Akun_en:Akun_en,
        Detail_kupon_en:Detail_kupon_en,
        Detail_Promo_en:Detail_Promo_en,
        PesananSedangDiProses_en:PesananSedangDiProses_en,
        Pesanan_en:Pesanan_en,
        Daftar_en:Daftar_en,
        SplashScreen:SplashScreen,
        Transfer_Bank_en:Transfer_Bank_en,
        Upload_en:Upload_en,
        settings_en:settings_en,
        detail_Pesanan_en:detail_Pesanan_en,
        seat_en:seat_en,
        seatPP_en:seatPP_en,
        kupon_percabang_en:kupon_percabang_en,
        refund_en:refund_en,
        UbahPassword_en:UbahPassword_en,
        SyaratKetentuan_en:SyaratKetentuan_en,
        KebijakanPrivasi_en:KebijakanPrivasi_en,
        DataPribadi_en:DataPribadi_en,
        SlideTutorial_en:SlideTutorial_en,
        PesanTiket_en:PesanTiket_en,
        Transfer_en:Transfer_en,
        Transfer2_en:Transfer2_en,

        SlideTutorial: SlideTutorial,
        settings:settings,
        DataPribadi:DataPribadi,
        inbox:inbox,
        SyaratKetentuan:SyaratKetentuan,
        KebijakanPrivasi:KebijakanPrivasi,
        refund:refund,
        UbahPassword:UbahPassword,
        TampilJadwal:TampilJadwal,
        TampilJadwal_en:TampilJadwal_en,
        detail_eTiket:detail_eTiket,
        Login: LoginScreen,
        semua_kuponcabang:semua_kuponcabang,
        kupon_percabang:kupon_percabang,
        seat:seat,
        seatPP:seatPP,
        kupon_saya:kupon_saya,
        semua_promo:semua_promo,
        Detail_Promo:Detail_Promo,
        Detail_kupon:Detail_kupon,
        PesananSedangDiProses:PesananSedangDiProses,
        point:point,
        detail_Pesanan:detail_Pesanan,
        Pesanan:Pesanan,
        InputPesanan:InputPesanan,
        Transfer_Bank:Transfer_Bank,
        home: home, 
        Rincian:Rincian,
        trial:trial,
        trial2:trial2,        
        RiwayatPesanan:RiwayatPesanan,
        Cek_Jadwal: CekJadwalScreen,
        Login: LoginScreen,
        Transfer:Transfer,
        Transfer2:Transfer2,
        PilihBank:PilihBank,
        test:test,
        MetodePembayaran:MetodePembayaran,
        Upload:Upload,
        percobaan:percobaan,
        Percobaan2:Percobaan2,
        DataPenumpang: DataPenumpang,
        segement:segement,
        PopUp:PopUp,
        Login: LoginScreen,
        Login: LoginScreen, 
        testing: testing,
        Pesan: Pesan,
        pilihJadwal: pilihJadwal,
        testing: testing,
        raw: raw,
        DetailPesanan: DetailPesanan,
        kamera: kamera,
        DetailPenumpang:DetailPenumpang,
        kamera: kamera,
        test:test,
        Akun: Akun,
    	PesanTiket: PesanTiket,
    	PesananSaya : PesananSaya,
        lupaPassword:lupaPassword,
        Daftar: DaftarScreen,
        
    },


);