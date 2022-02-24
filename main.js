$(document).ready(function() {
    
    $.getJSON("php/obtener_noticias.php", mostrar_noticias)
    
    function mostrar_noticias(noticias) {
                
        $.each(noticias, function(clave, valor) {

            // Lista de noticias
            var list_noticia = $('<li class="ui-li-has-thumb">adhkjsahdkj   </li>');
            var link_noticia = $('<a href="#not'+valor.app_id+'" class="ui-btn"></a>')
            link_noticia.append('<img src="img/noticias/'+valor.app_img+'.jpg alt="'+valor.app_img+'">')
            link_noticia.append('<h3 class="titulo">'+valor.app_titulo+'</h3>')
            link_noticia.append('<p>Por '+valor.app_autor+' - '+valor.app_fecha+'</p>')
            list_noticia.append(link_noticia)

            $('#lista-noticias').append(list_noticia)

            // Lista páginas
            var cont_page = $('<div data-role="page" id="noticia'+valor.app_id+'" class="noticia" data-theme="a"></div>')
                cont_page.append ('<div data-role="header" data-position="fixed" data-tap-toggle="false">' 
                                + '<a href="#" data-icon="back" data-iconpos="notext" data-rel="back">volver</a>' 
                                + '<h1 class="nombre-art">'+valor.app_titulo+'</h1></div>')

            var info_page = $('<div role="main" class="noticia"></div>')
                info_page.append('<img src="img/noticias/'+valor.app_img+'.jpg" alt="'+valor.app_img+'" width="100%">')

            var cont_texto = $('<div class="cuerpo"></div>')
                cont_texto.append('<p><strong>'+valor.app_autor+'</strong> - '+valor.app_fecha+'</p>'
                +'<h2>'+valor.app_titulo+'</h2>'
                +'<h3>'+valor.app_bajada+'</h3>'
                +'<br/><p>'+valor.app_cuerpo+'</p>')
            

            cont_page.append(info_page)
            cont_page.append(cont_texto)    
            $(document.body).append(cont_page)  

        
        });  
    }
    
})