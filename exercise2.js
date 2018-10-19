function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    let harga = 2000
    let hasil = []
    if(arrPenumpang.length === 0){
    return arrPenumpang
  }
  for(let i = 0; i < arrPenumpang.length; i++){
    let penumpang = arrPenumpang[i]
    let objPenumpang = {}

    objPenumpang.penumpang = penumpang[0]
    objPenumpang.naikDari = penumpang[1]
    objPenumpang.tujuan = penumpang[2]
    objPenumpang.harga = harga * (rute.indexOf(objPenumpang.tujuan ) - rute.indexOf(objPenumpang.naikDari))
    hasil.push(objPenumpang)
  } 
  return hasil
}
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]