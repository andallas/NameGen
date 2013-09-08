var generator = (function(generator)
{
	generator.generate = function()
	{
		if(document.getElementById('genType').checked)
		{
			var PREFIX_TABLE = ['Thor','Ogir','Maic','Aur','Sist','Mak','Kloth','Cygan','Min','Ech','Kir','Daed','Jup','Quir','Jun','Cer','Lib','Nep','Ven','Ap','Dia','Vul','Ves','Merc','Jan','Sat','Gen','Sol','Orc','Tel','Lun','Fer','Noven','Pal','Sal','Fort','Fid','Ops','Flor','Vedio','Sum','Lorun','Ter','Lar','Luc','Cael','Abund','Ac','Aer','Aeq','Aes','Aet','Ai','Loc','Al','El','Hel','Ang','Ang','Peren','Ant','Arim','Aur','Aver','Bac','Bel','Duel','Bon','Dea','Even','Bub','Cac','Cam','Card','Carm','Carn','Cer','Clem','Cloac','Conc','Con','Cup','Cur','Cyb','Tac','Dec','Dev','Nemor','Disc','Eger','Emp','Pan','Ep','Fal','Fasc','Faun','Faus'];
			var SUFFIX_TABLE = [['ia','in','a','o','es','er','tune','us','na','can','ta','urn','us','lus','es','vis','da','can','is','on','na','ra','ora','chus','tus','ea','es','sus','id','ele'],
								['enia','elin','ero','ino','erva','emmon','una','alus','iter','inus','era','ollo','ury','ius','onia','sides','anus','minus','ina','estis','quitas','utius','ernus','itia','nona','runcus','lona','ona','enae','enta','entes','ina','ita','ima','era','erra','ensis','anda','ona','acer'],
								['antia','entia','ecura','ternitas','erona','evorta','anius','entia','ordia','iplina','eria','sculapius']];
			var NAME_TABLE = ['Scorch','Sear','Singe','Blaze','Wildfire','Inferno','Ember','Cinder','Aqua','Aqueous','Vapor','Serous','Haze','Mist','Dust','Terra','Vale','Glen','Glade','Ravine','Fissure','Zephyr','Breeze','Gust','Gale','Tempest','Typhoon','Frost','Glaze','Luminous','Radiance','Aurora','Dawn','Corona','Shadow','Penumbra','Veil','Shade','Spark','Volt','Aether','Halcyon','Zenith','Apex','Peak','Summit'];

			var prefix = PREFIX_TABLE[generator.random(0, PREFIX_TABLE.length - 1)];
			var suffix = "";
			var temp = generator.random(0, 2);
			switch(temp)
			{
				case 0:
					var suffixNum = generator.random(1, 3);
					for(var i = 0; i < suffixNum; i++)
					{
						suffix = suffix + SUFFIX_TABLE[0][generator.random(0, SUFFIX_TABLE.length - 1)];
					}
				break;
				case 1:
					var suffixNum = generator.random(1, 2);
					for(var i = 0; i < suffixNum; i++)
					{
						suffix = suffix + SUFFIX_TABLE[1][generator.random(0, SUFFIX_TABLE.length - 1)];
					}
				break;
				case 2:
					suffix = suffix + SUFFIX_TABLE[2][generator.random(0, SUFFIX_TABLE.length - 1)];
				break;
			}

			var name = NAME_TABLE[generator.random(0, NAME_TABLE.length - 1)];

			document.getElementById('text').value = prefix + "" + suffix + " " + name;
		}
		else
		{
			var NAME_TABLE = ['Scorch','Sear','Singe','Blaze','Wildfire','Inferno','Ember','Cinder','Aqua','Aqueous','Vapor','Serous','Haze','Mist','Dust','Terra','Vale','Glen','Glade','Ravine','Fissure','Zephyr','Breeze','Gust','Gale','Tempest','Typhoon','Frost','Glaze','Luminous','Radiance','Aurora','Dawn','Corona','Shadow','Penumbra','Veil','Shade','Spark','Volt','Aether','Halcyon','Zenith','Apex','Peak','Summit'];
			var name = NAME_TABLE[generator.random(0, NAME_TABLE.length - 1)];

			document.getElementById('text').value = name;
		}

		return false;
	}

	generator.random = function(min, max)
	{
		return Math.round(Math.random() * (max - min) + min);
	}

	return generator;
})
(generator || {});