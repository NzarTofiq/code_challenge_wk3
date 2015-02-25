var paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam.';

function getCharPercent (paragraph) {
    var minString = paragraph.toLowerCase().replace(/[^a-z]/g, ''),
    	returnObj = {};
  
	minString.split('').map(function (char){
	    returnObj[char] = returnObj[char]+(100/minString.length) || (100/minString.length);
	});
	return returnObj;
}

console.log(getCharPercent(paragraph));
