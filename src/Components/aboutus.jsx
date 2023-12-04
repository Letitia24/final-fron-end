const aboutus = () => {
  return (
    <>
      <div>
        <div id="about" className="scrollto clearfix">
          <div className="row no-padding-bottom clearfix">
            {/*Content Left Side*/}
            <div className="col-3">
              {/*User Testimonial*/}
              <blockquote className="testimonial text-right bigtest">
                <q>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</q>
                <footer>— John Doe, Happy Customer</footer>
              </blockquote>
              {/* End of Testimonial*/}
            </div>
            {/*End Content Left Side*/}
            {/*Content of the Right Side*/}
            <div className="col-3">
              <div className="section-heading">
                <h3>BELIEVING</h3>
                <h2 className="section-title">Focusing On What Matters Most</h2>
                <p className="section-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!</p>
              </div>
              <p>
                Toko ini didirikan pada tahun 2008 dengan fokus awalnya hanya pada layanan pencetakan. Seiring berjalannya waktu, kami telah berkembang dan meningkatkan jangkauan layanan kami untuk memenuhi kebutuhan pelanggan dengan lebih
                luas dan kreatif. Saat ini, kami tidak hanya menyediakan layanan pencetakan standar, tetapi juga telah memperluas portofolio kami.
              </p>
              <p>
                Anda dapat mengandalkan kami untuk membuat berbagai produk seperti bakiho dengan desain menarik, kalender yang disesuaikan, layanan jilid untuk dokumen atau buku, laminating untuk melindungi cetakan Anda, pembuatan kartu
                nama yang profesional, papan nama dan cap untuk identifikasi bisnis Anda, pin dengan desain unik, undangan yang personal, dan berbagai layanan lainnya.
              </p>
              <p>
                Dengan komitmen kami untuk memberikan kualitas tinggi, pelayanan yang cepat, dan kreativitas tanpa batas, kami berusaha untuk terus menjadi mitra terpercaya dalam memvisualisasikan ide-ide Anda. Terima kasih atas dukungan
                Anda sejak tahun 2008, dan kami berharap dapat terus melayani Anda dengan layanan yang berkualitas hingga saat ini dan masa depan.
              </p>
            </div>
            {/*End Content Right Side*/}
            <div className="col-3">
              <img src="images/dancer.jpg" alt="Dancer" />
            </div>
          </div>
        </div>
        {/*End of Content Section*/}
      </div>
    </>
  );
};

export default aboutus;
