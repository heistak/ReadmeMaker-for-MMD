//ロード時
$(document).ready(function(){
	// 保存済み設定を取得して表示
	// if(localStorage.options){
	// 	var options = JSON.parse(localStorage.options);
	// 	showOptions(options);
	// }

	// タブを表示
	$('#output').each(function(index) {
		$(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	});
	$('#output').on('click', 'li > a', function(event) {
		if (!$(this).hasClass('is-active')) {
			event.preventDefault();
			var accordionTabs = $(this).closest('#output')
			accordionTabs.find('.is-open').removeClass('is-open').hide();
			$(this).next().toggleClass('is-open').toggle();
			accordionTabs.find('.is-active').removeClass('is-active');
			$(this).addClass('is-active');
		} else {
			event.preventDefault();
		}
	});

	// チェックを反映
	$('#save').click(function(){
		// アウトプット欄を初期化
		$('#output').find('p.term-content').text('');
		// チェックボックスを取得してアウトプット
		for(var i=0; i<$('#input').find('input').length; i++){
			var text_ja = $('#input').find('input:eq('+i+')').siblings('span:lang(ja)').text();
			var text_en = $('#input').find('input:eq('+i+')').siblings('span:lang(en)').text();
			if($('#input').find('input:eq('+i+')').is(':checked')){
				$('#output-pt-ok-ja').append('・'+text_ja+'<br>');
				$('#output-md-ok-ja').append('* '+text_ja+'<br>');
				$('#output-pt-ok-en').append('* '+text_en+'<br>');
				$('#output-md-ok-en').append('* '+text_en+'<br>');
			} else {
				$('#output-pt-ng-ja').append('・'+text_ja+'<br>');
				$('#output-md-ng-ja').append('* '+text_ja+'<br>');
				$('#output-pt-ng-en').append('* '+text_en+'<br>');
				$('#output-md-ng-en').append('* '+text_en+'<br>');
			}
		}
	});

	//親チェックボックスを子チェックボックスすべてに反映
	$('.term-parent').click(function(){
		var children = $(this).closest('li').find('.term');
		if($(this).is(':checked') == true){
			children.prop({'checked': true});
		} else {
			children.prop({'checked': false});
		}
	});
});