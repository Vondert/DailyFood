let prodCount = 0;
let totalPrice = 0;
let bonuses = 0;
let chooseMode = true;

//show basket
$(".bTClhV").on("click", () => {
  $(".dGkFMU").css("display", "block");
});

//close basket
$(".fJwGNt").click(function () {
  $(".dGkFMU").css("display", "none");
});

$(".add-btn").click(function () {

    $("#slideButton").prop("disabled", false);
    $("#slideButton").css("background-color", "#ffffff")

  if (!chooseMode) {
    return;
  }

  prodCount++;
  $(".prodCount").css("display", "flex");
  $(".countNum").text(prodCount);

  $(".dOgGvv").css("display", "none");
  $(".basket-text").css("display", "block");
  $(".total-text").css("visibility", "visible");

  let prodPrice = $(this)
    .siblings(".prod-price-block")
    .find(".prod-price")
    .text()
    .trim();

  //calc price
    let priceValue = parseFloat(prodPrice.replace(/[^\d.]/g, ""));
  totalPrice += parseFloat(priceValue);
  bonuses = (totalPrice * 0.1).toFixed(2);

  //set total price
    $(".subtotal").text(totalPrice.toFixed(2) + "₴");
  $(".gst").text(bonuses);

    let totalPriceWithGST = totalPrice;
    $(".total-price").text(totalPriceWithGST.toFixed(2) + "₴");

  let prodName = $(this)
    .closest(".dvTutP")
    .siblings(".prod-name-block")
    .find(".prod-name")
    .text()
    .trim();

  // find same prod .added-products
  let existingElement = $("#added-products p")
    .filter(function () {
      return $(this).text().trim() === prodName;
    })
    .closest(".fSQnxa");

  // check res
  if (existingElement.length > 0) {
    $(existingElement)
      .find(
        "#" +
          prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") +
          "-input"
      )
      .val(
        parseInt(
          $(
            "#" +
              prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") +
              "-input"
          ).val()
        ) + 1
      );

    let am = parseInt(
      $(
        "#" +
          prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") +
          "-input"
      ).val()
    );
    $(
      "#" +
        prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") +
        "-price"
    ).text(
        (parseFloat(prodPrice.replace(/[^\d.]/g, "")) * am).toFixed(2) + "₴"
    );
  } else {
    let imgUrl = $(this)
      .closest(".kINELj")
      .siblings(".djyJZQ")
      .find(".prod-img")
      .attr("src");

    //Create product block
    let newElement = $(`<div class="sc-1acu81b-0 fSQnxa">
    <div class="sc-1acu81b-0 sc-8slcnd-0 z26spg-0 ceISiB">
      <div width="100%" class="sc-1acu81b-0 sc-8slcnd-0 horDHt">
        <div class="sc-1acu81b-0 sc-8slcnd-0 PXweM"><img
            src="#"
            class="sc-3bjmpw-0 z26spg-1 hYVMIN" width="80" height="80"></div>
        <div class="sc-1acu81b-0 sc-8slcnd-0 z26spg-2 byeNUa">
          <div width="100%" class="sc-1acu81b-0 sc-8slcnd-0 coRRaa">
            <div class="sc-1acu81b-0 kJojFv prod-name-block">
              <p class="sc-1acu81b-0 sc-14ntqp3-0 sc-14ntqp3-7 chGVuz added-prod-name">Name</p>
            </div>
            <div data-testid="delete" width="20px" height="20px" role="button"
              class="sc-1acu81b-0 rsne6i-0 pPpmp btn-delete"><svg width="18px" height="18px" viewBox="0 0 32 34">
                <title>Delete</title>
                <g transform="translate(-4 -2)" fill="none" fill-rule="evenodd">
                  <rect width="39" height="39" rx="5"></rect>
                  <path
                    d="M34.968 7.865a.689.689 0 0 0-.508-.199h-6.842l-1.55-3.696c-.22-.546-.618-1.01-1.193-1.394-.576-.383-1.16-.576-1.75-.576h-7.083c-.59 0-1.173.193-1.749.576-.576.383-.974.848-1.195 1.394l-1.55 3.696h-6.84a.69.69 0 0 0-.509.2.693.693 0 0 0-.199.509V9.79a.69.69 0 0 0 .199.51.691.691 0 0 0 .51.199h2.125v21.073c0 1.225.346 2.269 1.04 3.132C8.567 35.57 9.4 36 10.374 36h18.418c.974 0 1.808-.447 2.502-1.338.692-.895 1.04-1.953 1.04-3.178V10.5h2.126a.69.69 0 0 0 .508-.2.691.691 0 0 0 .199-.509V8.375a.694.694 0 0 0-.2-.51zM15.71 5.077a.627.627 0 0 1 .376-.245h7.017c.148.031.274.112.376.245l1.062 2.59h-9.916l1.085-2.59zM29.5 31.484c0 .325-.051.624-.155.897-.103.273-.21.472-.32.597-.111.126-.188.189-.233.189H10.375c-.044 0-.121-.063-.233-.189-.11-.125-.217-.324-.32-.597a2.507 2.507 0 0 1-.154-.897V10.5H29.5v20.984zm-16.292-2.567h1.417a.689.689 0 0 0 .51-.199.691.691 0 0 0 .198-.51v-12.75a.69.69 0 0 0-.199-.509.689.689 0 0 0-.51-.199h-1.416a.692.692 0 0 0-.51.2.696.696 0 0 0-.198.509v12.75c0 .207.066.375.199.51a.692.692 0 0 0 .509.198zm5.668 0h1.416a.689.689 0 0 0 .508-.199.687.687 0 0 0 .2-.51v-12.75a.686.686 0 0 0-.2-.509.689.689 0 0 0-.508-.199h-1.416a.689.689 0 0 0-.51.2.69.69 0 0 0-.199.509v12.75c0 .207.066.375.2.51a.689.689 0 0 0 .509.198zm5.665 0h1.417a.689.689 0 0 0 .51-.199.691.691 0 0 0 .199-.51v-12.75a.69.69 0 0 0-.2-.509.689.689 0 0 0-.509-.199h-1.417a.687.687 0 0 0-.508.2.687.687 0 0 0-.2.509v12.75c0 .207.066.375.2.51a.687.687 0 0 0 .508.198z"
                    fill="#0F0F0F"></path>
                </g>
              </svg></div>
          </div>
          <div width="100%" class="sc-1acu81b-0 sc-8slcnd-0 bIYpyq">
            <div class="sc-1acu81b-0 sc-8slcnd-0 hfcCSo"><button data-testid="button.decrease"
                class="sc-1ljqqky-0 hUsfXT nxh12a-0 ewqKTK btn-minus" width="auto" type="button"><svg
                  width="18px" height="18px" viewBox="0 0 29 4">
                  <title>Minus</title>
                  <g transform="translate(-5 -18)" fill="none" fill-rule="evenodd">
                    <rect width="39" height="39" rx="5"></rect>
                    <rect fill="currentColor" x="5" y="18" width="29" height="4" rx="2"></rect>
                  </g>
                </svg></button>
              <div height="40" width="65" class="sc-1acu81b-0 sc-8slcnd-0 eLHLyg">
                <div class="sc-1acu81b-0 sc-8slcnd-0 sc-12uj57n-3 gLoLRE">
                  <div class="sc-1acu81b-0 sc-8slcnd-0 sc-12uj57n-4 jUcdXt"><input
                      id="8a8191228819763c01881b6aba242e11"
                      class="sc-12uj57n-0 f009gh-0 iyhQvy nxh12a-1 hrWCpX prod-amount" type="text"
                      name="8a8191228819763c01881b6aba242e11" inputmode="numeric"
                      data-testid="quantitySelector.numberInput" value="1" readonly><label
                      for="8a8191228819763c01881b6aba242e11"
                      class="sc-1acu81b-0 sc-14ntqp3-0 sc-14ntqp3-1 sc-14ntqp3-6 sc-12uj57n-1 f009gh-1 fYpurq">input</label>
                  </div>
                </div>
              </div><button data-testid="button.increase" class="sc-1ljqqky-0 hUsfXT nxh12a-0 ewqKTK btn-plus"
                width="auto" type="button"><svg width="18px" height="18px" viewBox="0 0 29 29">
                  <title>Plus</title>
                  <g transform="translate(-5 -5)" fill="none" fill-rule="evenodd">
                    <rect width="39" height="39" rx="5"></rect>
                    <g stroke="currentColor" stroke-linecap="round" stroke-width="4">
                      <path d="M7 19.5h25M19.5 7v25"></path>
                    </g>
                  </g>
                </svg></button>
            </div>
            <p class="sc-1acu81b-0 sc-14ntqp3-0 sc-14ntqp3-7 jvhtXV added-prod-price">0.00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`);

    // Set values
    $("#added-products").append(newElement);
    newElement.find("img").attr("src", imgUrl);
      newElement.find(".added-prod-name").text(prodName);
      newElement.find(".added-prod-price").text(parseFloat(prodPrice).toFixed(2) + "₴");

    // Add id
    $(newElement)
      .find(".btn-minus")
      .attr(
        "id",
        prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") + "-minus"
      );
    $(newElement)
      .find(".btn-plus")
      .attr(
        "id",
        prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") + "-plus"
      );
    $(newElement)
      .find("input")
      .attr(
        "id",
        prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") + "-input"
      );
    $(newElement)
      .find(".added-prod-price")
      .attr(
        "id",
        prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") + "-price"
      );
    $(newElement)
      .find(".btn-delete")
      .attr(
        "id",
        prodName.replace(/[^a-zA-Zа-яА-Я\s]/g, "").replace(/\s/g, "") +
          "-delete"
      );
  }
});

// Minus click
$(document).on("click", ".btn-minus", function () {
  prodCount--;
  $(".countNum").text(prodCount);

  let input = $(this).attr("id").replace("minus", "input");

  let amount = parseInt($("#" + input).val());
  if (amount == 1) {
    if ($("#added-products").children().length == 1) {
      clearBasket();
    } else {
      $("#added-products").find($(this).closest(".fSQnxa")).remove();
    }
  } else {
    $("#" + input).val(amount - 1);

    let priceElem = $(this).attr("id").replace("minus", "price");

    let totalProdPrice = parseFloat(
      $("#" + priceElem)
        .text()
        .replace(/[^\d.]/g, "")
    );
    let pr = totalProdPrice / amount;
      $("#" + priceElem).text((pr * (amount - 1)).toFixed(2) + "₴");
  }
  changeTotalPrice();
});

// Plus click
$(document).on("click", ".btn-plus", function () {
  prodCount++;
  $(".countNum").text(prodCount);
  let input = $(this).attr("id").replace("plus", "input");

  let amount = parseInt($("#" + input).val());
  $("#" + input).val(amount + 1);

  let priceElem = $(this).attr("id").replace("plus", "price");

  let totalProdPrice = parseFloat(
    $("#" + priceElem)
      .text()
      .replace(/[^\d.]/g, "")
  );
  let pr = totalProdPrice / amount;
    $("#" + priceElem).text((pr * (amount + 1)).toFixed(2) + "₴");

  changeTotalPrice();
});

// Delete btn click
$(document).on("click", ".btn-delete", function () {
  if ($("#added-products").children().length == 1) {
    clearBasket();
  } else {
    let inputId = $(this).attr("id").replace("delete", "input");
    let amnt = parseInt(
      $(document)
        .find("#" + inputId)
        .val()
    );

    prodCount -= amnt;
    $(".countNum").text(prodCount);
    $("#added-products").find($(this).closest(".fSQnxa")).remove();
    changeTotalPrice();
  }
});

// Clear btn click
$(".btn-clear").click(clearBasket);

//Clear basket
function clearBasket() {
  $(".dOgGvv").css("display", "flex");
  $(".basket-text").css("display", "none");
  $(".total-text").css("visibility", "hidden");
  $(".prodCount").css("display", "none");
    $("#slideButton").prop("disabled", true);
  $("#slideButton").css("background-color", "lightgrey");

  $("#added-products").empty();

  totalPrice = 0;
  bonuses = 0;
  totalPriceWithGST = 0;
  prodCount = 0;
}

// Change total price
function changeTotalPrice() {
  let total = 0;

  $("#added-products")
    .find(".added-prod-price")
    .each(function () {
      let price = parseFloat(
        $(this)
          .text()
          .replace(/[^\d.]/g, "")
      );
      total += price;
      bonuses = (total * 0.1).toFixed(2);

      //set total price
        $(".subtotal").text(total.toFixed(2) + "₴");
      $(".gst").text(bonuses);

        let totalPriceWithGST = total;
        $(".total-price").text(totalPriceWithGST.toFixed(2) + "₴");
    });
}

// Change order type
$('.input-order-type').change(function () {
    let price = $(".total-price").text().replace(/[^\d.]/g, "");
    let deliveryPrice = $(".delivery-price").text().replace(/[^\d.]/g, "");
    var selectedRadio = $('.input-order-type:checked').val();
    var input = $('#address');

    if (selectedRadio === 'delivery') {
        input.val('');
        input.attr('placeholder', 'Введіть вашу адресу');
        input.prop('readonly', false);
        $(".delivery-price-block").css("display", "block");
        //add delivery to total price
        $(".total-price").text(parseFloat(parseFloat(price) + parseFloat(deliveryPrice)).toFixed(2) + "₴");
    }
    else if (selectedRadio === 'takeaway')
    {
        input.val('ADDRESS');
        input.removeAttr('placeholder');
        input.prop('readonly', true);
        $(".delivery-price-block").css("display", "none");
        $(".total-price").text(parseFloat(parseFloat(price) - parseFloat(deliveryPrice)).toFixed(2) + "₴");
    }
});

//-----------------------create order-----------------------------
$("#slideButton").click(function () {
    $("#slideButton").css("background-color", "ffffff");

    if (chooseMode && !$("#slideButton").prop("disabled"))
    {
        chooseMode = false;
        $(".basket-text").css("display", "none");
        $(".inputsBox").css("display", "block");

        let price = $(".total-price").text().replace(/[^\d.]/g, "");
        let deliveryPrice = $(".delivery-price").text().replace(/[^\d.]/g, "");
        $(".total-price").text(parseFloat(parseFloat(price) + parseFloat(deliveryPrice)).toFixed(2) + "₴");
    }
    else
    {
        var products = document.getElementsByClassName('added-prod-name');
        var productsNames = Array.from(products).map(function (label) {
            return label.innerText;
        });
        // Получение всех элементов input с указанным атрибутом name
        var inputElements = document.querySelectorAll('input[name="8a8191228819763c01881b6aba242e11"]');
        
        // Создание пустого списка для сохранения значений
        var valueList = [];
        
        // Перебор элементов для получения и сохранения значений
        inputElements.forEach(function (element) {
            var value = element.value;
            valueList.push(value);
        });
        
        var sum = document.querySelector('[data-testid="cartDrawer.totalAmount"]');
        // Получение текста из элемента
        var sum = sum.textContent.replace(/[^\d.]/g, '');
        var bonuses = document.querySelector('.sc-1acu81b-0.sc-14ntqp3-0.sc-14ntqp3-7.gl7882-2.VNKNm.gst').textContent.replace(",", ".");
        var startAddress = "ADDRESS";
        var endAddress = document.querySelector('.userInput#address').value;
        var xhr = new XMLHttpRequest();

        // Установка метода и URL для отправки запроса
        xhr.open("POST", "Order/Index", true);
        
        // Установка заголовков
        xhr.setRequestHeader("Content-Type", "application/json");
        // Создание модели для списка строк
        var cart = {
            productNames: productsNames,
            amount: valueList
        }
        var order = {
            cart: cart,
            sum: sum,
            bonuses: bonuses,
            startAddress: startAddress,
            endAddress: endAddress
        };
        // Отправка запроса
        xhr.send(JSON.stringify(order));
        // Обработка ответа
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Получение ответа от контроллера
                var responseText = xhr.responseText;
        
                // Вывод ответа в консоль
                console.log(responseText);
            } else {
                console.log("Ошибка при отправке запроса: " + xhr.status);
            }
        };
        window.location.href = "/Order/Page";
    }
});