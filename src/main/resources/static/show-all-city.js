showAllCity();

function showAllCity() {
    $.ajax({
        url: 'http://localhost:8080/city',
        type: 'GET',
        success: function (data) {
            let content = `<thead>
                            <th>#</th>
                            <th>Thành phố</th>
                            <th>Quốc gia</th>
                            <th></th>
                        </thead>`
            for (let i = 0; i < data.length; i++) {
                content += `<tr>
                                <td>${i + 1}</td>
                                <td><a style="cursor: pointer; color: blue;" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="viewCityDetails(${data[i].id})">${data[i].name}</a></td>
                                <td>${data[i].national?.name}</td>
                                <td>
                                    <button style="cursor: pointer" onclick="editCityForm(${data[i].id})" class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Chỉnh sửa</button>
                                    <button style="cursor: pointer" class="btn btn-danger" onclick="deleteCityForm(${data[i].id})" data-bs-toggle="modal" data-bs-target="#exampleModal">Xóa</button>
                                </td>
                            </tr>`
            }
            $('#show-all-city').html(content);
        }
    });
}

function getInfo(message, data) {
    return `
           <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${message}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div>
                Tên thành phố: ${data.name}
                </div>
                <div>
                Quốc gia: ${data.national?.name}
                </div>
                <div>
                GDP: ${data.gdp}
                </div>
                <div>
                Dân số: ${data.population}
                </div>
                <div>
                Diện tích: ${data.area}
                </div>
                <div>
                Giới thiệu: ${data.description}
                </div>
                <div class="modal-footer"  id="modal-footer">
               
                </div>
           </div>`;
}

function viewCityDetails(id) {
    $.ajax({
        url: 'http://localhost:8080/city/' + id,
        type: 'GET',
        success: function (data) {
            let message = 'Thông tin thành phố';
            let content = getInfo(message, data)
            $('#show-form-create').html(content);
            $('#modal-footer').html(`<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>`)
        }
    });
}

function showAllNational() {
    $.ajax({
        url: 'http://localhost:8080/national',
        type: 'GET',
        success: function(data) {
            let content = '';
            for (let i = 0; i < data.length; i++) {
                content += `<option value="${data[i].id}">${data[i].name}</option>`
            }
            $('#national').html(content);
        }
    })
}

function messageSuccess(messageCreate) {
    return `
           <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${messageCreate}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
        <p>${messageCreate}</p>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
        </div>`;
}

