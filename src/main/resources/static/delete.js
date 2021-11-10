function deleteCity(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:8080/city/' + id,
        success: function () {
            let message = 'Xóa thành phố thành công';
            $("#show-form-create").html(messageSuccess(message));
            showAllCity();
        }
    })
}

function deleteCityForm(id) {
    $.ajax({
        url: 'http://localhost:8080/city/' + id,
        type: 'GET',
        success: function (data) {
            let message = 'Bạn có chắc chắn muốn xóa thành phố này?';
            let content = getInfo(message, data);
            $('#show-form-create').html(content);
            $('#modal-footer').html(`
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Thoát</button>
<button type="button" class="btn btn-danger" onclick="deleteCity(${id})" >Xóa</button>`)
        }
    });
}
