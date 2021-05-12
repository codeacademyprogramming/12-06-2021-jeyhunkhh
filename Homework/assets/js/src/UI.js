export class UI {
   setProductDataHtml(data, row) {
    data.forEach((item, index) => {
      row.innerHTML += ` <div class="col-lg-3 mb-5">
              <div class="card">
                <img src="assets/img/${
                  index + 1
                }.jpg" class="ml-3 card-img-top" alt="...">
                <div class="card-body pt-0">
                  <h5 class="card-title d-inline mb-3">${item.name}</h5>
                  <span class="float-end">32cm</span>
                  <p class="card-text">${
                    item.topping != undefined ? item.topping : "Not info"
                  }</p>
                  <span class="price float-center mb-3 d-block text-center">${
                    item.price
                  } $</span>
                  <div class="add-basket">
                    <button><i class="fas fa-shopping-bag"></i></button>
                  </div>
                </div>
                <div class="size">
                  <form action="#">
                    <h5>Sizes:</h5>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                      <label class="form-check-label" for="flexRadioDefault1">
                        small - 20cm
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                      <label class="form-check-label" for="flexRadioDefault2">
                        medium - 25cm
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3">
                      <label class="form-check-label" for="flexRadioDefault4">
                        big - 32cm
                      </label>
                    </div>
                    <button type="submit" class="btn mt-3 w-100 btn-orange">Add to basket</button>
                  </form>
                </div>
              </div>
            </div>`;
    });
  }
}
