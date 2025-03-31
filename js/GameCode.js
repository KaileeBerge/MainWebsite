$(document).ready(function(){
  
    // // A tester pour les tiroirs
    // 	$("div.options").hide();
    // 	$("h2").click(function(){
    // 		$(this).next("div.options").slideDown(300)
    // 		.siblings("#catalogue div.options").slideUp("slow");
    // 	});
      
      //Voir aussi les fonctions "accordion" de Jquery
      
      
    // Category slide drawer function

      let model_button = $('#model_style h2')
      let top_Button = $('#top_style h2');
      let bottom_Button = $('#bottom_style h2');
      let socks_Button = $('#socks_style h2');
      let shoes_Button = $('#shoes_style h2');
      let dresses_Button = $('#dresses_style h2');
      let belts_Button = $('#belts_style h2');
      let purse_Button = $('#purse_style h2');
      let bracelets_Button = $('#bracelets_style h2');
      let necklaces_Button = $('#necklaces_style h2');
      let earrings_Button = $('#earrings_style h2');

      let bangs_Button = $('#bangs_style h2');
      let hair_Button = $('#hair_style h2');
      let eyeshadow_Button = $('#eyeshadow_style h2');
      let eyeliner_Button = $('#eyeliner_style h2');
      let eyelashes_Button = $('#eyelashes_style h2');
      let lipliner_Button = $('#lipliner_style h2');
      let lipstick_Button = $('#lipstick_style h2');
      let face_Button = $('#face_style h2');
      let nails_Button = $('#nails_style h2');

      let model_box = $('#model_choices');
      let top_box = $("#tops_choices");
      let bottom_box = $("#bottoms_choices");
      let socks_box = $("#socks_choices");
      let shoe_box = $("#shoes_choices");
      let dresses_box = $("#dresses_choices");
      let belts_box = $('#belts_choices');
      let purse_box = $('#purse_choices');
      let bracelets_box = $('#bracelets_choices');
      let necklaces_box = $('#necklaces_choices');
      let earrings_box = $('#earrings_choices');

      let bangs_box = $('#bangs_choices');
      let hair_box = $("#hair_choices");
      let eyeshadow_box = $("#eyeshadow_choices");
      let eyeliner_box = $("#eyeliner_choices");
      let eyelashes_box = $("#eyelashes_choices");
      let lipliner_box = $("#lipliner_choices");
      let lipstick_box = $("#lipstick_choices");
      let face_box = $('#face_choices');
      let nails_box = $('#nails_choices');

    // Initialize boxes in hidden mode
    $(model_box).hide()  
    $(top_box).hide();
      $(bottom_box).hide();
      $(socks_box).hide();
      $(shoe_box).hide();
      $(dresses_box).hide();
      $(belts_box).hide();
      $(purse_box).hide();
      $(bracelets_box).hide();
      $(necklaces_box).hide();
      $(earrings_box).hide();

     $(bangs_box).hide();
      $(hair_box).hide();
      $(eyeshadow_box).hide();
      $(eyeliner_box).hide();
      $(eyelashes_box).hide();
      $(face_box).hide();
      $(nails_box).hide();

    
      drawer(model_button, model_box);
      drawer(top_Button, top_box);
      drawer(bottom_Button, bottom_box);
      drawer(socks_Button, socks_box);
      drawer(shoes_Button, shoe_box);
      drawer(dresses_Button, dresses_box);
      drawer(belts_Button, belts_box);
      drawer(purse_Button, purse_box);
      drawer(bracelets_Button, bracelets_box);
      drawer(necklaces_Button, necklaces_box);
      drawer(earrings_Button, earrings_box);

      drawer(bangs_Button, bangs_box);
      drawer(hair_Button, hair_box);
      drawer(eyeshadow_Button, eyeshadow_box);
      drawer(eyeliner_Button, eyeliner_box);
      drawer(lipliner_Button, lipliner_box);
      drawer(lipstick_Button, lipstick_box);
      drawer(eyelashes_Button, eyelashes_box);
      drawer(face_Button, face_box);
      drawer(nails_Button, nails_box);

      // Function that displays clothing drawers
     function drawer(elem1, elem2) {
        $(elem1).click(function() {
        $(elem2).animate({ height: "toggle" }, 300);
        });
    };
    
    //Declaration of clothing type variables        
            let model_select = $('#model_selection');
            let model = model_select.css('background-image');
            let btnChangeModel = $('.btn_model1, .btn_model2, .btn_model3, .btn_model4');

            let tops_select = $('#top_selection');
            let tops = tops_select.css('background-image');
            let btnChangeTop = $('.btn_top_1, .btn_top_2, .btn_top_3');
    
            let bottom_select = $('#bottom_selection');
            let bottom = bottom_select.css('background-image');
            let btnChangeBottom = $('.btn_bottom_1, .btn_bottom_2, .btn_bottom_3');
    
            let socks_select = $('#socks_selection');
            let socks = socks_select.css('background-image');
            let btnChangeSocks = $('.btn_socks_1, .btn_socks_2, .btn_socks_3, .btn_socks_4');
    
            let shoes_select = $('#shoes_selection');
            let shoes = shoes_select.css('background-image');
            let btnChangeShoes = $('.btn_shoes_1, .btn_shoes_2, .btn_shoes_3');
      
            let dresses_select = $('#dresses_selection');
            let dresses = dresses_select.css('background-image');
            let btnChangeDresses = $('.btn_dresses_1, .btn_dresses_2, .btn_dresses_3');

            let belt_select = $('#belt_selection');
            let belt = belt_select.css('background-image');
            let btnChangeBelt = $('.btn_belt_1, .btn_belt_2, .btn_belt_3');

            let purse_select = $('#purse_selection');
            let purse = purse_select.css('background-image');
            let btnChangePurse = $('.btn_dresses_1, .btn_costumes_2, .btn_costumes_3');

            let necklaces_select = $('#bracelets_selection');
            let necklaces = necklaces_select.css('background-image');
            let btnChangeNecklaces = $('.btn_bracelets1, .btn_costumes_2, .btn_costumes_3');

            let bracelets_select = $('#bracelets_selection');
            let bracelets = bracelets_select.css('background-image');
            let btnChangeBracelets = $('.btn_bracelets1, .btn_costumes_2, .btn_costumes_3');

            let earrings_select = $('#bracelets_selection');
            let earrings = earrings_select.css('background-image');
            let btnChangeEarrings = $('.btn_bracelets1, .btn_costumes_2, .btn_costumes_3');

            let bangs_select = $('#bangs_selection');
            let bangs = bangs_select.css('background-image');
            let btnChangeBangs = $('.btn_bangs_1, .btn_bangs_2, .btn_bangs_3, btn_bangs_4');

            let hair_select = $('#hair_selection');
            let hair = hair_select.css('background-image');
            let btnChangeHair = $('.btn_hair_1, .btn_hair_2, .btn_hair_3');
    
            let eyeshadow_select = $('#eyeshadow_selection');
            let eyeshadow = eyeshadow_select.css('background-image');
            let btnChangeEyeshadow = $('.btn_eyeshadow_1, .btn_eyeshadow_2, .btn_eyeshadow_3');
    
            
    
    // Déclaration des variables du reset des cheveux et de TOUT sauf les cheveux
        let btnResetHair = $('.btn_reset-hair');
            let btnReset = $('.btn_reset');
    
    // Full Reset Button
        btnReset.click(function(){
          let originalEyeshadow = eyeshadow_select;
          let originalTops = tops_select;
          let originalBottom = bottom_select;
          let originalSocks = socks_select;
          let originalShoes = shoes_select;
          let originalDresses = dresses_select;
          // $("#alert").html(originalTop);
          originalEyeshadow.css('background-image', eyeshadow);
          originalTops.css('background-image', tops);
          originalBottom.css('background-image', bottom);
          originalSocks.css('background-image', socks);
          originalShoes.css('background-image', shoes);
          originalDresses.css('background-image', dresses);
        });
    
    // BTN reset solo des cheveux
       btnResetHair.click(function(){
            let originalHair = hair_select;
            originalHair.css('background-image', hair);
       });
    
    
    // Change on click for each type of clothing
            
     btnChangeModel.click(function(){
        let selectedBtn = $(this);
        let selectedBox = model_select;
        let selectedStyle = $(this).val();
        change(selectedBox, selectedStyle);

     })
    
     btnChangeBangs.click(function(){
        let selectedBtn = $(this);
        let selectedBox = bangs_select;
        let selectedStyle = $(this).val();
        change(selectedBox, selectedStyle);
    })

    
    btnChangeHair.click(function(){
                let selectedBtn = $(this);
                let selectedBox = hair_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
    
            btnChangeEyeshadow.click(function(){
                let selectedBtn = $(this);
                let selectedBox = eyeshadow_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
    
            btnChangeTop.click(function(){
                let selectedBtn = $(this);
                let selectedBox = tops_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
    
            btnChangeBottom.click(function(){
                let selectedBtn = $(this);
                let selectedBox = bottom_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
    
            btnChangeSocks.click(function(){
                let selectedBtn = $(this);
                let selectedBox = socks_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
    
            btnChangeShoes.click(function(){
                let selectedBtn = $(this);
                let selectedBox = shoes_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
      
          btnChangeDresses.click(function(){
                let selectedBtn = $(this);
                let selectedBox = dresses_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });



            btnChangeBracelets.click(function(){
                let selectedBtn = $(this);
                let selectedBox = bracelets_select;
                let selectedStyle = $(this).val();
                change(selectedBox, selectedStyle);
            });
    
            function change(element, newImage){
                element.css('background-image', newImage);
            };
    
       let btnRandom = $('.btn_randomizer');
    
        btnRandom.click(function(){
          let tab_model = [".btn_model1", ".btn_model2", ".btn_model3"]; // mon tableau de données
          let tab_bangs = [".btn_bangs_1", ".btn_bangs_2", ".btn_bangs_3"]; // mon tableau de données
          let tab_hair = [".btn_hair_1", ".btn_hair_2", ".btn_hair_3"]; // mon tableau de données
          let tab_uw = [".btn_uw_1", ".btn_uw_2", ".btn_uw_3"];
          let tab_tops = [".btn_top_1", ".btn_top_2", ".btn_top_3"];
          let tab_bottom = [".btn_bottom_1", ".btn_bottom_2", ".btn_bottom_3"];
          let tab_socks = [".btn_socks_1", ".btn_socks_2", ".btn_socks_3", ".btn_socks_4"];
          let tab_shoes = [".btn_shoes_1", ".btn_shoes_2", ".btn_shoes_3"];
          
          let tab_hair_taille = tab_hair.length;  // la taille de mon tableau
          let tab_uw_taille = tab_uw.length;
          let tab_tops_taille = tab_tops.length;
          let tab_bottom_taille = tab_bottom.length;
          let tab_socks_taille = tab_socks.length;
          let tab_shoes_taille = tab_shoes.length;
          
          function random(element) {
            let tab_rand = Math.floor(Math.random() * element);
            return tab_rand;
          }
                
    //       BON
          // let tab_rand = Math.floor(Math.random() * tab_taille); // la randomisation
    
    //       function retour_tab(tab_hair , tab_rand){
    //         return tab_hair[tab_rand];
    //       };
          
    //       var resulto = retour_tab(tab_hair,tab_rand);
          // $("#alert").html(resulto);
          
          // let selectedBox = hair_select;
          // let hair = hair_select.css('background-image');
          
          tab_rand = random(tab_hair_taille);
          let loulou = "url(https://queendezign.com/temp/hair-" + (tab_rand+1) + ".png)";
          tab_rand = random(tab_uw_taille);
          let lyly = "url(https://queendezign.com/temp/uw-" + (tab_rand+1) + ".png)";
          tab_rand = random(tab_tops_taille);
          let lulu = "url(https://queendezign.com/temp/top-" + (tab_rand+1) + ".png)";
          tab_rand = random(tab_bottom_taille);
          let lala = "url(https://queendezign.com/temp/bottom-" + (tab_rand+1) + ".png)";
          tab_rand = random(tab_socks_taille);
          let lili = "url(https://queendezign.com/temp/socks-" + (tab_rand+1) + ".png)";
          tab_rand = random(tab_shoes_taille);
          let lolo = "url(https://queendezign.com/temp/shoes-" + (tab_rand+1) + ".png)";
          // $("#alert").html(loulou);
          change(hair_select, loulou);
          change(uw_select, lyly);
          change(tops_select, lulu);
          change(bottom_select, lala);
          change(socks_select, lili);
          change(shoes_select, lolo);
        });
    
        // Son des bouttons de choix au hover
        $("button.btn_style").hover(function(){
            nav_audio.play();
            },
        function(){
            nav_audio.load();
        });
      
        $("h2").click(function(){
          h2_audio.play();
        });
      
        // Son du H2 au click
        $('.btn_randomizer').click(function () {
            var audio = {};
            audio["walk"] = new Audio();
            audio["walk"].src = "https://queendezign.com/temp/sounds/mixkit-player-select-notification-2037.mp3"
            audio["walk"].addEventListener('load', function () {
            audio["walk"].play();
          });
        });  
    
    });