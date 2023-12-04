const product = () => {
  return (
    <>
      {/*Introduction*/}
      <section id="product" className="introduction scrollto">
        <div className="row clearfix">
          <div className="col-3">
            <div className="section-heading">
              <h2 className="section-title">Produk & Layanan</h2>
              <p className="section-subtitle">Jadikan setiap ide Anda mencolok!, biarkan kreasi Anda mengguncang dunia dengan cetakan yang tidak biasa dan penuh gaya</p>
            </div>
          </div>
          <div className="col-2-3">
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.1s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa-solid fa-print" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Print & PhotoCopy</h4>
                <p>print hitam putih, print warna, print pas foto, piagam, pamflet/brosur</p>
              </div>
            </div>
            {/*End of Icon Block*/}
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.3s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-bolt fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Other</h4>
                <p>
                  kop suratspanduk, bendera/panji, sablon kaos, gantungan kunci, edit transfer VCD-DVD, design gambar/foto/video, cetak amplop, cetak map, poster, baliho, scan, laminating, note book , batu prasasti, x bener, undangan,
                  stiker, kalender almanak/ triwulan/meja, kartu Nama
                </p>
              </div>
            </div>
            {/*End of Icon Block*/}
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-tablet fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Cap flash</h4>
                <p>legalisir/besar/kecil, merah/ungu/biru/hijau/kuning/hitam</p>
              </div>
            </div>
            {/*End of Icon Block*/}
            {/*Icon Block*/}
            <div className="col-2 icon-block icon-top wow fadeInUp" data-wow-delay="0.5s">
              {/*Icon*/}
              <div className="icon">
                <i className="fa fa-rocket fa-2x" />
              </div>
              {/*Icon Block Description*/}
              <div className="icon-block-description">
                <h4>Papan Nama</h4>
                <p>biasa/gold/silver, biasa/kalkir, peneti/magnet</p>
              </div>
            </div>
            {/*End of Icon Block*/}
          </div>
        </div>
      </section>
      {/*End of Introduction*/}
    </>
  );
};

export default product;
