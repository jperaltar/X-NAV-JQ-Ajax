$("#show").on("click", function () {
  $.ajax({
    url: '/doc.txt'
  })
    .done(function (data, textStatus, jqXHR) {
      $('#doc').text(data);
    })
    .fail(function (data, textStatus, jqXHR) {
      $('#doc').text("Couldn't load doc");
    });
});
