paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam."

//@nzar
console.log('@nzar')
function createBarchart(freq, paraLength){
	var used = 0;
	var notUsed = 0;
	for (var k = 0; k<freq.length; k++){
		document.getElementById('chart').innerHTML += '<div><div id="letter">'+(String.fromCharCode(k+97))+'</div>: <div id="frquency_line" style="width: '+freq[k]*window.innerWidth/100+'%;" >%'+freq[k]+'</div></div>';
		used += freq[k];
	}
	notUsed = 100 - used;
	document.getElementById('chart').innerHTML += 'Characters: %'+used+'<br />Not used: %'+notUsed;
}
function calcFreq(para){
	para = para.toLowerCase();
	var freq = [];
	for(var letter = 0; letter < 26; letter++){
		freq[letter] = 0;
	}
	for(i = 0; i<para.length; i++){
		var characterCode = para.charCodeAt(i) - 97;
		if(characterCode >= 0){
			freq[characterCode] = freq[characterCode]+100/para.length;
		}
	}
	createBarchart(freq, para.length);
}
console.time('n');
calcFreq(paragraph);
console.timeEnd('n');