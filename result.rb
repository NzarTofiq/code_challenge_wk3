#!/usr/bin/env ruby
def charFreq (txt, rmWhite = false)
    result = Hash.new(0)
    freq = Hash.new(0)
    txt = rmWhite ? txt.gsub(/\s+/, '') : txt
    txt = txt.downcase
    total = txt.size

    txt.split('').each do |val|
        if val.match(/^[[:alpha:]]$/)
            freq[val] += 1
            result[val] = (freq[val].to_f / total.to_f) * 100.0
        end
    end
    puts result.sort
end

txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam.';
charFreq(txt)