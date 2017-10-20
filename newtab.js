$(function() {
	var colors = [
	'#0a527a',
	'#962a49',
	'#9bae5d',
	'#887db4',
	'#cfa76a' 
	]

	var quotes = {
		"Unknown":["The future depends on what you do today."
				],
		"Steve Jobs":["Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
						"That's been one of my mantras — focus and simplicity. Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple. But it's worth it in the end because once you get there, you can move mountains."
				],
		"Bill Gates" : ["If you are born poor its not your mistake, But if you die poor its your mistake.",
						"I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it.",
						"Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
						"Be nice to nerds. Chances are you'll end up working for one."
				]		
	}

	function getFourColor(index) {
		var arr = [];
		for(var i=0;i<4;i++) {
			if(index == 5)
				index = 0;
			arr.push(colors[index]);
			index++;
		}
		return arr;
	}
	function unnamed () {
		var quoteKeys = Object.keys(quotes);
		var lenColors = colors.length;
		var lenQuotes = quoteKeys.length;
		// console.log(lenQuotes);
		// console.log(lenColors);	
		// generate a random key.
		var randQuoteKey = Math.floor(Math.random() * 463186411384 % lenQuotes);
		console.log("key"+randQuoteKey);
		var key = quoteKeys[randQuoteKey];
		// console.log(key);
		// arr of all the quotes by a perticular key.
		allQuotesByKey = quotes[key];
		// console.log(allQuotesByKey);
		var lenQuoteByKey = allQuotesByKey.length;
		var randQuoteByKey = Math.floor(Math.random() * 988741393133 % lenQuoteByKey);
		console.log("index of that quote"+typeof(randQuoteByKey)+randQuoteByKey);
		var finalQuote = allQuotesByKey[randQuoteByKey];
		// console.log(finalQuote);
		var finalQuoteSize = finalQuote.length;
		var partFour = Math.floor(finalQuoteSize/4);
		// // var fontSize = Math.floor(width / partFour);
		var randIndex = Math.floor(Math.random() * 122384694433594 % 4);
		var newColorArr = getFourColor(randIndex);
		var start = 0;
		var end = partFour;
		var quoteReCreated = '';
		// $("span").css("font-size",fontSize);
		for(var i=0;i<4;i++) {
			var select = '#color'+i;
			quoteReCreated += '<span id="color'+i+'">'+finalQuote.substring(start,end)+'</span>';
			// console.log(newColorArr[i]);
			$(select).css("color",newColorArr[i]);
			start = end;
			end = start+partFour+1;
		}
		$("#one").html(quoteReCreated);
		$("#author").text('-'+key);
		for(var i=0;i<4;i++) {
			var select = '#color'+i;
			$(select).css("color",newColorArr[i]);
		}

	}

	unnamed();
	setInterval(unnamed,10000);
});