//Person Kurucu Fonksiyon
function Person(ad,soyad)
{
    this.ad=ad;
    this.soyad=soyad;
}

Person.prototype.selamVer=function(){
    return `Merhaba ben ${this.ad} ${this.soyad}`;
}

const bilal=new Person('Bilal','Kocoglu');
console.log(bilal.selamVer());

function Ogrenci(ad,soyad,yas,sinif){
    Person.call(this,ad,soyad);
    this.yas=yas;
    this.sinif=sinif;
}

Ogrenci.prototype=Object.create(Person.prototype);

/* Ogrenci.prototype.selamVer=function(){
    return `Merhaba ben ${this.sinif}. sınıfa giden ${this.ad} ${this.soyad}`;
} */


const ibrahim=new Ogrenci('İbrahim','Kocoglu',11,5);
console.log(ibrahim.selamVer());