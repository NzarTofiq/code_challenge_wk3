<?php
//php v5.4
ini_set('display_errors',1); ini_set('display_startup_errors',1); error_reporting(E_ALL);

function charFreq ($txt, $rmWhite) {
    $txt = $rmWhite ? preg_replace('/\s+/', '', $txt) : $txt ; //spaces tabs and new lines. Not just space, this may make a difference
    $txt = strtolower($txt);
    $total = strlen($txt);
    $result = [];
    foreach (count_chars($txt, 0) as $i => $val) {
        if ($i >= 97 && $i <= 122) {
            $result[chr($i)] = (floatval($val) / floatval($total)) * 100;
        }
    }
    return $result;
}

$txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam';
var_dump(charFreq($txt, false));