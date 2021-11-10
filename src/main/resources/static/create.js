
function showFormCreate() {
    showAllNational();
    let messageCreate = `Thêm mới`
    let content = contentModal(messageCreate);

    content += `<div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
            <button type="button" class="btn btn-primary" id="submit" onclick="createNewCity()">Thêm mới</button>
        </div>`
    $('#show-form-create').html(content);
}

function createNewCity() {
    let name = $('#name').val();
    let national = $('#national').val();
    let area = $('#area').val();
    let population = $('#population').val();
    let gdp = $('#gdp').val();
    let description = $('#description').val();
    let city = {
        name: name,
        national: {
            id: national
        },
        area: area,
        population: population,
        gdp: gdp,
        description: description
    }
    $.ajax({
        url: 'http://localhost:8080/city',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: 'POST',
        data:JSON.stringify(city),
        success: function(data) {
            let messageCreate = 'Thêm mới thành công'
            $("#show-form-create").html(messageSuccess(messageCreate))
            showAllCity();
        }
    })
}

function contentModal(messageCreate) {
    return `
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${messageCreate}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Tên thành phố : </label>
                    <input type="text" id="name" onchange="checkName()" class="form-control">
                    <p id="check-name"></p>
                </div>
                <div class="mb-3">
                  <label for="national" class="form-label">Quốc gia : </label>
                  <select id="national" class="form-select">
                  
                  </select>
                </div>
                <div class="mb-3">
                    <label for="area" class="form-label">Diện tích : </label>
                    <input type="text" id="area" onchange="checkNumber()" class="form-control">
                    <p style="color: red" id="check-area"></p>
                </div>
                <div class="mb-3">
                    <label for="population" class="form-label">Dân số : </label>
                    <input type="text" id="population" onchange="checkNumber()" class="form-control">
                    <p style="color: red" id="check-population"></p>
                </div>
                <div class="mb-3">
                    <label for="gdp" class="form-label">GDP : </label>
                    <input type="text" id="gdp" onchange="checkNumber()" class="form-control">
                    <p style="color: red" id="check-gdp"></p>
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Mô tả: </label>
                    <textarea id="description" class="form-control">
                    </textarea>
                </div>
            </form>
        </div>`;
}
