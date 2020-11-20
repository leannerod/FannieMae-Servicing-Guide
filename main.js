window.onload = function () {
  // Functionality to open each box
  function showDetails(name) {
    document.getElementById(name).style.display = "block";
    console.log(`${name} has been opened`);
  }

  document
    .getElementById("boarding")
    .addEventListener("click", () => showDetails("boarding-content-container"));
  document
    .getElementById("hazards")
    .addEventListener("click", () => showDetails("hazards-content-container"));
  document
    .getElementById("lawn")
    .addEventListener("click", () => showDetails("lawn-content-container"));
  document
    .getElementById("lock")
    .addEventListener("click", () => showDetails("lock-content-container"));
  document
    .getElementById("roof")
    .addEventListener("click", () => showDetails("roof-content-container"));
  document
    .getElementById("pool")
    .addEventListener("click", () => showDetails("pool-content-container"));
  document
    .getElementById("winter")
    .addEventListener("click", () => showDetails("winter-content-container"));
  document
    .getElementById("other")
    .addEventListener("click", () => showDetails("other-content-container"));

  // Functionality to close modal
  function hideDetails(name) {
    document.getElementById(name).style.display = "none";
    console.log(`${name} has been closed`);
  }

  document
    .getElementById("close")
    .addEventListener("click", () => hideDetails("boarding-content-container"));
  document
    .getElementById("close2")
    .addEventListener("click", () => hideDetails("hazards-content-container"));
  document
    .getElementById("close3")
    .addEventListener("click", () => hideDetails("lawn-content-container"));
  document
    .getElementById("close4")
    .addEventListener("click", () => hideDetails("lock-content-container"));
    document
    .getElementById("close5")
    .addEventListener("click", () => hideDetails("roof-content-container"));
    document
    .getElementById("close6")
    .addEventListener("click", () => hideDetails("pool-content-container"));
    document
    .getElementById("close7")
    .addEventListener("click", () => hideDetails("winter-content-container"));
    document
    .getElementById("close8")
    .addEventListener("click", () => hideDetails("other-content-container"));

  // Dropdown menu functionality
  // Boarding
  document
    .getElementById("window-selection")
    .addEventListener("click", () => showDetails("window-choices"));

  document
    .getElementById("slider-door-selection")
    .addEventListener("click", () => showDetails("price-slider-door"));
  document
    .getElementById("security-door-selection")
    .addEventListener("click", () => showDetails("price-security-door"));
  document
    .getElementById("crawl-space-selection")
    .addEventListener("click", () => showDetails("price-crawl-space"));

  // Boarding - Windows
  document
    .getElementById("under-75")
    .addEventListener("click", () => showDetails("price-75-and-less"));
  document
    .getElementById("size-76-100")
    .addEventListener("click", () => showDetails("price-76-to-100"));
  document
    .getElementById("size-101-125")
    .addEventListener("click", () => showDetails("price-101-125"));

  // Hazards
  document
    .getElementById("fridge-selection")
    .addEventListener("click", () => showDetails("price-fridge"));
  document
    .getElementById("toilet-selection")
    .addEventListener("click", () => showDetails("price-toilet"));
  document
    .getElementById("wires-selection")
    .addEventListener("click", () => showDetails("price-wires"));
  document
    .getElementById("gas-water-selection")
    .addEventListener("click", () => showDetails("price-gas-water"));
  document
    .getElementById("removing-gas-selection")
    .addEventListener("click", () => showDetails("price-gas-removal"));

  // Lawn
  document
    .getElementById("initial-lawn-cut-selection")
    .addEventListener("click", () => showDetails("initial-lawn-choices"));
  document
    .getElementById("lawn-maintenance-selection")
    .addEventListener("click", () => showDetails("regular-lawn-choices"));

  // Lawn - initial cutting
  document
    .getElementById("initial-up-to-10k")
    .addEventListener("click", () => showDetails("price-initial-10k"));
  document
    .getElementById("initial-up-to-15k")
    .addEventListener("click", () => showDetails("price-initial-15k"));

  // Lawn - maintenance
  document
    .getElementById("regular-up-to-10k")
    .addEventListener("click", () => showDetails("price-regular-10k"));
  document
    .getElementById("regular-up-to-15k")
    .addEventListener("click", () => showDetails("price-regular-15k"));

  // Lock
  document
    .getElementById("knoblock-selection")
    .addEventListener("click", () => showDetails("price-knoblock"));
  document
    .getElementById("padlock-selection")
    .addEventListener("click", () => showDetails("price-padlock"));
  document
    .getElementById("slider-lock-selection")
    .addEventListener("click", () => showDetails("price-slider-lock"));
  document
    .getElementById("window-lock-selection")
    .addEventListener("click", () => showDetails("price-window-lock"));

  // Roof
  document
    .getElementById("roof-selection")
    .addEventListener("click", () => showDetails("price-roof"));

  // Pool
  document
    .getElementById("pool-selection")
    .addEventListener("click", () => showDetails("price-pool"));

  // Winterization
  document
    .getElementById("snow-selection")
    .addEventListener("click", () => showDetails("price-snow"));
    document
    .getElementById("winterization-selection")
    .addEventListener("click", () => showDetails("price-winterization"));

    // Other
  document
  .getElementById("emergency-selection")
  .addEventListener("click", () => showDetails("price-emergency"));
  document
  .getElementById("sump-pump-selection")
  .addEventListener("click", () => showDetails("price-sump-pump"));
  document
  .getElementById("utility-selection")
  .addEventListener("click", () => showDetails("price-utility"));
  document
  .getElementById("vacancy-selection")
  .addEventListener("click", () => showDetails("price-vacancy"));
};
