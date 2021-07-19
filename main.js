$('#prod-pop-up').hide();
$(document).ready(function(){

    

    $('#chicharon').click(function(){
        $('#pop-img').attr('src', 'imgs/products/chicharon/80g.png');
        $('.product-real').text('Chicharon');
        $('.price').text('PHP119.00');
        $('.prod-desc').text('An alternative for the traditional chicharron that full of cholesterol our chicharron offers you a more healthy snack which still has that crunchiness and delicious taste that is perfect to be eaten separately or even be topped for dishes.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#sticks').click(function(){
        $('#pop-img').attr('src', 'imgs/products/sticks/product-pics.png' );
        $('.product-real').text('Sticks');
        $('.price').text('PHP119.00');
        $('.prod-desc').text('Because of the way mushrooms are cooked it stems are particularly thicker and needs to be discarded, but also the stems have more flavor. Oyster Mushroom Sticks are the stem of oyster mushrooms that are cooked to be crunchy and still have that enjoyable taste.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#strings').click(function(){
        $('#pop-img').attr('src', 'imgs/products/banana-strings/product-pics.png' );
        $('.product-real').text('Strings');
        $('.price').text('PHP129.00');
        $('.prod-desc').text('Bananas are one of Mindoro’s produce, being innovative we bring you Banana Strings which are strips of the banana fruit cooked to be crunchy that comes with a variety of flavors giving you that fun taste of healthy snack.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#sisig').click(function(){
        $('#pop-img').attr('src', 'imgs/products/sisig/product-pics.png' );
        $('.product-real').text('Sisig');
        $('.price').text('PHP80.00');
        $('.prod-desc').text('Sisig is one of the best traditional filipino food but it also comes with a lot of cholesterol and other bad stuff that is not good for the body, that is why we produced an alternative made from Oyster Mushrooms that you can indulge anytime while still keeping yourself healthy.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#atsara').click(function(){
        $('#pop-img').attr('src', 'imgs/products/atsara/product-pics.png' );
        $('.product-real').text('Atsara');
        $('.price').text('PHP70.00');
        $('.prod-desc').text('Oyster Mushroom Atsara contains vegetables like carrots, bell peppers, and mushrooms that is cooked in a brine solution which has that delicious tangy flavor that takes you home.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#alamang').click(function(){
        $('#pop-img').attr('src', 'imgs/products-original/alamang/alamang.png' );
        $('.product-real').text('Alamang');
        $('.price').text('PHP70.00');
        $('.prod-desc').text('Perfect for dishes or maybe as a condiment too Oyster Mushroom Alamang takes you normal alamang to a new level adding a new level of flavor and texture for every bite.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#kimchi').click(function(){
        $('#pop-img').attr('src', 'imgs/products/kimchi/product-pics.png' );
        $('.product-real').text('Kimchi');
        $('.price').text('PHP80.00');
        $('.prod-desc').text('Your traditional Korean dish now with a twist, Oyster Mushroom Kimchi our newest innovation is fermented oyster mushrooms blended which gives that new texture and delicious taste perfect for mukbangs or be eaten alone.');
        $('#prod-pop-up').fadeIn(200);
    });
    $('#vinegar').click(function(){
        $('#pop-img').attr('src', 'imgs/products/nipa-vinegar/nipa-vinegar.png' );
        $('.product-real').text('Vinegar');
        $('.price').text('PHP119.00');
        $('.prod-desc').text('Nipa Vinegar also known as sukang sasa or sukang nipa, is a traditional Filipino vinegar made from the sap of the nipa palm, we created our own version of this vinegar, with our own mix of perfectly balanced spices with selected herbs.');
        $('#prod-pop-up').fadeIn(200);
    });


    $('#close-pop-up').click(function(){
        $('#prod-pop-up').fadeOut();
    });


    $('#subscribe').click(function(){
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const email = $('#newsletter-email').val();

        if(email.match(pattern)){
            $('#newsletter-email').addClass('valid');
            $('#newsletter-email').css('border', '2px #A7FF83 solid')
        }else{
             $('#newsletter-email').removeClass('valid');
            $('#newsletter-email').css('border', '2px red solid')
            alert("Enter a valid email address")
        }
    });
        
    

});
