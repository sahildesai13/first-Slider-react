
import oneImg from './img/1.jpg';
import twoImg from './img/2.jpg';
import threeImg from './img/3.jpg';

function SliderData() {
    return (
        <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={oneImg} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={twoImg} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={threeImg} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default SliderData;