function cekNum (num)  {
    try {
        if(num == "") throw "kosong";
        if(isNaN(num)) throw "bukan angka";
        num = Number(num);
        if(num > 5) throw `terlalu besar`
    } catch (error) {
      console.log(`num ${error}`)
    } finally{
        console.log("done")
    }
  }

  cekNum(5);

