const bilal={
    ad:'bilal',
    yas:27,
    evliMi:false,
    sevdigiRenkler:['kırmızı','yeşil'],
    adres:{
        il:'Ankara',
        plakaKodu:6,
    },
    bilgileriSoyle:function(){
        return 'benim adım ${this.ad} yasim ${this.yas}';
    },
    ['full-name']:'Bilal Kocoglu',
};

bilal.adres.il='İstanbul';
console.log(bilal.adres.il);

const ibrahim=createOgrenci('ibrahim',10,false,'itu');

//factory functions
function createOgrenci(ad,yas,evliMi,okul){
    return {
        isim:ad,
        yas:yas,
        evliMi:evliMi,
        okuduguOkul:okul,
        bilgileriGoster:function(){
            return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okuduguOkul}`;
        }
    }

}

console.log(ibrahim.bilgileriGoster());





//Constructor Fonksiyon
function Ogrenci(ad,yas,evliMi,okul)
{
    this.isim=ad;
    this.yas=yas;
    this.evliMi=evliMi;
    this.okuduguOkul=okul;
    this.bilgileriGoster=function(){
        return `ismim ${this.isim} yaşım ${this.yas} ve okulum ${this.okuduguOkul}`;
    }
}

const bilal2=new Ogrenci('Bilal',27,false,'itu');

console.log(bilal2.bilgileriGoster());


