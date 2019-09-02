$(document).ready(function () {$
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    function previewFile(input){
        const preview = document.querySelector('img'); //selects the query named img
        const file    = document.querySelector('input[type=file]').files[0]; //sames as here
        const reader  = new FileReader();

        reader.onloadend = function () {
               preview.src = reader.result;
           }

        if (file) {
               reader.readAsDataURL(file); //reads the data as a URL
           } else {
               preview.src = "";
           }
      }
      $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        previewFile(this);
    });previewFile();
});
 // Predict
$('#btn-predict').click(function () {
    const form_data = new FormData($('#upload-file')[0]);

    // Show loading animation
    $(this).hide();
    $('.loader').show();

    const img = document.getElementById('img');

    // Load the model.
      mobilenet.load().then(model => {
        // Classify the image.
        model.classify(img).then(predictions => {
          console.log('Predictions: ');
          console.log(predictions);
        var str = "<ul>"
          $.each(predictions, function(key, value) {
            str += "<li>" + ('Name: ' + value.className + ' | Probability: ' + value.probability ) + "</li>";
          });
          str += "</ul>"

          $('.loader').hide();
          $('#result').show();
          document.getElementById('result').innerHTML = str;
        });
      });

});






