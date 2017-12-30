// ==UserScript==
// @name         tlanslate_for_reddit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

//
// Google Translate Link
//
function en_to_jp_google_translate(sentence)
{
    return  'https://translate.google.com/?hl=ja#en/ja/' + escape(sentence);
}

//
// Google Translate LinkをRedditに埋め込む
//
function translate_link_to_hacker_news()
{
    var archive_title_elements   = document.getElementsByClassName('title may-blank');
    var archive_comment_elements = document.getElementsByClassName('flat-list buttons');

    for(var i = 0; i < archive_title_elements.length; i++)
    {
        var archive_title = archive_title_elements[i].innerText;

        var google_translate_link = en_to_jp_google_translate(archive_title);

        var a_link_for_append = document.createElement('a');
        a_link_for_append.setAttribute('href', google_translate_link);
        a_link_for_append.setAttribute('target', '_blank');
        a_link_for_append.style.cssText = 'color: #828282;'        +
                                          'font-size: 7  pt;'      +
                                          'text-decoration: none;' +
                                          'font-weight: bold;'     +
                                          'padding-left: 5px;';

        a_link_for_append.appendChild(document.createTextNode('  翻訳'));

        archive_comment_elements[i].appendChild(a_link_for_append);
    }
}

translate_link_to_hacker_news();