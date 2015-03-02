#!/usr/bin/python
import re
from collections import Counter

def charFreq (txt, rmWhite = False, igCase = True):
    result = {}
    if rmWhite: txt = re.sub(r"\s+", "", txt) #spaces tabs and new lines. Not just space, this may make a difference
    if igCase: txt = txt.lower()
    txtList = Counter(list(txt))

    for i in txtList:
        if i.isalpha() and i not in result: result[i] = (float(txtList[i]) / float(len(txt))) * 100.0

    return result

txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam.'
print charFreq(txt)