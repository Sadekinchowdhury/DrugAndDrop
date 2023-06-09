function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.textContent);

}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var item = document.createElement("div");
    item.textContent = data;
    item.className = "item";
    document.getElementById("container2").appendChild(item);
}

function reset() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    container1.innerHTML = `<h2>Container 1</h2>
      <div class="item" draggable="true" ondragstart="dragStart(event)">Item 1</div>
      <div class="item" draggable="true" ondragstart="dragStart(event)">Item 2</div>
      <div class="item" draggable="true" ondragstart="dragStart(event)">Item 3</div>`;
    container2.innerHTML = `<h2>Container 2</h2>`;
}

