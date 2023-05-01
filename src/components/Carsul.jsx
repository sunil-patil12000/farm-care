

const Carsul = () => {
   return (
      <>
         <header class="slider-main">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
               <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
               </ol>
               <div class="carousel-inner" role="listbox">

                  <div class="carousel-item active" style={{ background: "url('images/slider-01.jpg')" ,backgroundSize: 'cover' }}>
                     <div class="carousel-caption d-none d-md-block">
                        <h3>Welcome to Farming Care</h3>
                        <p>A Great Theme For Garden Lawn Care</p>
                     </div>
                  </div>

                  <div class="carousel-item" style={{ background: "url('images/slider-02.jpg')", backgroundSize: 'cover' }}>
                     <div class="carousel-caption d-none d-md-block">
                        <h3>Beautiful Farming </h3>
                        <p>A Great Theme For Garden Lawn Care</p>
                     </div>
                  </div>

                  <div class="carousel-item" style={{ background: "url('images/slider-03.jpg')" ,backgroundSize: 'cover' }}>
                     <div class="carousel-caption d-none d-md-block">
                        <h3>Welcome to Farming Care</h3>
                        <p>A Great Theme For Garden Lawn Care</p>
                     </div>
                  </div>
               </div>
               <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
               </a>
               <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
               </a>
            </div>
         </header>





      </>
   )
}

export default Carsul